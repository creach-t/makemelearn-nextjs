import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { contactSchema } from '@/lib/validations'
import { sendEmail, emailTemplates } from '@/lib/email'
import { getClientIP, sanitizeHtml } from '@/lib/utils'

// Rate limiting (simple in-memory store)
const rateLimit = new Map()

async function checkRateLimit(ip: string): Promise<boolean> {
  const now = Date.now()
  const windowMs = 15 * 60 * 1000 // 15 minutes
  const maxRequests = 2 // Stricter for contact form

  if (!rateLimit.has(ip)) {
    rateLimit.set(ip, { count: 1, resetTime: now + windowMs })
    return true
  }

  const limit = rateLimit.get(ip)
  if (now > limit.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + windowMs })
    return true
  }

  if (limit.count >= maxRequests) {
    return false
  }

  limit.count++
  return true
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = getClientIP(request) || 'unknown'
    const canProceed = await checkRateLimit(ip)
    
    if (!canProceed) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Trop de messages envoyés. Veuillez réessayer dans 15 minutes.' 
        },
        { status: 429 }
      )
    }

    // Parse and validate request body
    const body = await request.json()
    const validatedData = contactSchema.parse(body)

    // Sanitize input data
    const sanitizedData = {
      name: sanitizeHtml(validatedData.name.trim()),
      email: validatedData.email.toLowerCase().trim(),
      subject: sanitizeHtml(validatedData.subject.trim()),
      message: sanitizeHtml(validatedData.message.trim()),
    }

    // Store contact message in database
    const contact = await prisma.contact.create({
      data: {
        name: sanitizedData.name,
        email: sanitizedData.email,
        subject: sanitizedData.subject,
        message: sanitizedData.message,
        metadata: {
          ip,
          userAgent: request.headers.get('user-agent'),
          referer: request.headers.get('referer'),
          timestamp: new Date().toISOString(),
        },
      },
    })

    // Send confirmation email to user
    const userEmailTemplate = emailTemplates.contactConfirmation(
      sanitizedData.name, 
      sanitizedData.subject
    )
    
    await sendEmail({
      to: sanitizedData.email,
      subject: userEmailTemplate.subject,
      html: userEmailTemplate.html,
    })

    // Send notification email to admin
    const adminEmailTemplate = emailTemplates.newContactNotification(
      sanitizedData.name,
      sanitizedData.email,
      sanitizedData.subject,
      sanitizedData.message
    )

    await sendEmail({
      to: process.env.EMAIL_FROM || 'hello@makemelearn.fr',
      subject: adminEmailTemplate.subject,
      html: adminEmailTemplate.html,
    })

    // Update contact stats
    await prisma.stat.upsert({
      where: {
        metricName_date: {
          metricName: 'contacts',
          date: new Date(),
        },
      },
      update: {
        metricValue: { increment: 1 },
      },
      create: {
        metricName: 'contacts',
        metricValue: 1,
        date: new Date(),
      },
    })

    return NextResponse.json({
      success: true,
      message: 'Message envoyé avec succès ! Nous vous répondrons rapidement.',
      data: { id: contact.id },
    })

  } catch (error) {
    console.error('Contact form error:', error)

    // Handle validation errors
    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Données invalides', 
          errors: error.errors 
        },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { 
        success: false, 
        message: 'Une erreur est survenue. Veuillez réessayer plus tard.' 
      },
      { status: 500 }
    )
  }
}

// Health check
export async function GET() {
  try {
    await prisma.$queryRaw`SELECT 1`
    
    return NextResponse.json({
      success: true,
      message: 'Contact API is healthy',
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        message: 'Database connection failed' 
      },
      { status: 500 }
    )
  }
}

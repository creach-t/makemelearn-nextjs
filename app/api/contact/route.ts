import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/db'
import { sendEmail, emailTemplates } from '@/lib/email'
import { getClientIP } from '@/lib/utils'

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères').max(100),
  email: z.string().email('Adresse email invalide'),
  subject: z.string().min(1, 'Veuillez choisir un sujet'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères').max(2000)
})

// Rate limiting simple
const rateLimit = new Map()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const windowMs = 15 * 60 * 1000 // 15 minutes
  const maxRequests = 3

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
    
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Trop de tentatives. Veuillez réessayer dans 15 minutes.' 
        },
        { status: 429 }
      )
    }

    // Parse and validate request body
    const body = await request.json()
    const validatedData = contactSchema.parse(body)

    // Save contact to database (always, even if email fails)
    const contact = await prisma.contact.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        subject: validatedData.subject,
        message: validatedData.message,
        metadata: {
          ip,
          userAgent: request.headers.get('user-agent'),
          timestamp: new Date().toISOString(),
        },
        status: 'new',
      },
    })

    // Try to send emails (non-blocking)
    let emailSuccess = false
    try {
      // Send confirmation email to user
      const userTemplate = emailTemplates.contactConfirmation(
        validatedData.name,
        validatedData.subject
      )
      
      const userEmailResult = await sendEmail({
        to: validatedData.email,
        subject: userTemplate.subject,
        html: userTemplate.html,
        text: userTemplate.text
      })

      // Send notification email to admin
      const adminTemplate = emailTemplates.newContactNotification(
        validatedData.name,
        validatedData.email,
        validatedData.subject,
        validatedData.message
      )
      
      const adminEmailResult = await sendEmail({
        to: process.env.ADMIN_EMAIL || 'hello@makemelearn.fr',
        subject: adminTemplate.subject,
        html: adminTemplate.html,
        text: adminTemplate.text
      })

      emailSuccess = userEmailResult.success && adminEmailResult.success

      if (emailSuccess) {
        console.log('✅ Emails envoyés avec succès pour contact:', contact.id)
      } else {
        console.warn('⚠️ Erreur envoi emails, contact sauvegardé:', contact.id)
      }

    } catch (emailError) {
      console.error('❌ Erreur emails (contact sauvegardé):', emailError)
      emailSuccess = false
    }

    // Return success regardless of email status
    return NextResponse.json({
      success: true,
      message: emailSuccess 
        ? 'Message envoyé avec succès ! Nous vous répondrons rapidement.'
        : 'Message reçu ! Nous vous répondrons rapidement.',
      data: { id: contact.id }
    })

  } catch (error) {
    console.error('Contact form error:', error)

    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Données invalides', 
          errors: error.errors 
        },
        { status: 400 }
      )
    }

    // Handle database errors
    if (error instanceof Error && error.message.includes('P2002')) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Erreur de sauvegarde. Veuillez réessayer.' 
        },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { 
        success: false, 
        message: 'Une erreur est survenue. Veuillez réessayer ou nous contacter directement.' 
      },
      { status: 500 }
    )
  }
}

// Health check
export async function GET() {
  try {
    // Test database connection
    await prisma.$queryRaw`SELECT 1`
    
    return NextResponse.json({
      success: true,
      message: 'Contact API is healthy',
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error('Contact API health check error:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Database connection failed' 
      },
      { status: 500 }
    )
  }
}
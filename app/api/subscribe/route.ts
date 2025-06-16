import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { subscriptionSchema } from '@/lib/validations'
import { sendEmail, emailTemplates } from '@/lib/email'
import { getClientIP } from '@/lib/utils'

// Rate limiting (simple in-memory store for demo)
const rateLimit = new Map()

async function checkRateLimit(ip: string): Promise<boolean> {
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
    // DEBUG: Vérifiez les variables d'environnement
    console.log('🔍 DEBUG - DATABASE_URL:', process.env.DATABASE_URL);
    console.log('🔍 DEBUG - NODE_ENV:', process.env.NODE_ENV);
    console.log('🔍 DEBUG - All env vars related to DB:', {
      DATABASE_URL: !!process.env.DATABASE_URL,
      POSTGRES_PASSWORD: !!process.env.POSTGRES_PASSWORD,
      NODE_ENV: process.env.NODE_ENV
    });

    // Rate limiting
    const ip = getClientIP(request) || 'unknown'
    const canProceed = await checkRateLimit(ip)
    
    if (!canProceed) {
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
    const validatedData = subscriptionSchema.parse(body)

    // Check if email already exists
    const existingRegistration = await prisma.registration.findUnique({
      where: { email: validatedData.email },
    })

    if (existingRegistration && !existingRegistration.unsubscribedAt) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Cette adresse email est déjà inscrite !' 
        },
        { status: 400 }
      )
    }

    // Create or update registration
    const registration = await prisma.registration.upsert({
      where: { email: validatedData.email },
      update: {
        source: validatedData.source,
        metadata: validatedData.metadata || {},
        unsubscribedAt: null, // Re-subscribe if was unsubscribed
      },
      create: {
        email: validatedData.email,
        source: validatedData.source || 'website',
        metadata: validatedData.metadata || {},
      },
    })

    // Update stats
    await prisma.stat.upsert({
      where: {
        metricName_date: {
          metricName: 'registrations',
          date: new Date(),
        },
      },
      update: {
        metricValue: { increment: 1 },
      },
      create: {
        metricName: 'registrations',
        metricValue: 1,
        date: new Date(),
      },
    })

    // Send welcome email
    const emailTemplate = emailTemplates.welcomeSubscription(validatedData.email)
    await sendEmail({
      to: validatedData.email,
      subject: emailTemplate.subject,
      html: emailTemplate.html,
      text: emailTemplate.text,
    })

    return NextResponse.json({
      success: true,
      message: 'Inscription confirmée ! Vérifiez votre email de bienvenue.',
      data: { id: registration.id },
    })

  } catch (error) {
    console.error('Subscription error:', error)

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

    // Handle database errors
    if (error instanceof Error && error.message.includes('P2002')) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Cette adresse email est déjà inscrite.' 
        },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { 
        success: false, 
        message: 'Une erreur est survenue. Veuillez réessayer.' 
      },
      { status: 500 }
    )
  }
}

// Health check
export async function GET() {
  try {
    // DEBUG: Vérifiez les variables d'environnement
    console.log('🔍 DEBUG GET - DATABASE_URL:', process.env.DATABASE_URL);
    
    // Test database connection
    await prisma.$queryRaw`SELECT 1`
    
    return NextResponse.json({
      success: true,
      message: 'Newsletter API is healthy',
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error('Health check error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Database connection failed' 
      },
      { status: 500 }
    )
  }
}

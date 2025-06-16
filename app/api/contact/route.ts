import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

// Importation conditionnelle pour éviter les erreurs
let sendEmail: any
let emailTemplates: any

try {
  const email = require('@/lib/email')
  sendEmail = email.sendEmail
  emailTemplates = email.emailTemplates
} catch (error) {
  console.warn('Email module non disponible:', error)
}

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
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 
               request.headers.get('x-real-ip') || 
               'unknown'
    
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Trop de tentatives. Veuillez réessayer dans 15 minutes.' 
        },
        { status: 429 }
      )
    }

    // Parse request body
    const body = await request.json()
    
    // Validate data
    const validatedData = contactSchema.parse(body)

    // Si le module email n'est pas disponible, simuler l'envoi
    if (!sendEmail || !emailTemplates) {
      console.log('📧 Message de contact simulé (email non configuré):', {
        from: validatedData.email,
        name: validatedData.name,
        subject: validatedData.subject,
        preview: validatedData.message.substring(0, 100) + '...'
      })
      
      return NextResponse.json({
        success: true,
        message: 'Message reçu ! Nous vous répondrons rapidement.'
      })
    }

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

    // Check if emails were sent successfully
    if (!userEmailResult.success && !adminEmailResult.success) {
      console.error('Erreur envoi emails:', { userEmailResult, adminEmailResult })
      return NextResponse.json(
        { 
          success: false, 
          message: 'Erreur lors de l\'envoi. Veuillez réessayer.' 
        },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Message envoyé avec succès ! Nous vous répondrons rapidement.'
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
  return NextResponse.json({
    success: true,
    message: 'Contact API is healthy',
    timestamp: new Date().toISOString(),
  })
}
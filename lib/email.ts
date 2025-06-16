import nodemailer from 'nodemailer'

// Email configuration
const transporter = nodemailer.createTransporter({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

export interface EmailOptions {
  to: string | string[]
  subject: string
  html?: string
  text?: string
  from?: string
}

export async function sendEmail(options: EmailOptions): Promise<boolean> {
  try {
    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.log('Email not configured, skipping send')
      return true // Return true in development to avoid errors
    }

    const mailOptions = {
      from: options.from || process.env.EMAIL_FROM || 'hello@makemelearn.fr',
      to: Array.isArray(options.to) ? options.to.join(', ') : options.to,
      subject: options.subject,
      html: options.html,
      text: options.text,
    }

    await transporter.sendMail(mailOptions)
    return true
  } catch (error) {
    console.error('Error sending email:', error)
    return false
  }
}

// Email templates
export const emailTemplates = {
  welcomeSubscription: (email: string) => ({
    subject: 'Bienvenue dans la communauté MakeMeLearn ! 🎉',
    html: `
      <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 20px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 800;">MakeMeLearn</h1>
          <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Communauté d'entraide entre autodidactes</p>
        </div>
        
        <div style="padding: 40px 20px;">
          <h2 style="color: #333; margin-bottom: 20px;">Bienvenue ${email} ! 👋</h2>
          
          <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">
            Merci de rejoindre notre communauté d'autodidactes créatifs ! Vous êtes maintenant inscrit(e) pour recevoir les dernières nouvelles de MakeMeLearn.
          </p>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #667eea; margin-top: 0;">Ce qui vous attend :</h3>
            <ul style="color: #666; line-height: 1.6;">
              <li>🎯 Accès anticipé à la plateforme</li>
              <li>🏆 Badge de membre fondateur</li>
              <li>📚 Ressources exclusives pour autodidactes</li>
              <li>🤝 Communauté bienveillante et inclusive</li>
            </ul>
          </div>
          
          <p style="color: #666; line-height: 1.6;">
            Nous travaillons actuellement sur la plateforme et vous tiendrons informé(e) de notre progression. En attendant, n'hésitez pas à nous suivre sur nos réseaux sociaux !
          </p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://makemelearn.fr" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: 600; display: inline-block;">
              Découvrir MakeMeLearn
            </a>
          </div>
        </div>
        
        <div style="background: #f8fafc; padding: 20px; text-align: center; color: #999; font-size: 14px;">
          <p>Vous recevez cet email car vous vous êtes inscrit(e) sur makemelearn.fr</p>
          <p>MakeMeLearn - Apprenons et grandissons ensemble</p>
        </div>
      </div>
    `,
    text: `
Bienvenue dans la communauté MakeMeLearn !

Merci ${email} de rejoindre notre communauté d'autodidactes créatifs !

Ce qui vous attend :
- Accès anticipé à la plateforme
- Badge de membre fondateur  
- Ressources exclusives pour autodidactes
- Communauté bienveillante et inclusive

Nous vous tiendrons informé(e) de notre progression.

Découvrez MakeMeLearn : https://makemelearn.fr

MakeMeLearn - Apprenons et grandissons ensemble
    `,
  }),

  contactConfirmation: (name: string, subject: string) => ({
    subject: 'Message reçu - Nous vous répondrons rapidement !',
    html: `
      <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px 20px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">MakeMeLearn</h1>
        </div>
        
        <div style="padding: 30px 20px;">
          <h2 style="color: #333;">Bonjour ${name},</h2>
          
          <p style="color: #666; line-height: 1.6;">
            Nous avons bien reçu votre message concernant : <strong>"${subject}"</strong>
          </p>
          
          <p style="color: #666; line-height: 1.6;">
            Notre équipe vous répondra dans les plus brefs délais, généralement sous 24-48h.
          </p>
          
          <p style="color: #666; line-height: 1.6;">
            Merci pour votre intérêt pour MakeMeLearn !
          </p>
        </div>
      </div>
    `,
  }),

  newContactNotification: (name: string, email: string, subject: string, message: string) => ({
    subject: `[MakeMeLearn] Nouveau message de ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Sujet :</strong> ${subject}</p>
        <p><strong>Message :</strong></p>
        <div style="background: #f5f5f5; padding: 15px; border-left: 4px solid #667eea;">
          ${message.replace(/\n/g, '<br>')}
        </div>
      </div>
    `,
  }),
}

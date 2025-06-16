import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: {
    default: 'MakeMeLearn - Communauté d\'entraide entre autodidactes créatifs',
    template: '%s | MakeMeLearn'
  },
  description: 'Rejoignez une communauté bienveillante d\'apprenants créatifs. Partagez vos défis, obtenez des perspectives fraîches, et aidez d\'autres autodidactes à développer leurs projets portfolio.',
  keywords: ['autodidacte', 'apprentissage', 'communauté', 'projets créatifs', 'entraide', 'portfolio', 'design', 'développement', 'créativité'],
  authors: [{ name: 'MakeMeLearn Team' }],
  creator: 'MakeMeLearn',
  publisher: 'MakeMeLearn',
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: '/',
    title: 'MakeMeLearn - Communauté d\'entraide entre autodidactes créatifs',
    description: 'Rejoignez une communauté bienveillante d\'apprenants créatifs. Partagez vos défis, obtenez des perspectives fraîches, et aidez d\'autres autodidactes.',
    siteName: 'MakeMeLearn',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MakeMeLearn - Communauté d\'entraide entre autodidactes créatifs',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MakeMeLearn - Communauté d\'entraide entre autodidactes créatifs',
    description: 'Rejoignez une communauté bienveillante d\'apprenants créatifs.',
    images: ['/og-image.jpg'],
    creator: '@MakeMeLearn',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="fr"
      className={inter.variable}
      suppressHydrationWarning={true}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#667eea" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body
        className={inter.className}
        suppressHydrationWarning={true}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
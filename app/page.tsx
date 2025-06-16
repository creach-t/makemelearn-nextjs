import { Metadata } from 'next'
import { HeroSection } from '@/components/sections/HeroSection'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { FeaturesSection } from '@/components/sections/FeaturesSection'
import { StatsSection } from '@/components/sections/StatsSection'
import { VisionSection } from '@/components/sections/VisionSection'
import { SignupSection } from '@/components/sections/SignupSection'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Accueil - Communauté d\'entraide entre autodidactes créatifs',
  description: 'Rejoignez MakeMeLearn, la communauté bienveillante où les autodidactes créatifs s\'entraident sur des projets non-lucratifs. Partagez, apprenez et grandissez ensemble.',
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProcessSection />
        <FeaturesSection />
        <StatsSection />
        <VisionSection />
        <SignupSection />
      </main>
      <Footer />
    </>
  )
}

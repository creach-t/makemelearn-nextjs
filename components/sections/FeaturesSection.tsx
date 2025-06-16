'use client'

import { motion } from 'framer-motion'
import { Heart, Globe, Target, Users2 } from 'lucide-react'

const features = [
  {
    icon: Heart,
    title: 'Apprentissage Bienveillant',
    description: 'Une communauté qui accepte l\'imperfection et les erreurs comme partie intégrante de l\'apprentissage. Pas de jugement, que de l\'entraide.',
  },
  {
    icon: Target,
    title: 'Projets Portfolio',
    description: 'Transformez les défis des autres en opportunités d\'apprentissage. Développez votre portfolio en aidant la communauté.',
  },
  {
    icon: Globe,
    title: 'Diversité des Domaines',
    description: 'Design, développement, 3D, illustration, marketing... Explorez de nouveaux domaines grâce aux projets proposés par la communauté.',
  },
  {
    icon: Users2,
    title: 'Aucun Enjeu Commercial',
    description: 'Projets non-lucratifs uniquement. Focus sur l\'apprentissage pur, sans pression financière ni deadline stressante.',
  },
]

export function FeaturesSection() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
            <span className="gradient-text">Pourquoi MakeMeLearn ?</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
            L&apos;apprentissage collaboratif sans la pression du monde professionnel
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1 
                }}
                viewport={{ once: true }}
                className="card card-hover group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

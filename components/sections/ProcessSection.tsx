'use client'

import { motion } from 'framer-motion'
import { Share2, Lightbulb, Users, TrendingUp } from 'lucide-react'

const processSteps = [
  {
    number: 1,
    title: 'Partagez votre blocage',
    description: 'Vous avancez sur un projet mais vous êtes bloqué ? Partagez votre défi avec la communauté pour obtenir des perspectives fraîches et des idées nouvelles.',
    icon: Share2,
  },
  {
    number: 2,
    title: 'Offrez un projet d\'entraînement',
    description: 'Vous avez une idée hors de votre domaine ? Proposez-la à un junior qui pourra la développer pour son portfolio tout en vous aidant.',
    icon: Lightbulb,
  },
  {
    number: 3,
    title: 'Collaborez sans pression',
    description: 'Échangez en toute bienveillance. Ici, on assume tous qu\'on apprend encore. Pas de jugement, juste de l\'entraide constructive.',
    icon: Users,
  },
  {
    number: 4,
    title: 'Grandissez ensemble',
    description: 'Chaque interaction nourrit votre apprentissage. Aidez les autres quand vous le pouvez, apprenez quand vous en avez besoin.',
    icon: TrendingUp,
  },
]

export function ProcessSection() {
  return (
    <section id="concept" className="section-padding bg-gradient-hero">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
            <span className="gradient-text">Deux façons de s&apos;entraider</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
            Une communauté où chacun apprend en aidant et en étant aidé
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1 
                }}
                viewport={{ once: true }}
                className="text-center group"
              >
                {/* Step number */}
                <div className="relative inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">
                    {step.number}
                  </span>
                  
                  {/* Connection line (except for last item) */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute left-full top-1/2 w-full h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 transform -translate-y-1/2 opacity-30" />
                  )}
                </div>

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg mb-4 group-hover:bg-white/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary-400" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-6 py-3">
            <span className="text-white/80 text-sm">
              Prêt à rejoindre cette aventure collaborative ?
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { HelpCircle, Lightbulb, MessageSquare, Users, CheckCircle, Repeat } from 'lucide-react'

const helpTypes = [
  {
    type: 'A',
    title: 'J\'ai besoin d\'aide sur mon projet',
    description: 'Vous avancez sur un projet dans votre domaine mais vous êtes bloqué ou voulez des perspectives fraîches.',
    icon: HelpCircle,
    color: 'from-primary-500 to-blue-500',
    example: {
      title: 'Exemple :',
      text: '"Je développe une app React et je galère sur l\'architecture de mon state management. Voici mon code..."',
      result: '→ D\'autres développeurs partagent leurs approches et solutions'
    }
  },
  {
    type: 'B',
    title: 'J\'offre un projet d\'entraînement',
    description: 'Vous avez une idée créative hors de votre domaine de compétence que vous aimeriez voir réalisée.',
    icon: Lightbulb,
    color: 'from-accent-500 to-pink-500',
    example: {
      title: 'Exemple :',
      text: '"Je voudrais un logo pour mon projet perso mais je ne sais pas dessiner. Voici le brief..."',
      result: '→ Un apprenti designer s\'empare du projet pour son portfolio'
    }
  }
]

const collaborationSteps = [
  {
    number: 1,
    title: 'Publiez votre demande',
    description: 'Décrivez clairement votre besoin, ajoutez le contexte et les contraintes.',
    icon: MessageSquare,
  },
  {
    number: 2,
    title: 'La communauté répond',
    description: 'D\'autres autodidactes analysent et proposent des solutions ou se portent volontaires.',
    icon: Users,
  },
  {
    number: 3,
    title: 'Collaborez ensemble',
    description: 'Échangez en toute bienveillance, affinez les propositions, partagez vos avancées.',
    icon: Repeat,
  },
  {
    number: 4,
    title: 'Partagez le résultat',
    description: 'Montrez le résultat final, remerciez les contributeurs, aidez d\'autres membres.',
    icon: CheckCircle,
  },
]

export function ProcessSection() {
  return (
    <section id="concept" className="section-padding bg-gradient-hero">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Title */}
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

        {/* Two Help Types */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {helpTypes.map((type, index) => {
            const Icon = type.icon
            return (
              <motion.div
                key={type.type}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2 
                }}
                viewport={{ once: true }}
                className="card card-hover group relative overflow-hidden"
              >
                {/* Type Badge */}
                <div className="absolute top-4 right-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${type.color} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                    {type.type}
                  </div>
                </div>

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${type.color} rounded-xl mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4">
                  {type.title}
                </h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  {type.description}
                </p>

                {/* Example */}
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h4 className="font-semibold text-primary-300 text-sm mb-2">
                    {type.example.title}
                  </h4>
                  <p className="text-white/70 text-sm mb-2 italic">
                    {type.example.text}
                  </p>
                  <p className="text-white/60 text-sm">
                    {type.example.result}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Collaboration Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Le processus collaboratif
          </h3>
          <p className="text-white/80 max-w-2xl mx-auto">
            Quel que soit votre type de demande, voici comment ça fonctionne
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {collaborationSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.6 + index * 0.1 
                }}
                viewport={{ once: true }}
                className="text-center group relative"
              >
                {/* Step number */}
                <div className="relative inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">
                    {step.number}
                  </span>
                  
                  {/* Connection line (except for last item) */}
                  {index < collaborationSteps.length - 1 && (
                    <div className="hidden lg:block absolute left-full top-1/2 w-full h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 transform -translate-y-1/2 opacity-30" />
                  )}
                </div>

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg mb-4 group-hover:bg-white/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary-400" />
                </div>

                {/* Content */}
                <h4 className="text-lg font-bold text-white mb-3">
                  {step.title}
                </h4>
                <p className="text-white/70 text-sm leading-relaxed">
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
          transition={{ duration: 0.8, delay: 1 }}
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

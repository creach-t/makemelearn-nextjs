'use client'

import { motion } from 'framer-motion'

export function VisionSection() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-8">
            <span className="gradient-text">Notre Vision</span>
          </h2>
          
          <div className="space-y-6 text-lg sm:text-xl text-white/85 leading-relaxed">
            <p>
              Créer un espace où l&apos;apprentissage créatif se fait naturellement, sans barrières. 
              Où un développeur peut aider un designer, où un illustrateur peut conseiller 
              un développeur 3D, où chacun grandit en partageant.
            </p>
            
            <p>
              Nous croyons que les meilleurs apprentissages naissent de la collaboration 
              bienveillante entre pairs, loin des enjeux commerciaux et des pressions professionnelles.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 p-8 bg-gradient-hero border border-white/10 rounded-2xl"
          >
            <h3 className="text-xl font-bold text-primary-300 mb-4">
              L&apos;apprentissage collaboratif de demain
            </h3>
            <p className="text-white/80">
              Une communauté où l&apos;imperfection est acceptée, où les questions sont encouragées, 
              et où chaque interaction enrichit l&apos;expérience d&apos;apprentissage de tous.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

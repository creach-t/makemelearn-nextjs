'use client'

import { motion } from 'framer-motion'

const stats = [
  {
    number: '73%',
    label: 'Des créatifs sont autodidactes',
    color: 'text-primary-400',
  },
  {
    number: '89%',
    label: 'Apprennent mieux en collaborant',
    color: 'text-secondary-500',
  },
  {
    number: '2x',
    label: 'Plus rapide avec des retours pairs',
    color: 'text-accent-500',
  },
  {
    number: '10K+',
    label: 'Projets potentiels en 2025',
    color: 'text-primary-300',
  },
]

export function StatsSection() {
  return (
    <section className="section-padding bg-secondary-500/5 border-y border-white/10">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1 
              }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`text-3xl sm:text-4xl lg:text-5xl font-black mb-2 ${stat.color}`}
              >
                {stat.number}
              </motion.div>
              <p className="text-white/80 text-sm sm:text-base leading-tight">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

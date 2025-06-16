'use client'

import { motion } from 'framer-motion'
import { Zap, ArrowRight, Info } from 'lucide-react'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary-500/10 via-secondary-500/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-accent-500/10 to-transparent rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-500/15 border border-primary-500/30 rounded-full px-6 py-3 mb-8">
            <Zap className="w-4 h-4 text-primary-400" />
            <span className="text-primary-300 font-medium text-sm">
              100% Gratuit • Projets Non-Lucratifs • Entre Apprenants
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-8">
            La{' '}
            <span className="gradient-text">
              Communauté d&apos;Entraide
            </span>
            <br />
            entre Autodidactes
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl lg:text-2xl text-white/85 max-w-4xl mx-auto leading-relaxed mb-12">
            Rejoignez une communauté bienveillante d&apos;apprenants créatifs. 
            Partagez vos défis, obtenez des perspectives fraîches, 
            et aidez d&apos;autres autodidactes à développer leurs projets portfolio.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="#signup"
              className="btn btn-primary text-lg px-8 py-4 group"
            >
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              Rejoindre la communauté
            </Link>
            <Link
              href="#concept"
              className="btn btn-secondary text-lg px-8 py-4 group"
            >
              <Info className="w-5 h-5" />
              Découvrir le concept
            </Link>
          </div>

          {/* Stats preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto"
          >
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary-400">
                73%
              </div>
              <div className="text-sm text-white/60">
                Des créatifs sont autodidactes
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-secondary-500">
                89%
              </div>
              <div className="text-sm text-white/60">
                Apprennent mieux en collaborant
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-accent-500">
                2x
              </div>
              <div className="text-sm text-white/60">
                Plus rapide avec des retours
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-white/60 rounded-full mx-auto"
          />
        </div>
      </motion.div>
    </section>
  )
}

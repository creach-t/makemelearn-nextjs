'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, CheckCircle, Shield, Star, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

export function SignupSection() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus('idle')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          source: 'landing_page',
          metadata: {
            section: 'signup',
            timestamp: new Date().toISOString(),
          },
        }),
      })

      const data = await response.json()

      if (data.success) {
        setStatus('success')
        setMessage(data.message)
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.message || 'Une erreur est survenue')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Erreur de connexion. Veuillez réessayer.')
    } finally {
      setIsLoading(false)
    }
  }

  const benefits = [
    {
      icon: Star,
      text: 'Accès anticipé',
    },
    {
      icon: Shield,
      text: 'Badge fondateur',
    },
    {
      icon: CheckCircle,
      text: 'Communauté bienveillante',
    },
    {
      icon: ArrowRight,
      text: 'Projets portfolio',
    },
  ]

  return (
    <section id="signup" className="section-padding bg-gradient-hero border-t border-white/10">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
            <span className="gradient-text">Rejoignez la Communauté</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 mb-12">
            Soyez parmi les premiers autodidactes à expérimenter l&apos;apprentissage collaboratif. 
            Accès anticipé à une communauté qui grandit ensemble.
          </p>

          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="card text-center max-w-md mx-auto"
            >
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">
                Inscription confirmée !
              </h3>
              <p className="text-white/80">
                {message}
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-12">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Votre adresse email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1"
                  error={status === 'error' ? message : undefined}
                />
                <Button
                  type="submit"
                  loading={isLoading}
                  className="whitespace-nowrap"
                >
                  <Mail className="w-4 h-4" />
                  Rejoindre
                </Button>
              </div>
            </form>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto"
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div
                  key={benefit.text}
                  className="flex flex-col sm:flex-row items-center gap-2 text-white/80"
                >
                  <Icon className="w-5 h-5 text-primary-400 flex-shrink-0" />
                  <span className="text-sm text-center sm:text-left">
                    {benefit.text}
                  </span>
                </div>
              )
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <p className="text-sm text-white/60">
              Pas de spam. Désabonnement en un clic. Données sécurisées.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

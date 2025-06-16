import Link from 'next/link'
import { Mail, Github, Twitter } from 'lucide-react'

const footerSections = [
  {
    title: 'MakeMeLearn',
    links: [
      { name: 'Accueil', href: '/' },
      { name: 'À propos', href: '/about' },
      { name: 'Comment ça marche', href: '/how-it-works' },
      { name: 'FAQ', href: '/faq' },
    ],
  },
  {
    title: 'Communauté',
    links: [
      { name: 'Discord (bientôt)', href: '#', disabled: true },
      { name: 'Forums (bientôt)', href: '#', disabled: true },
      { name: 'GitHub', href: 'https://github.com/creach-t' },
      { name: 'Blog (bientôt)', href: '#', disabled: true },
    ],
  },
  {
    title: 'Légal',
    links: [
      { name: 'Conditions d\'utilisation', href: '/legal/terms' },
      { name: 'Politique de confidentialité', href: '/legal/privacy' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { name: 'Nous contacter', href: '/contact' },
      { name: 'hello@makemelearn.fr', href: 'mailto:hello@makemelearn.fr' },
    ],
  },
]

const socialLinks = [
  {
    name: 'Email',
    href: 'mailto:hello@makemelearn.fr',
    icon: Mail,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/creach-t',
    icon: Github,
  },
  {
    name: 'Twitter',
    href: '#',
    icon: Twitter,
    disabled: true,
  },
]

export function Footer() {
  return (
    <footer className="bg-background-darker border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-primary-400 font-semibold text-lg mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.disabled ? (
                      <span className="text-white/40 text-sm">
                        {link.name}
                      </span>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-white/70 hover:text-white text-sm transition-colors"
                        {...(link.href.startsWith('http') && {
                          target: '_blank',
                          rel: 'noopener noreferrer',
                        })}
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social links */}
        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((social) => {
            const Icon = social.icon
            return social.disabled ? (
              <span
                key={social.name}
                className="p-2 rounded-lg bg-white/5 text-white/40 cursor-not-allowed"
                title={`${social.name} (bientôt)`}
              >
                <Icon size={20} />
              </span>
            ) : (
              <Link
                key={social.name}
                href={social.href}
                className="p-2 rounded-lg bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <Icon size={20} />
              </Link>
            )
          })}
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-white/60 text-sm">
                &copy; {new Date().getFullYear()} MakeMeLearn. Apprenons et grandissons ensemble.
              </p>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-white/60">
              <span>Fait avec ❤️ pour les autodidactes</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

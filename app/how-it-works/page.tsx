import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Comment ça marche - MakeMeLearn',
  description: 'Découvrez comment fonctionne MakeMeLearn. Guide complet pour bien démarrer dans notre communauté d\'entraide créative.',
}

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-background text-white">
      {/* Page Hero */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Comment ça marche</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Guide complet pour bien démarrer dans la communauté
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          {/* Two Types of Requests */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Les deux types de demandes</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card card-hover">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Type 1 : "J'ai besoin d'un regard extérieur"</h3>
                <p className="mb-3"><strong>Vous :</strong> Autodidacte avec un niveau intermédiaire/avancé</p>
                <p className="mb-3"><strong>Votre situation :</strong> Vous travaillez sur un projet dans votre domaine mais vous êtes bloqué ou vous voulez des perspectives fraîches</p>
                <p className="mb-6"><strong>Ce que vous obtenez :</strong> Des conseils, des idées alternatives, des solutions créatives de la part d'autres autodidactes</p>
                
                <div className="bg-primary-500/10 border-l-4 border-primary-500 p-4 rounded">
                  <h4 className="font-semibold text-primary-400 mb-2">Exemple concret :</h4>
                  <p className="text-sm mb-2">"Je développe une app React et je galère sur l'architecture de mon state management. Voici mon code..."</p>
                  <p className="text-sm italic text-white/70">→ Plusieurs développeurs partagent leurs approches et solutions</p>
                </div>
              </div>

              <div className="card card-hover">
                <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Type 2 : "J'offre un projet d'entraînement"</h3>
                <p className="mb-3"><strong>Vous :</strong> Quelqu'un avec une idée hors de votre domaine de compétence</p>
                <p className="mb-3"><strong>Votre situation :</strong> Vous avez une idée créative mais pas les compétences pour la réaliser</p>
                <p className="mb-6"><strong>Ce que vous offrez :</strong> Un projet portfolio à un junior qui veut s'entraîner dans ce domaine</p>
                
                <div className="bg-accent-500/10 border-l-4 border-accent-500 p-4 rounded">
                  <h4 className="font-semibold text-accent-400 mb-2">Exemple concret :</h4>
                  <p className="text-sm mb-2">"Je voudrais un logo pour mon projet perso mais je ne sais pas dessiner. Voici le brief..."</p>
                  <p className="text-sm italic text-white/70">→ Un apprenti designer s'empare du projet pour son portfolio</p>
                </div>
              </div>
            </div>
          </div>

          {/* Step by Step Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Le processus étape par étape</h2>
            
            <div className="space-y-8">
              {[
                {
                  number: 1,
                  title: "Publication de votre demande",
                  items: [
                    "Décrivez clairement votre besoin ou votre blocage",
                    "Ajoutez le contexte : niveau, objectif, contraintes",
                    "Précisez si c'est du Type 1 (aide) ou Type 2 (projet à offrir)",
                    "Joignez des fichiers, captures, liens si nécessaire"
                  ]
                },
                {
                  number: 2,
                  title: "Réponses de la communauté",
                  items: [
                    "D'autres autodidactes analysent votre demande",
                    "Ils proposent des solutions, conseils ou se portent volontaires",
                    "Plusieurs approches différentes enrichissent les réponses",
                    "Chacun partage son expérience sans prétention d'expertise"
                  ]
                },
                {
                  number: 3,
                  title: "Collaboration et échanges",
                  items: [
                    "Échangez directement avec les contributeurs",
                    "Affinez les propositions ensemble",
                    "Posez des questions de suivi",
                    "Partagez vos avancées et retours"
                  ]
                },
                {
                  number: 4,
                  title: "Résultat et remerciements",
                  items: [
                    "Implémentez les solutions ou sélectionnez un contributeur",
                    "Partagez le résultat final avec la communauté",
                    "Remerciez les contributeurs publiquement",
                    "Aidez d'autres membres à votre tour"
                  ]
                }
              ].map((step) => (
                <div key={step.number} className="flex gap-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                    <ul className="space-y-2">
                      {step.items.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-white/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Guidelines */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-12">Règles de la communauté</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-green-400 mb-4">À faire</h3>
                <ul className="space-y-2">
                  {[
                    "Être bienveillant et constructif",
                    "Assumer qu'on apprend tous",
                    "Partager ses échecs autant que ses réussites",
                    "Proposer des projets non-lucratifs uniquement",
                    "Remercier les contributeurs",
                    "Aider les autres quand possible"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-red-400 mb-4">À éviter</h3>
                <ul className="space-y-2">
                  {[
                    "Juger le niveau des autres",
                    "Demander du travail commercial/payant",
                    "Copier-coller sans comprendre",
                    "Abandonner sans nouvelles",
                    "Se présenter comme expert",
                    "Critiquer sans proposer d'alternative"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
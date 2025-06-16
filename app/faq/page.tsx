import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'FAQ - MakeMeLearn',
  description: 'Questions fréquentes sur MakeMeLearn. Trouvez toutes les réponses sur notre communauté d\'entraide créative.',
}

const faqs = [
  {
    question: "Qui peut rejoindre MakeMeLearn ?",
    answer: "Tout autodidacte créatif, quel que soit son niveau. Débutants, intermédiaires, avancés... L'important est l'envie d'apprendre et de partager dans un esprit bienveillant."
  },
  {
    question: "Quels domaines sont couverts ?",
    answer: "Design graphique, développement web/mobile, illustration, modélisation 3D, animation, photographie, UX/UI, marketing créatif, montage vidéo, musique... Tous les domaines créatifs sont les bienvenus."
  },
  {
    question: "Est-ce vraiment gratuit ?",
    answer: "Oui, 100% gratuit. MakeMeLearn est une communauté d'entraide, pas un service commercial. Aucune facturation, aucun abonnement premium."
  },
  {
    question: "Puis-je proposer des projets payants ?",
    answer: "Non. MakeMeLearn se limite aux projets non-lucratifs : projets personnels, associatifs, étudiants, ou d'entraînement. Cela garde l'esprit d'apprentissage sans pression commerciale."
  },
  {
    question: "Comment être sûr de la qualité des réponses ?",
    answer: "Nous assumons tous qu'on apprend encore. Les contributeurs partagent leur expérience et leurs idées, pas des vérités absolues. C'est l'échange et la diversité des approches qui enrichissent."
  },
  {
    question: "Que faire si personne ne répond à ma demande ?",
    answer: "Reformulez votre demande avec plus de contexte, postez dans la bonne catégorie, ou proposez votre aide à d'autres d'abord pour vous faire connaître de la communauté."
  },
  {
    question: "Dois-je être expert pour aider les autres ?",
    answer: "Absolument pas ! Même un regard de débutant peut débloquer une situation. L'important est d'être constructif et bienveillant, pas d'être parfait."
  },
  {
    question: "Comment protéger mes idées/projets ?",
    answer: "Ne partagez que ce que vous êtes à l'aise de rendre public. Pour les projets sensibles, décrivez le problème technique sans révéler l'ensemble du concept."
  },
  {
    question: "Puis-je utiliser les créations pour mon portfolio ?",
    answer: "Oui ! C'est même l'un des buts. Les projets d'entraînement proposés sont destinés à enrichir les portfolios des contributeurs."
  },
  {
    question: "Y a-t-il des modérateurs ?",
    answer: "Oui, une équipe de modérateurs autodidactes veille au respect de l'esprit bienveillant et aux règles de la communauté."
  },
  {
    question: "Quand sera lancée la plateforme ?",
    answer: "Nous sommes en développement actif. Les inscriptions anticipées permettront un accès prioritaire dès les premiers tests bêta."
  },
  {
    question: "Comment puis-je contribuer au projet ?",
    answer: "En rejoignant la communauté dès le lancement, en partageant l'idée, ou en nous contactant si vous souhaitez participer au développement."
  }
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background text-white">
      {/* Page Hero */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Questions Fréquentes</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Tout ce que vous devez savoir sur MakeMeLearn
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="card card-hover">
                  <h3 className="text-xl font-bold text-primary-400 mb-4">
                    {faq.question}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center mt-16 p-12 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-2xl border border-primary-500/20">
              <h2 className="text-2xl font-bold mb-4">Une autre question ?</h2>
              <p className="text-white/80 mb-6">
                N'hésitez pas à nous contacter, nous serons ravis de vous répondre !
              </p>
              <Link href="/contact" className="btn btn-primary">
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
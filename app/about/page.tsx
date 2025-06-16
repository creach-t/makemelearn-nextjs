import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'À propos - MakeMeLearn',
  description: 'Découvrez l\'histoire de MakeMeLearn, notre mission et nos valeurs. Une communauté d\'autodidactes qui grandissent ensemble.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-white">
      {/* Page Hero */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              À propos de <span className="gradient-text">MakeMeLearn</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              L'histoire d'une communauté née de la passion d'apprendre ensemble
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 prose">
              <h2>Notre Histoire</h2>
              <p>
                MakeMeLearn est né d'un constat simple : les autodidactes créatifs manquent souvent de 
                retours constructifs sur leurs projets. Coincés entre les forums généralistes et les 
                services professionnels coûteux, ils peinent à obtenir l'aide dont ils ont besoin pour progresser.
              </p>

              <p>
                En tant qu'autodidactes nous-mêmes, nous avons vécu ces blocages. Ces moments où un regard 
                extérieur aurait suffi à débloquer une situation, où un conseil bienveillant aurait évité 
                des heures de recherche infructueuse.
              </p>

              <h2>Notre Mission</h2>
              <p>
                Créer un espace où l'apprentissage se fait naturellement, sans pression commerciale ni 
                jugement. Un lieu où partager ses échecs autant que ses réussites, où chaque question 
                est légitime et chaque contribution valorisée.
              </p>

              <div className="card bg-primary-500/10 border-primary-500/20 p-6 my-8">
                <h3 className="text-primary-400 mb-4">Nos Valeurs</h3>
                <ul className="space-y-2">
                  <li><strong>Bienveillance</strong> - Aucun jugement, que de l'entraide constructive</li>
                  <li><strong>Transparence</strong> - On assume tous qu'on apprend encore</li>
                  <li><strong>Gratuité</strong> - L'apprentissage ne doit pas être un privilège</li>
                  <li><strong>Diversité</strong> - Tous les domaines créatifs sont les bienvenus</li>
                </ul>
              </div>

              <h2>L'Équipe</h2>
              <p>
                MakeMeLearn est développé par une petite équipe d'autodidactes passionnés, convaincus 
                que l'apprentissage collaboratif peut changer la donne pour des milliers de créatifs.
              </p>

              <h2>Rejoignez l'Aventure</h2>
              <p>
                Nous sommes encore en construction, mais notre vision est claire : créer la plus grande 
                communauté d'entraide créative francophone. Une plateforme où chaque autodidacte peut 
                trouver sa place et contribuer à sa façon.
              </p>
            </div>

            <div className="space-y-6">
              <div className="card">
                <h3 className="text-xl font-bold mb-4">En Chiffres</h3>
                <div className="space-y-4">
                  <div>
                    <span className="block text-2xl font-bold text-primary-400">2025</span>
                    <span className="text-white/70">Année de lancement</span>
                  </div>
                  <div>
                    <span className="block text-2xl font-bold text-primary-400">0€</span>
                    <span className="text-white/70">Coût pour les utilisateurs</span>
                  </div>
                  <div>
                    <span className="block text-2xl font-bold text-primary-400">100%</span>
                    <span className="text-white/70">Projets non-lucratifs</span>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold mb-4">Prêt à nous rejoindre ?</h3>
                <p className="mb-4 text-white/80">
                  Inscrivez-vous dès maintenant pour être parmi les premiers membres de la communauté.
                </p>
                <Link href="/#signup" className="btn btn-primary w-full text-center">
                  Rejoindre
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
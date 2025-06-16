import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Conditions d\'utilisation - MakeMeLearn',
  description: 'Conditions d\'utilisation de MakeMeLearn. Règles et conditions pour notre communauté d\'entraide créative.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-white">
      {/* Page Hero */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Conditions d'utilisation</span>
            </h1>
            <p className="text-white/80">
              Dernière mise à jour : 14 juin 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto prose">
            <h2>1. Acceptation des conditions</h2>
            <p>
              En utilisant MakeMeLearn, vous acceptez ces conditions d'utilisation. 
              Si vous n'acceptez pas ces termes, veuillez ne pas utiliser notre service.
            </p>

            <h2>2. Description du service</h2>
            <p>
              MakeMeLearn est une plateforme communautaire gratuite permettant aux 
              autodidactes créatifs de s'entraider sur des projets non-lucratifs.
            </p>

            <h2>3. Règles de la communauté</h2>
            <p><strong>Projets autorisés :</strong></p>
            <ul>
              <li>Projets personnels et d'apprentissage</li>
              <li>Projets associatifs et caritatifs</li>
              <li>Projets étudiants et académiques</li>
              <li>Projets open-source</li>
            </ul>

            <p><strong>Projets interdits :</strong></p>
            <ul>
              <li>Projets commerciaux ou à but lucratif</li>
              <li>Demandes de travail rémunéré</li>
              <li>Concours et compétitions avec prix</li>
              <li>Projets violant les droits d'auteur</li>
            </ul>

            <h2>4. Comportement attendu</h2>
            <ul>
              <li>Respecter les autres membres</li>
              <li>Être constructif et bienveillant</li>
              <li>Partager dans un esprit d'apprentissage</li>
              <li>Ne pas juger le niveau des autres</li>
              <li>Respecter la propriété intellectuelle</li>
            </ul>

            <h2>5. Propriété intellectuelle</h2>
            <p>
              Vous conservez tous les droits sur vos créations. En partageant du contenu, 
              vous accordez aux autres membres le droit de l'utiliser dans le cadre de 
              l'entraide communautaire.
            </p>

            <h2>6. Responsabilités</h2>
            <p>
              MakeMeLearn agit comme intermédiaire. Nous ne sommes pas responsables de 
              la qualité des échanges ou des projets réalisés entre membres.
            </p>

            <h2>7. Modération</h2>
            <p>
              Nous nous réservons le droit de modérer le contenu et de suspendre des 
              comptes qui ne respectent pas ces conditions.
            </p>

            <h2>8. Données personnelles</h2>
            <p>
              Consultez notre <a href="/legal/privacy">politique de confidentialité</a> 
              pour comprendre comment nous traitons vos données.
            </p>

            <h2>9. Modifications</h2>
            <p>
              Ces conditions peuvent être modifiées. Les changements significatifs seront 
              communiqués aux utilisateurs.
            </p>

            <h2>10. Contact</h2>
            <p>
              Pour toute question : <a href="mailto:hello@makemelearn.fr">hello@makemelearn.fr</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
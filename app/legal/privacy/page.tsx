import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de confidentialité - MakeMeLearn',
  description: 'Politique de confidentialité RGPD de MakeMeLearn. Comment nous protégeons et utilisons vos données personnelles.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-white">
      {/* Page Hero */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Politique de confidentialité</span>
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
            <h2>1. Informations collectées</h2>
            <p><strong>Données d'inscription :</strong></p>
            <ul>
              <li>Adresse email</li>
              <li>Nom d'utilisateur choisi</li>
              <li>Informations de profil volontaires</li>
            </ul>

            <p><strong>Données d'utilisation :</strong></p>
            <ul>
              <li>Projets publiés et réponses</li>
              <li>Messages et interactions</li>
              <li>Statistiques d'utilisation anonymisées</li>
            </ul>

            <h2>2. Utilisation des données</h2>
            <ul>
              <li>Fonctionnement de la plateforme</li>
              <li>Mise en relation des membres</li>
              <li>Amélioration du service</li>
              <li>Communication liée au service</li>
              <li>Modération du contenu</li>
            </ul>

            <h2>3. Partage des données</h2>
            <p>Nous ne vendons jamais vos données personnelles. Partage limité à :</p>
            <ul>
              <li>Autres membres (selon vos paramètres de confidentialité)</li>
              <li>Prestataires techniques nécessaires au fonctionnement</li>
              <li>Autorités légales si requis par la loi</li>
            </ul>

            <h2>4. Cookies et tracking</h2>
            <p>Utilisation minimale :</p>
            <ul>
              <li>Cookies de session (authentification)</li>
              <li>Cookies de préférences utilisateur</li>
              <li>Analytics anonymisées (optionnelles)</li>
            </ul>

            <h2>5. Vos droits (RGPD)</h2>
            <ul>
              <li><strong>Accès :</strong> Consulter vos données</li>
              <li><strong>Rectification :</strong> Corriger vos informations</li>
              <li><strong>Suppression :</strong> Effacer votre compte</li>
              <li><strong>Portabilité :</strong> Exporter vos données</li>
              <li><strong>Opposition :</strong> Refuser certains traitements</li>
            </ul>

            <h2>6. Conservation des données</h2>
            <ul>
              <li>Comptes actifs : Durée d'utilisation du service</li>
              <li>Comptes supprimés : 30 jours puis anonymisation</li>
              <li>Contenu public : Peut rester visible après suppression du compte</li>
            </ul>

            <h2>7. Sécurité</h2>
            <p>Mesures de protection :</p>
            <ul>
              <li>Chiffrement des données sensibles</li>
              <li>Accès limité aux données personnelles</li>
              <li>Surveillance des accès</li>
              <li>Sauvegardes sécurisées</li>
            </ul>

            <h2>8. Données des mineurs</h2>
            <p>
              Service destiné aux 16 ans et plus. Les mineurs de 13-16 ans doivent 
              avoir l'autorisation parentale.
            </p>

            <h2>9. Transferts internationaux</h2>
            <p>
              Données hébergées dans l'Union Européenne. Tout transfert hors UE 
              respectera les garanties RGPD.
            </p>

            <h2>10. Contact DPO</h2>
            <p>Pour exercer vos droits ou poser des questions :</p>
            <p>Email : <a href="mailto:privacy@makemelearn.fr">privacy@makemelearn.fr</a></p>
            <p>Réponse sous 30 jours maximum.</p>

            <div className="card bg-primary-500/10 border-primary-500/20 p-6 my-8">
              <h3 className="text-primary-400 mb-4">En résumé</h3>
              <p>
                MakeMeLearn collecte le minimum nécessaire, ne vend jamais vos données, 
                et vous donne le contrôle total sur vos informations personnelles.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
import type { Metadata } from 'next'
import type { FaqProps } from '@repo/ui'

// The sponsor link that users will use
export const SPONSOR_LINK: string =
  'https://thebradery.com/a/refer-a-friend/redeem/victor69/8166'

// Amount in euros users will earn for their first delivery
export const AMOUNT_TO_EARN: number = 15

// The type of amount users will earn
export const AMOUNT_UNIT: string = '€'

// The minimum order to avoid delivery charges
export const AMOUNT_FOR_FREE_DELIVERY: number = 200

// The minimum of order required from the user
export const MINIMUM_AMOUNT_TO_EARN_TO_USE: number = 50

// For the n first orders, user can benefit from the discount
export const FOR_NUMBER_OF_COMMANDS: number = 1

// The name of the company
export const COMPANY_NAME: string = 'SYMMETRIC'

// The name of the product
export const PRODUCT_NAME: string = 'The Bradery'

// Content of the H1 of the website
export const H1_CONTENT: React.ReactNode = (
  <>
    {AMOUNT_TO_EARN}
    {AMOUNT_UNIT} sur{' '}
    {FOR_NUMBER_OF_COMMANDS > 1
      ? `vos ${FOR_NUMBER_OF_COMMANDS} premières commandes`
      : 'votre 1ère commande'}
  </>
)

// Content of the button of the website
export const BUTTON_CONTENT: React.ReactNode = `Je profite de mes ${AMOUNT_TO_EARN}${AMOUNT_UNIT} offerts`

// Content of the notice of the website
export const NOTICE_CONTENT: React.ReactNode = (
  <>
    Une page vous demandera d&apos;indiquer votre prénom et email pour obtenir
    un code de réduction de{' '}
    <b>
      {AMOUNT_TO_EARN}
      {AMOUNT_UNIT} de promotion
    </b>
    .
  </>
)

export const CURRENT_YEAR: number = new Date().getFullYear()
export const CURRENT_MONTH: number = new Date().getMonth()

export const CURRENT_FORMATTED_DATE = new Intl.DateTimeFormat('fr-FR', {
  month: 'long',
  year: 'numeric'
}).format(new Date())

// Short description of the product
export const PRODUCT_SHORT_DESCRIPTIION: string =
  'The Bradery propose des ventes privées de marques tendance à prix réduits, pour une durée limitée.'

// Domain of the new sponsor website
export const METADATA_BASE: Metadata['metadataBase'] = new URL(
  'https://www.thebradery-code-promo.fr'
)

// The logo source URL (don't forget to update the file in public folder)
export const LOGO_URL: string = '/logo-the-bradery.png'

// The logo uses in sponsor me website (don't forget to update the file in public folder of the project)
export const SPONSOR_ME_LOGO_NAME: string = 'frichti-market-logo.png'

// The CSS url of the main background (don't forget to update the file in public folder)
export const MAIN_BACKGROUND_URL: string = "url('/main-background.webp')"

// The homepage meta title
export const TITLE: string = `Code promo de ${AMOUNT_TO_EARN}${AMOUNT_UNIT} offert sur ${PRODUCT_NAME} en ${CURRENT_FORMATTED_DATE}`

// The homepage meta description
export const DESCRIPTION: string = `Offre de ${AMOUNT_TO_EARN}${AMOUNT_UNIT} de promotion sur ${FOR_NUMBER_OF_COMMANDS > 1 ? `vos ${FOR_NUMBER_OF_COMMANDS} premières commandes` : 'votre 1ère commande'} sur le site ${PRODUCT_NAME} · Livraison gratuite dès ${AMOUNT_FOR_FREE_DELIVERY}€ d'achat · Parrainage: ${AMOUNT_TO_EARN}${AMOUNT_UNIT} offerts.`

// Google Analytics ID, can be empty
export const GA_ID: string = 'G-0BEWWJ7PFM'

// Theme color
export const THEME_COLOR: string = '#fcf5ee'

// Link to Android product application
export const ANDROID_APP_LINK: string =
  'https://play.google.com/store/apps/details?id=co.tapcart.app.id_lQ39VhjG8V&pcampaignid=web_share'

// Link to Apple product application
export const APPLE_APP_LINK: string =
  'https://apps.apple.com/fr/app/the-bradery/id1490342194'

// Link to Desktop product
export const DESKTOP_LINK: string = 'https://thebradery.com'

// Questions and answers for SEO
export const FAQ: FaqProps['faq'] = [
  {
    question:
      'Comment utiliser le lien de parrainage et obtenir la promotion ?',
    answer: (
      <>
        Cliquez sur le lien de parrainage suivant —{' '}
        <a
          title={`Aller sur ${PRODUCT_NAME}`}
          className="text-bluelight underline"
          href={SPONSOR_LINK}
        >
          {SPONSOR_LINK}
        </a>{' '}
        — et indiquez votre prénom et email. Un code de réduction de{' '}
        <b>
          {AMOUNT_TO_EARN}
          {AMOUNT_UNIT}
        </b>{' '}
        vous sera alors attribué pour{' '}
        {FOR_NUMBER_OF_COMMANDS > 1
          ? `vos ${FOR_NUMBER_OF_COMMANDS} premières commandes`
          : 'votre première commande'}
        .
      </>
    )
  },
  {
    question: `Quel est le montant du code promo sur ${PRODUCT_NAME}`,
    answer: (
      <>
        Le montant du code promotionnel disponible gratuitement est de{' '}
        <b>
          {AMOUNT_TO_EARN}
          {AMOUNT_UNIT}
        </b>
        .
      </>
    )
  },
  {
    question: 'Combien dois-je dépenser pour utiliser la promotion ?',
    answer: `Selon la remise, le montant minimum de commande est de ${MINIMUM_AMOUNT_TO_EARN_TO_USE}€.`
  },
  {
    question: `Où ${PRODUCT_NAME} livre ?`,
    answer: `${PRODUCT_NAME} livre partout en France métropolitaine, en Corse, et dans plusieurs pays d'Europe. Les détails et options de livraison sont disponibles lors de la validation de votre commande.`
  },
  {
    question: `Est-il possible de payer en plusieurs fois sur ${PRODUCT_NAME} ?`,
    answer: (
      <>
        Oui, {PRODUCT_NAME} propose le paiement en plusieurs fois grâce à des
        solutions partenaires comme <b>Klarna</b> ou <b>Alma</b>. Cette option
        est disponible pour les commandes éligibles et s’affiche au moment du
        paiement.
      </>
    )
  },
  {
    question: `Quels sont les frais de livraison sur ${PRODUCT_NAME} ?`,
    answer: (
      <>
        Les frais de livraison sur The Bradery varient en fonction du mode de
        livraison choisi et de la destination :
        <ul className="list-disc pl-6 mt-2">
          <li>
            France Métropolitaine : à partir de 4,90€ en point relais et 6,90€ à
            domicile.
          </li>
          <li>
            Livraison gratuite : disponible pour certaines commandes dépassant
            un montant minimum (souvent 100€, mais cela peut varier).
          </li>
          <li>
            Autres pays européens : les frais dépendent de la destination et
            sont calculés au moment du paiement.
          </li>
        </ul>
      </>
    )
  },
  {
    question: `En savoir plus sur ${PRODUCT_NAME}`,
    answer: (
      <>
        Consultez le{' '}
        <a
          href={DESKTOP_LINK}
          className="text-bluelight underline"
          title={`Aller sur ${PRODUCT_NAME}`}
        >
          site Web de {PRODUCT_NAME}
        </a>{' '}
        ou téléchargez l&apos;application sur le{' '}
        <a
          className="text-bluelight underline"
          title="Télécharger l'application IOS"
          href={APPLE_APP_LINK}
        >
          Apple Store
        </a>{' '}
        ou{' '}
        <a
          className="text-bluelight underline"
          title="Télécharger l'application Android"
          href={ANDROID_APP_LINK}
        >
          Google Play Store
        </a>
        .
      </>
    )
  }
]

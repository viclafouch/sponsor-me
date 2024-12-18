import type { Metadata } from 'next'
import type { FaqProps } from '@repo/ui'

// The sponsor link that users will use
export const SPONSOR_LINK: string = 'https://roo.it/victordlf8136'

// Amount in euros users will earn for their first delivery
export const AMOUNT_TO_EARN: number = 10

// The type of amount users will earn
export const AMOUNT_UNIT: string = '€'

// The minimum of order required from the user
export const MINIMUM_AMOUNT_IN_EUROS_TO_USE: number = 0

// For the n first orders, user can benefit from the discount
export const FOR_NUMBER_OF_COMMANDS: number = 4

// The name of the company
export const COMPANY_NAME: string = 'Deliveroo'

// The name of the product
export const PRODUCT_NAME: string = 'Deliveroo'

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
    Un bandeau noir apparaîtra sur le site de {PRODUCT_NAME} vous indiquant que{' '}
    <br /> le bon de{' '}
    <b>
      {AMOUNT_TO_EARN}
      {AMOUNT_UNIT} a bien été pris en compte
    </b>
    .
  </>
)

// Short description of the product
export const PRODUCT_SHORT_DESCRIPTIION: string =
  "Explorez une variété de cuisines et profitez d'une livraison rapide avec Deliveroo."

export const CURRENT_YEAR: number = new Date().getFullYear()

// Domain of the new sponsor website
export const METADATA_BASE: Metadata['metadataBase'] = new URL(
  'https://www.deliveroo-promo-code.com'
)

// The logo source URL (don't forget to update the file in public folder)
export const LOGO_URL: string = '/logo-deliveroo.webp'

// The logo uses in sponsor me website (don't forget to update the file in public folder of the project)
export const SPONSOR_ME_LOGO_NAME: string = 'deliveroo-logo.jpeg'

// The CSS url of the main background (don't forget to update the file in public folder)
export const MAIN_BACKGROUND_URL: string = "url('/main-background.webp')"

// The homepage meta title
export const TITLE: string = `Code promo de ${AMOUNT_TO_EARN}${AMOUNT_UNIT} offert sur ${PRODUCT_NAME} en ${CURRENT_YEAR}`

// The homepage meta description
export const DESCRIPTION: string = `Offre de ${AMOUNT_TO_EARN}${AMOUNT_UNIT} de promotion sur ${FOR_NUMBER_OF_COMMANDS > 1 ? `vos ${FOR_NUMBER_OF_COMMANDS} premières commandes` : 'votre 1ère commande'} sur le site ${PRODUCT_NAME} · Livraison gratuite avec Deliveroo Plus · Parrainage: ${AMOUNT_TO_EARN}${AMOUNT_UNIT} offerts.`

// Google Analytics ID
export const GA_ID: string = 'G-ZQPYC60MX9'

// Theme color
export const THEME_COLOR: string = '#00ccbc'

// Link to Android product application
export const ANDROID_APP_LINK: string =
  'https://deliveroo.fr/app/?platform=ios&home_page=true&home_page_variant=homepage_variant_a&mobile_banner=false'

// Link to Apple product application
export const APPLE_APP_LINK: string =
  'https://deliveroo.fr/app/?platform=ios&home_page=true&home_page_variant=homepage_variant_a&mobile_banner=false'

// Link to Desktop product
export const DESKTOP_LINK: string = 'https://deliveroo.com'

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
        — et créez votre compte. Les <b>{AMOUNT_TO_EARN}€</b> seront appliqués à{' '}
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
    answer: MINIMUM_AMOUNT_IN_EUROS_TO_USE
      ? `Selon la remise, le montant minimum de commande est de ${MINIMUM_AMOUNT_IN_EUROS_TO_USE}€.`
      : 'Aucun minimum de commande est requis pour utiliser la remise.'
  },
  {
    question: `Où ${PRODUCT_NAME} livre ?`,
    answer: `Aujourd'hui, ${PRODUCT_NAME} travaille en partenariat avec 158 000 restaurateurs, répartis dans dix pays, à savoir : Belgique, France, Hong Kong, Italie, Irlande, Qatar, Singapour, Émirats arabes unis, Koweït et Royaume-Uni.`
  },
  {
    question: `Quelles sont les heures d'ouverture de ${PRODUCT_NAME} ?`,
    answer: `Les livreurs partenaires sont disponibles du matin jusqu'à tard dans la nuit, et les restaurants offrent des horaires d'ouverture variés.`
  },
  {
    question: `Quels sont les frais de livraison sur ${PRODUCT_NAME} ?`,
    answer:
      "Le montant de commande minimum varie en fonction du restaurant sélectionné. En cas d'exigence de montant minimum, une notification vous sera présentée avant la validation de votre commande."
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

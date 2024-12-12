/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import type { FaqProps } from '@repo/ui'

// The sponsor link that users will use
export const SPONSOR_LINK: string = 'https://classpass.com/refer/PMEM9DEC30'

// Amount in euros users will earn for their first delivery
export const AMOUNT_TO_EARN: number = 20

// The type of amount users will earn
export const AMOUNT_UNIT: string = ' crédits'

// The minimum order to avoid delivery charges
export const AMOUNT_FOR_FREE_DELIVERY: number = 50

// The minimum of order required from the user
export const MINIMUM_AMOUNT_TO_EARN_TO_USE: number = 30

// For the n first orders, user can benefit from the discount
export const FOR_NUMBER_OF_COMMANDS: number = 1

// The name of the company
export const COMPANY_NAME: string = 'ClassPass'

// The name of the product
export const PRODUCT_NAME: string = 'ClassPass'

// Content of the H1 of the website
export const H1_CONTENT: React.ReactNode = (
  <>
    {AMOUNT_TO_EARN}
    {AMOUNT_UNIT} à gagner pour 1€
  </>
)

// Content of the button of the website
export const BUTTON_CONTENT: React.ReactNode = `Je profite de mes ${AMOUNT_TO_EARN}${AMOUNT_UNIT} offerts`

// Content of the notice of the website
export const NOTICE_CONTENT: React.ReactNode = (
  <>
    L’offre est réservée aux nouveaux membres. L’essai est limité à certaines
    salles de sport et de fitness.
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
  "Découvre une appli tout-en-un dédiée au fitness, aux salles de sport et aux séances de bien-être et de beauté. Profite d'options variées, que ce soit en salle, en extérieur ou en ligne, accessibles dans plus de 2 500 villes dans le monde."

// Domain of the new sponsor website
export const METADATA_BASE: Metadata['metadataBase'] = new URL(
  'https://www.classpass-code-promo.fr'
)

// The logo source URL (don't forget to update the file in public folder)
export const LOGO_URL: string = '/logo-classpass.svg'

// The logo uses in sponsor me website (don't forget to update the file in public folder of the project)
export const SPONSOR_ME_LOGO_NAME: string = '/logo-classpass.svg'

// The CSS url of the main background (don't forget to update the file in public folder)
export const MAIN_BACKGROUND_URL: string = "url('/main-background.jpg')"

// The homepage meta title
export const TITLE: string = `${AMOUNT_TO_EARN}${AMOUNT_UNIT} offerts sur ${PRODUCT_NAME} en ${CURRENT_FORMATTED_DATE}`

// The homepage meta description
export const DESCRIPTION: string = `Parrainage de ${AMOUNT_TO_EARN}${AMOUNT_UNIT} dès votre inscription sur le site ${PRODUCT_NAME} · Offre réservée aux nouveaux membres · Parrainage: ${AMOUNT_TO_EARN}${AMOUNT_UNIT} offerts pour réserver des cours, un accès à la salle et plus encore.
`

// Google Analytics ID, can be empty
export const GA_ID: string = 'G-VC9SC2WKYC'

// Theme color
export const THEME_COLOR: string = '#0055ff'

// Link to Android product application
export const ANDROID_APP_LINK: string =
  'https://play.google.com/store/apps/details?id=com.classpass.classpass'

// Link to Apple product application
export const APPLE_APP_LINK: string =
  'https://itunes.apple.com/us/app/classpass/id912947244?mt=8&uo=4'

// Link to Desktop product
export const DESKTOP_LINK: string = 'https://classpass.fr'

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
        — et indiquez votre email d&apos;inscription. Les{' '}
        <b>
          {AMOUNT_TO_EARN}
          {AMOUNT_UNIT}
        </b>{' '}
        seront appliqués en plus de vos crédits de base.
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
        </b>{' '}
        à utiliser en 14 jours.
      </>
    )
  },
  {
    question: 'Combien dois-je dépenser pour utiliser la promotion ?',
    answer: (
      <>
        L'offre coute 1€ seulement. Les <s>47</s> <b>67 crédits</b> sont à
        utiliser pendant 14 jours.
      </>
    )
  },
  {
    question: 'Quels types de sport sont proposés ?',
    answer: (
      <>
        Cycling, musculation, yoga… Accède à tous les cours de ton choix, où que
        tu sois, avec un compte unique et flexible.
      </>
    )
  },
  {
    question: `Est-ce une offre avec engagement ?`,
    answer: `Non, l’abonnement se renouvelle chaque mois, et tu as la possibilité de modifier ton forfait en toute simplicité.`
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

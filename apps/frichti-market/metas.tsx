import type { Metadata, Viewport } from 'next'
import type { FaqProps } from '@repo/ui'

// The sponsor link that users will use
export const SPONSOR_LINK: string = 'https://www.frichtimarket.com/r/NDQyMDE5'

// Amount in euros users will earn for their first delivery
export const AMOUNT_IN_EUROS: number = 10

// The minimum order to avoid delivery charges
export const AMOUNT_FOR_FREE_DELIVERY: number = 50

// The minimum of order required from the user
export const MINIMUM_AMOUNT_IN_EUROS_TO_USE: number = 10

// For the n first orders, user can benefit from the discount
export const FOR_NUMBER_OF_COMMANDS: number = 2

// The name of the company
export const COMPANY_NAME: string = 'New Frichti SAS'

// The name of the product
export const PRODUCT_NAME: string = 'Frichti Market'

export const CURRENT_YEAR: number = new Date().getFullYear()

// Domain of the new sponsor website
export const METADATA_BASE: Metadata['metadataBase'] = new URL(
  'https://www.frichti-market-code-promo.fr'
)

// The CSS url of the main background (don't forget to update the file in public folder)
export const MAIN_BACKGROUND_URL: string = "url('/main-background.webp')"

// The homepage meta title
export const TITLE: string = `Code promo de ${AMOUNT_IN_EUROS}€ offert sur ${PRODUCT_NAME} en ${CURRENT_YEAR}`

// The homepage meta description
export const DESCRIPTION: string = `Offre de ${AMOUNT_IN_EUROS}€ de promotion sur ${FOR_NUMBER_OF_COMMANDS > 1 ? `vos ${FOR_NUMBER_OF_COMMANDS} premières commandes` : 'votre 1ère commande'} sur le site ${PRODUCT_NAME} · Livraison gratuite dès ${AMOUNT_FOR_FREE_DELIVERY}€ d'achat · Parrainage: ${AMOUNT_IN_EUROS}€ offerts.`

// Google Analytics ID, can be empty
export const GA_ID: string = 'G-GJGLYTKB81'

// Theme color
export const THEME_COLOR: Viewport['themeColor'] = '#faf190'

// Link to Android product application
export const ANDROID_APP_LINK: string =
  'https://play.google.com/store/apps/details?id=com.deleev.babat&hl=fr'

// Link to Apple product application
export const APPLE_APP_LINK: string =
  'https://itunes.apple.com/fr/app/id6449497817?mt=8'

// Link to Desktop product
export const DESKTOP_LINK: string = 'https://www.frichtimarket.com'

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
        — et créez votre compte. Les <b>{AMOUNT_IN_EUROS}€</b> seront appliqués
        à{' '}
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
        <b>{AMOUNT_IN_EUROS}€</b>.
      </>
    )
  },
  {
    question: 'Combien dois-je dépenser pour utiliser la promotion ?',
    answer: `Selon la remise, le montant minimum de commande est de ${MINIMUM_AMOUNT_IN_EUROS_TO_USE}€.`
  },
  {
    question: `Où ${PRODUCT_NAME} livre ?`,
    answer: `${PRODUCT_NAME} livre en Île-de-France.`
  },
  {
    question: `Quelles sont les heures d'ouverture de ${PRODUCT_NAME} ?`,
    answer: 'Livraison en 1h30 en moyenne, 7j/7 de 8h à 23h.'
  },
  {
    question: `Quels sont les frais de livraison sur ${PRODUCT_NAME} ?`,
    answer: `Les frais de livraison sont d'environ 1.99€ par commande. Ils deviennent gratuit après ${AMOUNT_FOR_FREE_DELIVERY}€ d'achat.`
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
          Apple App Store
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

import type { Metadata, Viewport } from 'next'
import type { FaqProps } from '@repo/ui'

export const SPONSOR_LINK: string = 'https://www.frichtimarket.com/r/NDQyMDE5'

export const AMOUNT_IN_EUROS: number = 10

export const METADATA_BASE: Metadata['metadataBase'] = new URL(
  'https://www.frichti-market-code-promo.fr'
)

export const MAIN_BACKGROUND_URL: string = "url('/frichti-background.webp')"

export const TITLE: string = `Code promo de ${AMOUNT_IN_EUROS}€ offert sur Frichti Market en 2024`

export const DESCRIPTION: string = `Offre de ${AMOUNT_IN_EUROS}€ de promotion sur votre 1ère commande sur le site Frichti Market · Livraison gratuite dès 50€ d'achat · Parrainage: ${AMOUNT_IN_EUROS}€ offerts.`

export const GA_ID: string = 'G-GJGLYTKB81'

export const THEME_COLOR: Viewport['themeColor'] = '#faf190'

export const COMPANY_NAME: string = 'New Frichti SAS'

export const PRODUCT_NAME: string = 'Frichti Market'

export const FAQ: FaqProps['faq'] = [
  {
    question:
      'Comment utiliser le lien de parrainage et obtenir la promotion ?',
    answer: (
      <>
        Cliquez sur le lien de parrainage suivant —{' '}
        <a
          title="Aller sur Frichti Market"
          className="text-bluelight underline"
          href={SPONSOR_LINK}
        >
          {SPONSOR_LINK}
        </a>{' '}
        — et créez votre compte. Les <b>{AMOUNT_IN_EUROS}€</b> seront appliqués
        à votre première commande.
      </>
    )
  },
  {
    question: 'Quel est le montant du code promo sur Frichti Market',
    answer: (
      <>
        Le montant du code promotionnel disponible gratuitement est de{' '}
        <b>{AMOUNT_IN_EUROS}€</b>.
      </>
    )
  },
  {
    question: 'Combien dois-je dépenser pour utiliser la promotion ?',
    answer: 'Selon la remise, le montant minimum de commande est de 30€.'
  },
  {
    question: 'Où Frichti Market livre ?',
    answer: 'Frichti Market livre en Île-de-France.'
  },
  {
    question: "Quelles sont les heures d'ouverture de Frichti Market ?",
    answer: 'Livraison en 1h30 en moyenne, 7j/7 de 8h à 23h.'
  },
  {
    question: 'Quels sont les frais de livraison sur Frichti Market ?',
    answer:
      "Les frais de livraison sont d'environ 1.99€ par commande. Ils deviennent gratuit après 50€ d'achat."
  },
  {
    question: 'En savoir plus sur Frichti Market',
    answer: (
      <>
        Consultez le{' '}
        <a
          href="https://www.frichtimarket.com"
          className="text-bluelight underline"
          title="Aller sur Frichti Market"
        >
          site Web de Frichti Market
        </a>{' '}
        ou téléchargez l&apos;application sur le{' '}
        <a
          className="text-bluelight underline"
          title="Télécharger l'application IOS"
          href="https://itunes.apple.com/fr/app/id6449497817?mt=8"
        >
          Apple App Store
        </a>{' '}
        ou{' '}
        <a
          className="text-bluelight underline"
          title="Télécharger l'application Android"
          href="https://play.google.com/store/apps/details?id=com.deleev.babat&hl=fr"
        >
          Google Play Store
        </a>
        .
      </>
    )
  }
]

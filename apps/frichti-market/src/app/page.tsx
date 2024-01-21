import React from 'react'
import Image from 'next/image'
import Script from 'next/script'

const LINK = 'https://www.frichtimarket.com/r/NDQyMDE5'
const AMOUNT_IN_EUROS = 10

const SECTIONS = [
  {
    title: 'Comment utiliser le lien de parrainage et obtenir la promotion ?',
    description: (
      <>
        Cliquez sur le lien de parrainage suivant —{' '}
        <a
          title="Aller sur Frichti Market"
          className="text-bluelight underline"
          href={LINK}
        >
          {LINK}
        </a>{' '}
        — et créez votre compte. Les <b>{AMOUNT_IN_EUROS}€</b> seront appliqués
        à votre première commande.
      </>
    )
  },
  {
    title: 'Quel est le montant du code promo sur Frichti Market',
    description: (
      <>
        Le montant du code promotionnel disponible gratuitement est de{' '}
        <b>{AMOUNT_IN_EUROS}€</b>.
      </>
    )
  },
  {
    title: 'Combien dois-je dépenser pour utiliser la promotion ?',
    description: 'Selon la remise, le montant minimum de commande est de 30€.'
  },
  {
    title: 'Où Frichti Market livre ?',
    description: 'Frichti Market livre en Île-de-France.'
  },
  {
    title: "Quelles sont les heures d'ouverture de Frichti Market ?",
    description: 'Livraison en 1h30 en moyenne, 7j/7 de 8h à 23h.'
  },
  {
    title: 'Quels sont les frais de livraison sur Frichti Market ?',
    description:
      "Les frais de livraison sont d'environ 1.99€ par commande. Ils deviennent gratuit après 50€ d'achat."
  },
  {
    title: 'En savoir plus sur Frichti Market',
    description: (
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

const Home = () => {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-GJGLYTKB81" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-GJGLYTKB81');
        `}
      </Script>
      <div className="min-h-screen flex flex-col justify-center items-center bg-yellow flex-1 bg-frichti-background bg-cover bg-no-repeat bg-center">
        <div>
          <div className="px-10 flex flex-col items-center gap-y-2">
            <Image
              src="/logo-frichti.svg"
              width={100}
              height={100}
              alt="Frichti"
            />
            <Image
              src="/logo-frichti-market.png"
              width={600}
              height={46}
              alt="Frichti Market"
            />
          </div>
          <div className="px-10 w-full mt-10">
            <div className="w-full max-w-xl mx-auto relative">
              <span className="absolute w-full h-full bg-black" />
              <div className="flex flex-col items-center gap-4 border-black border-solid border bg-white px-6 py-7 z-10 relative right-2 bottom-2">
                <div className="text-center text-2xl">
                  <h1 className="uppercase font-bold">
                    {AMOUNT_IN_EUROS}€ sur votre 1ère commande
                  </h1>
                  en cliquant sur le bouton ci-dessous
                </div>
                <a
                  className="text-center bg-black text-white p-4 rounded-full block"
                  href={LINK}
                  title="Aller sur Frichti Market"
                  target="_blank"
                  rel="noreferrer"
                >
                  Je profite de mes {AMOUNT_IN_EUROS}€ offerts
                </a>
              </div>
            </div>
          </div>
          <p className="px-10 text-center italic text-black mt-10">
            Un bandeau noir apparaîtra sur le site de Frichti Market vous
            indiquant que <br /> le bon de{' '}
            <b>{AMOUNT_IN_EUROS}€ a bien été pris en compte</b>.
          </p>
        </div>
      </div>
      <div className="py-10 max-w-screen-md m-auto px-10 flex flex-col items-center gap-y-6">
        <header>
          <h2 className="text-4xl font-semibold">
            Frichti Market Parrainage {new Date().getFullYear()}
          </h2>
          <p className="mt-5 mb-5">
            Obtenez{' '}
            <b>{AMOUNT_IN_EUROS}€ de réduction sur votre première commande</b>{' '}
            Frichti Market avec le lien de parrainage suivant :{' '}
            <a
              title="Aller sur Frichti Market"
              className="text-bluelight underline"
              href={LINK}
            >
              {LINK}
            </a>
            . Vous trouverez ci-dessous quelques réponses aux questions les plus
            importantes sur l&apos;utilisation du lien de parrainage :
          </p>
          <hr />
        </header>
        <section
          className="flex flex-col gap-7 pb-5"
          itemProp="mainEntity"
          itemScope
          itemType="https://schema.org/FAQPage"
        >
          {SECTIONS.map((section) => {
            return (
              <div
                key={section.title}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <h3 className="text-2xl text-blue font-medium" itemProp="name">
                  {section.title}
                </h3>
                <div
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <p className="mt-1" itemProp="text">
                    {section.description}
                  </p>
                </div>
              </div>
            )
          })}
        </section>
      </div>
    </>
  )
}

export default Home

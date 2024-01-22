import React from 'react'
import Image from 'next/image'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Faq } from '@repo/ui'
import * as METAS from '../../metas'

const Home = () => {
  return (
    <>
      <GoogleAnalytics gaId={METAS.GA_ID} />
      <div
        style={{ backgroundImage: METAS.MAIN_BACKGROUND_URL }}
        className="min-h-screen flex flex-col justify-center items-center bg-white flex-1 bg-cover bg-no-repeat bg-center"
      >
        <div>
          <div className="px-10 flex flex-col items-center gap-y-2">
            <Image
              src="/logo-deliveroo.webp"
              priority
              width={180}
              height={46}
              style={{ height: 'auto', width: 'auto' }}
              alt={METAS.PRODUCT_NAME}
            />
          </div>
          <div className="px-10 w-full">
            <div className="w-full max-w-2xl mx-auto relative">
              <div className="flex flex-col items-center gap-6 border-white shadow-2xl rounded-3xl border-solid border bg-white/[.8] px-7 md:px-14 py-11">
                <div className="text-center text-2xl">
                  <h1 className="uppercase font-bold">
                    {METAS.AMOUNT_IN_EUROS}€ sur{' '}
                    {METAS.FOR_NUMBER_OF_COMMANDS > 1
                      ? `vos ${METAS.FOR_NUMBER_OF_COMMANDS} premières commandes`
                      : 'votre 1ère commande'}
                  </h1>
                  en cliquant sur le bouton ci-dessous
                </div>
                <a
                  className="shadow-lg text-center bg-main font-bold text-lg text-white p-4 md:rounded-full block"
                  href={METAS.SPONSOR_LINK}
                  title={`Aller sur ${METAS.PRODUCT_NAME}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Je profite de mes {METAS.AMOUNT_IN_EUROS}€ offerts
                </a>
              </div>
            </div>
          </div>
          <p className="text-balance mx-auto max-w-xl px-10 text-center italic text-gray mt-10">
            Votre crédit sera disponible pendant 30 jours. Valable sans minimum
            de commande.
          </p>
        </div>
      </div>
      <div className="py-10 max-w-screen-md m-auto px-10">
        <Faq
          forNumberOfOrders={METAS.FOR_NUMBER_OF_COMMANDS}
          faq={METAS.FAQ}
          productName={METAS.PRODUCT_NAME}
          sponsorLink={METAS.SPONSOR_LINK}
          amountInEuros={METAS.AMOUNT_IN_EUROS}
        />
      </div>
    </>
  )
}

export default Home

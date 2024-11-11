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
        className="min-h-dvh flex flex-col justify-center items-center bg-white flex-1 bg-cover bg-no-repeat bg-center"
      >
        <div>
          <div className="px-10 flex flex-col items-center gap-y-2">
            <Image
              src={METAS.LOGO_URL}
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
                    {METAS.NOTICE_CONTENT}
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
                  {METAS.BUTTON_CONTENT}
                </a>
              </div>
            </div>
          </div>
          <p className="text-balance mx-auto max-w-xl px-10 text-center italic text-gray mt-10">
            {METAS.NOTICE_CONTENT}
          </p>
        </div>
      </div>
      <div className="py-10 max-w-screen-md m-auto px-10">
        <div className="ui-flex ui-flex-col ui-items-center ui-gap-y-6">
          <header>
            <h2 className="ui-text-4xl ui-font-semibold">
              {METAS.PRODUCT_NAME} Parrainage {new Date().getFullYear()}
            </h2>
            <p className="ui-mt-5 ui-mb-5">
              Obtenez{' '}
              <b>
                {METAS.AMOUNT_TO_EARN}
                {METAS.AMOUNT_UNIT} de réduction sur{' '}
                {METAS.FOR_NUMBER_OF_COMMANDS > 1
                  ? `vos ${METAS.FOR_NUMBER_OF_COMMANDS} premières commande`
                  : 'votre première commande'}
              </b>{' '}
              {METAS.PRODUCT_NAME} avec le lien de parrainage suivant :{' '}
              <a
                title={`Aller sur ${METAS.PRODUCT_NAME}`}
                className="ui-text-bluelight ui-underline"
                href={METAS.SPONSOR_LINK}
              >
                {METAS.SPONSOR_LINK}
              </a>
              . Vous trouverez ci-dessous quelques réponses aux questions les
              plus importantes sur l&apos;utilisation du lien de parrainage :
            </p>
            <hr />
          </header>
          <Faq faq={METAS.FAQ} />
        </div>
      </div>
    </>
  )
}

export default Home

import React from 'react'
import Image from 'next/image'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Faq } from '@repo/ui'
import * as METAS from '../../metas'

const Home = () => {
  return (
    <>
      {METAS.GA_ID ? <GoogleAnalytics gaId={METAS.GA_ID} /> : null}
      <div
        style={{ backgroundImage: METAS.MAIN_BACKGROUND_URL }}
        className="min-h-dvh flex flex-col justify-center items-center flex-1 bg-cover bg-no-repeat bg-center"
      >
        <div>
          <div className="px-10 flex flex-col items-center gap-y-2">
            <Image
              src={METAS.LOGO_URL}
              priority
              width={400}
              height={46}
              alt={METAS.PRODUCT_NAME}
            />
          </div>
          <div className="px-10 w-full mt-6">
            <div className="w-full max-w-xl mx-auto relative border-2 border-[#1A305B] border-solid">
              <div className="flex flex-col items-center gap-4 bg-white/60 px-6 py-7">
                <div className="text-center text-2xl">
                  <h1 className="text-balance uppercase font-bold">
                    {METAS.H1_CONTENT}
                  </h1>
                  en cliquant sur le bouton ci-dessous
                </div>
                <a
                  className="text-center bg-[#1A305B] text-white p-4 block shadow-lg"
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
          {METAS.NOTICE_CONTENT ? (
            <p className="mx-auto max-w-2xl px-10 text-center italic text-black mt-10 bg-white/50 py-2">
              {METAS.NOTICE_CONTENT}
            </p>
          ) : null}
        </div>
      </div>
      <div className="py-10 max-w-screen-md m-auto px-10">
        <div className="flex flex-col items-center gap-y-6">
          <header>
            <h2 className="text-4xl font-semibold">
              {METAS.PRODUCT_NAME} Parrainage {new Date().getFullYear()}
            </h2>
            <p className="mt-5 mb-5">
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
                className="text-bluelight underline"
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

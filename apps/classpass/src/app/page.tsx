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
        className="min-h-dvh flex flex-col justify-center items-center bg-white flex-1 bg-cover bg-no-repeat bg-center"
      >
        <div className="border-black/10 shadow-md border-solid border bg-white py-6 rounded-[20px] flex flex-col gap-6 w-full max-w-2xl">
          <div className="px-10 flex flex-col items-center gap-y-2">
            <Image
              src={METAS.LOGO_URL}
              priority
              width={300}
              height={46}
              alt={METAS.PRODUCT_NAME}
            />
          </div>
          <div className="w-full">
            <div className="w-full max-w-xl mx-auto relative">
              <div className="flex flex-col items-center gap-4 px-6">
                <div className="text-center text-2xl">
                  <h1 className="text-balance uppercase font-bold">
                    {METAS.H1_CONTENT}
                  </h1>
                  en cliquant sur le bouton ci-dessous
                </div>
                <a
                  className="text-center bg-[#05f] hover:bg-[#004de6] text-white p-4 md:rounded-full block shadow-lg"
                  href={METAS.SPONSOR_LINK}
                  title={`Aller sur ${METAS.PRODUCT_NAME}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {METAS.BUTTON_CONTENT}
                </a>
                {METAS.NOTICE_CONTENT ? (
                  <p className="mx-auto px-10 text-center italic text-black">
                    {METAS.NOTICE_CONTENT}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-md m-auto px-10 mt-10">
        <div className="flex flex-col items-center gap-y-6">
          <header>
            <h2 className="text-4xl font-semibold">
              {METAS.PRODUCT_NAME} Parrainage {new Date().getFullYear()}
            </h2>
            <p className="mt-5 mb-5">
              Obtenez{' '}
              <b>
                {METAS.AMOUNT_TO_EARN}
                {METAS.AMOUNT_UNIT} en plus sur
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

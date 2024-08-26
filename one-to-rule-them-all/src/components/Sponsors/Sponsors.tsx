import React from 'react'
import Image from 'next/image'
import { type MetasApps } from '../../../sponsors'

export type SponsorsProps = {
  metasApps: MetasApps
}

const Sponsors = ({ metasApps }: SponsorsProps) => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Choisissez votre produit
          </h2>
          <p className="font-light text-balance text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Explorez la liste complète des sites web pris en charge par{' '}
            <b>Sponsor Me</b>.
          </p>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          {metasApps.map((metasApp) => {
            return (
              <div
                key={metasApp.name}
                className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700"
              >
                <a href="/" className="toto">
                  <Image
                    className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                    src={`/${metasApp.metas.SPONSOR_ME_LOGO_NAME}`}
                    alt={metasApp.metas.PRODUCT_NAME}
                    width={260}
                    height={260}
                  />
                </a>
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="/">{metasApp.metas.PRODUCT_NAME}</a>
                  </h3>
                  <span className="text-gray-500 dark:text-gray-400">
                    CEO & Web Developer
                  </span>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                    {metasApp.metas.PRODUCT_SHORT_DESCRIPTIION}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Sponsors

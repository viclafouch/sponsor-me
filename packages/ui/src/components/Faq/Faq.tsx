import React from 'react'

export type FaqProps = {
  productName: string
  amountInEuros: number
  sponsorLink: string
  faq: {
    question: string
    answer: React.ReactNode
  }[]
}

const Faq = ({ faq, productName, amountInEuros, sponsorLink }: FaqProps) => {
  return (
    <div className="ui-flex ui-flex-col ui-items-center ui-gap-y-6">
      <header>
        <h2 className="ui-text-4xl ui-font-semibold">
          {productName} Parrainage {new Date().getFullYear()}
        </h2>
        <p className="ui-mt-5 ui-mb-5">
          Obtenez{' '}
          <b>{amountInEuros}€ de réduction sur votre première commande</b>{' '}
          {productName} avec le lien de parrainage suivant :{' '}
          <a
            title={`Aller sur ${productName}`}
            className="ui-text-bluelight ui-underline"
            href={sponsorLink}
          >
            {sponsorLink}
          </a>
          . Vous trouverez ci-dessous quelques réponses aux questions les plus
          importantes sur l&apos;utilisation du lien de parrainage :
        </p>
        <hr />
      </header>
      <section
        className="ui-flex ui-flex-col ui-gap-7 ui-pb-5"
        itemProp="mainEntity"
        itemScope
        itemType="https://schema.org/FAQPage"
      >
        {faq.map(({ question, answer }) => {
          return (
            <div
              key={question}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <h3
                className="ui-text-2xl ui-text-blue ui-font-medium"
                itemProp="name"
              >
                {question}
              </h3>
              <div
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <p className="ui-mt-1" itemProp="text">
                  {answer}
                </p>
              </div>
            </div>
          )
        })}
      </section>
    </div>
  )
}

export default Faq

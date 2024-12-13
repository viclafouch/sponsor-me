import React from 'react'

export type FaqProps = {
  faq: {
    question: string
    answer: React.ReactNode
  }[]
}

const Faq = ({ faq }: FaqProps) => {
  return (
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
              <div className="ui-mt-1" itemProp="text">
                {answer}
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default Faq

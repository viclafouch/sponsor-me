import React from 'react'

export type FooterProps = {
  companyName: string
  productName: string
}

const Footer = ({ companyName, productName }: FooterProps) => {
  return (
    <footer className="ui-p-4 ui-bg-gray-100">
      <p className="ui-text-center ui-max-w-2xl ui-mx-auto">
        Remise gratuite uniquement valable avec le lien ci-dessus. Code promo{' '}
        {productName}. Le logo et la copie de {productName} sont protégés par
        les droits d&apos;auteur de {companyName}. Ce site Web n&apos;est pas
        affilié à {companyName}.
      </p>
    </footer>
  )
}

export default Footer

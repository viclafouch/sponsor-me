import React from 'react'

export type WarningBannerProps = {
  companyName: string
}

const WarningBanner = ({ companyName }: WarningBannerProps) => {
  return (
    <header
      className="ui-absolute ui-top-0 ui-inset-x-0 ui-text-center ui-p-4 ui-bg-gray-100/80"
      aria-hidden="true"
      role="presentation"
    >
      <p aria-hidden="true" className="ui-text-center umax-w-2xl ui-mx-auto">
        Ce site Web n&apos;est pas affilié à {companyName}.
      </p>
    </header>
  )
}

export default WarningBanner

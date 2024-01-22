import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Footer, WarningBanner } from '@repo/ui'
import * as METAS from '../../metas'
import '@repo/ui/styles.css'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const metadata: Metadata = {
  metadataBase: METAS.METADATA_BASE,
  title: METAS.TITLE,
  description: METAS.DESCRIPTION
}

const viewport: Viewport = {
  themeColor: METAS.THEME_COLOR
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="fr">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <WarningBanner companyName={METAS.COMPANY_NAME} />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer
          companyName={METAS.COMPANY_NAME}
          productName={METAS.PRODUCT_NAME}
        />
      </body>
    </html>
  )
}

export { metadata, viewport }

export default RootLayout

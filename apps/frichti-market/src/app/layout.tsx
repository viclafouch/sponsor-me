import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const metadata: Metadata = {
  themeColor: '#faf190',
  title: 'Code promo de 10€ offert sur Frichti Market en 2024',
  description:
    "Offre de 10€ de promotion sur votre 1ère commande sur le site Frichti Market · Livraison gratuite dès 50€ d'achat · Parrainage: 10€ offerts."
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="fr">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <header
          className="absolute top-0 inset-x-0 text-center p-4 bg-gray-100/80"
          aria-hidden="true"
          role="presentation"
        >
          <p aria-hidden="true" className="text-center max-w-2xl mx-auto">
            Ce site Web n&apos;est pas affilié à New Frichti SAS.
          </p>
        </header>
        <main className="flex-1 flex flex-col">{children}</main>
        <footer className="p-4 bg-gray-100">
          <p className="text-center max-w-2xl mx-auto">
            Remise gratuite uniquement valable avec le lien ci-dessus. Code
            promo Frichti Market. Le logo et la copie de Frichti Market sont
            protégés par les droits d&apos;auteur de New Frichti SAS. Ce site
            Web n&apos;est pas affilié à New Frichti SAS.
          </p>
        </footer>
      </body>
    </html>
  )
}

export { metadata }

export default RootLayout

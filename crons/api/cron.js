import { Resend } from 'resend'

export const config = {}

const resend = new Resend(process.env.RESEND_KEY)

const ACCOUNTS_FRICHTI_MARKET = [
  {
    cookie: process.env.FRICHTI_MARKET_COOKIE,
    email: 'camillebournier@hotmail.fr'
  }
]

export default async function handler(request, response) {
  const datas = await Promise.all(
    ACCOUNTS_FRICHTI_MARKET.map((account) => {
      return fetch('https://www.frichtimarket.com/api/profile', {
        headers: {
          'x-requested-with': 'XMLHttpRequest',
          cookie: account.cookie
        }
      }).then(async (responseFetch) => {
        const data = await responseFetch.json()

        return {
          ...account,
          credits: data.credits
        }
      })
    })
  )

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'victor.dlf@outlook.fr',
    subject: 'Récapitulatif parrainage (frichtimarket)',
    html: `<p>${datas
      .map((data) => {
        return `<p><u>${data.email}</u> : Vous avez <b>${data.credits} euros</b> sur <a href="https://www.frichtimarket.com/">frichtimarket</a>.</p>`
      })
      .join('')}</p>`
  })

  // Vercel CLI
  if (response) {
    return response.send({ message: 'Email sent to victor.dlf@outlook.fr' })
  }

  // Local CLI
  // eslint-disable-next-line no-console
  return console.log({ message: 'Email sent to victor.dlf@outlook.fr' })
}

// Local CLI, just run this file with node
if (!process.env.VERCEL) {
  handler()
}

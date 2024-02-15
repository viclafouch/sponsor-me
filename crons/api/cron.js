import { Resend } from 'resend'

export const config = {}

const resend = new Resend(process.env.RESEND_KEY)

export default async function handler(request, response) {
  const responseFetch = await fetch(
    'https://www.frichtimarket.com/api/profile',
    {
      headers: {
        'x-requested-with': 'XMLHttpRequest',
        cookie: process.env.COOKIE
      }
    }
  )

  const data = await responseFetch.json()

  const valueInEuro = data.credits

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'victor.dlf@outlook.fr',
    subject: 'Récapitulatif parrainage (frichtimarket)',
    html: `<p>Vous avez ${valueInEuro} euros sur <a href="https://www.frichtimarket.com/">frichtimarket</a>.</p>`
  })

  return response.send({ message: 'Email sent to victor.dlf@outlook.fr' })
}

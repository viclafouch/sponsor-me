import { Resend } from 'resend'

export const config = {}
const SEND_EMAIL_TO = process.env.RESEND_EMAIL_TO

const resend = new Resend(process.env.RESEND_KEY)

const getCreditsByWebsite = {
  frichti: async (token) => {
    const response = await fetch('https://www.frichtimarket.com/api/profile', {
      headers: {
        'x-requested-with': 'XMLHttpRequest',
        cookie: token
      }
    })
    const data = await response.json()

    return data.credits
  },
  bamCourses: async (token) => {
    const response = await fetch('https://www.bamcourses.com/api/profile', {
      headers: {
        'x-requested-with': 'XMLHttpRequest',
        cookie: token
      }
    })
    const data = await response.json()

    return data.credits
  },
  laBelleVie: async (token) => {
    const response = await fetch('https://www.labellevie.com/api/profile', {
      headers: {
        'x-requested-with': 'XMLHttpRequest',
        cookie: token
      }
    })
    const data = await response.json()

    return data.credits
  }
}

const websiteMetas = {
  frichti: {
    name: 'frichti',
    link: 'https://www.frichtimarket.com'
  },
  bamCourses: {
    name: 'bamCourses',
    link: 'https://www.bamcourses.com'
  },
  laBelleVie: {
    name: 'laBelleVie',
    link: 'https://www.labellevie.com'
  }
}

const ACCOUNTS = [
  {
    cookie: process.env.FRICHTI_MARKET_COOKIE_CAMILLE,
    email: 'camille****@hotmail.fr',
    type: 'frichti'
  },
  {
    cookie: process.env.FRICHTI_MARKET_COOKIE_AGATHE,
    email: 'agathe.****@yahoo.fr',
    type: 'frichti'
  },
  {
    cookie: process.env.FRICHTI_MARKET_COOKIE_VICTOR,
    email: 'victor.****@gmail.com',
    type: 'frichti'
  },
  {
    cookie: process.env.BAM_COURSES_COOKIE_VICTOR,
    email: 'victor****@outlook.fr',
    type: 'bamCourses'
  },
  {
    cookie: process.env.LA_BELLE_VIE_COOKIE_VICTOR,
    email: 'tuto****@gmail.com',
    type: 'laBelleVie'
  }
]

export default async function handler(request, response) {
  console.log('Getting credits...')

  const accountsWithCredits = await Promise.all(
    ACCOUNTS.map(async (account) => {
      const credits = await getCreditsByWebsite[account.type](account.cookie)

      return {
        ...account,
        credits
      }
    })
  )

  console.log('Sending email...')

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: SEND_EMAIL_TO,
    subject: 'Récapitulatif parrainage Sponsor Me',
    html: `<p>${accountsWithCredits
      .map((data) => {
        const website = websiteMetas[data.type]

        return `<p><u>${data.email}</u> : Vous avez <b>${data.credits} euros</b> sur <a href="${website.link}">${website.name}</a>.</p>`
      })
      .join('')}</p>`
  })

  console.log('Email sent')

  // Vercel CLI
  if (response) {
    return response.send({ message: `Email sent to ${SEND_EMAIL_TO}` })
  }

  // Local CLI
  // eslint-disable-next-line no-console
  return console.log({ message: `[FAKE] Email sent to ${SEND_EMAIL_TO}` })
}

// Local CLI, just run this file with node
if (!process.env.VERCEL) {
  handler()
}

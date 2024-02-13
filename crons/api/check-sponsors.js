import edgeChromium from 'chrome-aws-lambda'
import puppeteer from 'puppeteer'
import { Resend } from 'resend'

// eslint-disable-next-line prefer-destructuring
const LOGIN_EMAIL_FRICHTI_MARKET = process.env.LOGIN_EMAIL_FRICHTI_MARKET
// eslint-disable-next-line prefer-destructuring
const LOGIN_PASSWORD_FRICHTI_MARKET = process.env.LOGIN_PASSWORD_FRICHTI_MARKET
// eslint-disable-next-line prefer-destructuring
const RESEND_KEY = process.env.RESEND_KEY

const resend = new Resend(RESEND_KEY)

async function wait(delay) {
  return await new Promise((resolve) => {
    setTimeout(resolve, delay)
  })
}

const LOCAL_CHROME_EXECUTABLE =
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'

export async function GET() {
  const executablePath =
    (await edgeChromium.executablePath) || LOCAL_CHROME_EXECUTABLE

  const browser = await puppeteer.launch({
    executablePath,
    args: edgeChromium.args,
    headless: false
  })
  // Launch the browser and open a new blank page
  const page = await browser.newPage()
  await page.goto('https://www.frichtimarket.com/')
  await page.setViewport({ width: 1080, height: 1024 })

  // remove cookie modal
  await page.waitForSelector('#confidentiality')
  await page.click('#confidentiality-refuse-all')

  await wait(1000)

  // Open login modal
  await page.hover('.o-user-menu .name')
  await page.click('.user-login')

  // Type login and password
  await page.type('input[type="email"]', LOGIN_EMAIL_FRICHTI_MARKET)
  await page.type('input[type="password"]', LOGIN_PASSWORD_FRICHTI_MARKET)

  await page.click('form button[type="submit"]')

  // Wait for be logged
  await wait(1000)

  const valueInEuro = await page.evaluate(() => {
    const anchor = document.querySelector('.credits')

    return parseFloat(anchor.textContent.match(/[0-9.]+/g)[0], 10)
  })

  await browser.close()

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'victor.dlf@outlook.fr',
    subject: 'Récapitulatif parrainage (frichtimarket)',
    html: `<p>Vous avez ${valueInEuro} euros sur <a href="https://www.frichtimarket.com/">frichtimarket</a>.</p>`
  })

  console.log('email sent !')
}

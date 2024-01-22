import fs from 'node:fs/promises'
import path from 'node:path'
import { createInterface } from 'node:readline/promises'
import { stdin, stdout } from 'process'

const rl = createInterface({ input: stdin, output: stdout })
const appsFolder = path.resolve(process.cwd(), 'apps')
const templateFolder = path.resolve(appsFolder, 'frichti-market')

const templateFiles = [
  'next.config.js',
  'next-env.d.ts',
  'postcss.config.js',
  'tailwind.config.ts',
  'tsconfig.json',
  'metas.tsx',
  'package.json',
  '.eslintrc.json',
  'src',
  'public'
]

async function start() {
  // let productName = await rl.question('Name of the product : ')

  // if (!productName) {
  //   return
  // }

  // productName = productName.toLowerCase()
  const productName = 'test'

  // rl.close()

  const productFolder = path.resolve(appsFolder, productName)

  try {
    await fs.mkdir(productFolder)
  } catch (error) {
    await fs.rm(productFolder, { recursive: true, force: true })
    await fs.mkdir(productFolder)
  }

  await Promise.all(
    templateFiles.map((pathname) => {
      const source = path.resolve(templateFolder, pathname)
      const destination = path.resolve(productFolder, pathname)

      return fs.lstat(source).then((stats) => {
        return stats.isDirectory()
          ? fs.cp(source, destination, { recursive: true })
          : fs.copyFile(source, destination)
      })
    })
  )

  const packageJson = path.resolve(productFolder, 'package.json')
  const { default: packageJsonData } = await import(packageJson)
  packageJsonData.name = productName
  await fs.writeFile(
    packageJson,
    `${JSON.stringify(packageJsonData, null, 2)}\n`
  )

  // console.log(packageJson)

  console.log('run `pnpm i`')
}

start()

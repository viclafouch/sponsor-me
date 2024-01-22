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
  let productName = await rl.question('Name of the product : ')

  if (!productName) {
    process.exit(1)

    return
  }

  productName = productName.toLowerCase()

  rl.close()

  const productFolder = path.resolve(appsFolder, productName)
  const appsPaths = await fs.readdir(appsFolder, { withFileTypes: true })
  const appsCount = appsPaths.filter((dirent) => {
    return dirent.isDirectory()
  }).length
  const newPort = `300${appsCount}`

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
  packageJsonData.scripts.dev = `next dev -p ${newPort}`
  await fs.writeFile(
    packageJson,
    `${JSON.stringify(packageJsonData, null, 2)}\n`
  )

  // eslint-disable-next-line no-console
  console.log('\x1b[32m', `Run 'pnpm i'`)
}

start()

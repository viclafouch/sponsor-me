import fs from 'node:fs/promises'
import path from 'node:path'

export type MetasUgly = Awaited<typeof import('../apps/frichti-market/metas')>

export type Metas = {
  [key in keyof MetasUgly]: MetasUgly[key]
}

export type MetasApp = {
  name: string
  metas: Metas
}

export type MetasApps = MetasApp[]

export async function getAsyncMetasApps(): Promise<MetasApps> {
  const appsFolder = path.resolve('..', 'apps')
  const appsPaths = await fs.readdir(appsFolder, { withFileTypes: true })
  const appsCount = appsPaths.filter((dirent) => {
    return dirent.isDirectory()
  })

  return Promise.all(
    appsCount.map(async (dirent) => {
      const metas = (await import(`../apps/${dirent.name}/metas.tsx`)) as Metas

      return {
        name: dirent.name,
        metas: { ...metas }
      }
    })
  )
}

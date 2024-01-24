import React from 'react'
import fs from 'node:fs/promises'
import path from 'node:path'

async function getAppsMeta() {
  const appsFolder = path.resolve('..', 'apps')
  const appsPaths = await fs.readdir(appsFolder, { withFileTypes: true })
  const appsCount = appsPaths.filter((dirent) => {
    return dirent.isDirectory()
  })

  return Promise.all(
    appsCount.map(async (dirent) => {
      return {
        filename: dirent.name,
        metas: { ...(await import(`../../../apps/${dirent.name}/metas.tsx`)) }
      }
    })
  )
}

const Home = async () => {
  const metasApps = await getAppsMeta()
  console.log(metasApps)

  return (
    <div>
      {metasApps.map((metasApp) => {
        return <div>{metasApp.metas.COMPANY_NAME}</div>
      })}
    </div>
  )
}

export default Home

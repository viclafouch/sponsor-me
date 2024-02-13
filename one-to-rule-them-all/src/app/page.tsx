import React from 'react'
import { getAsyncMetasApps } from '../../sponsors'
import Hero from '../components/Hero/Hero'
import Sponsors from '../components/Sponsors'

const Home = async () => {
  const metasApps = await getAsyncMetasApps()

  return (
    <>
      <Hero />
      <Sponsors metasApps={metasApps} />
    </>
  )
}

export default Home

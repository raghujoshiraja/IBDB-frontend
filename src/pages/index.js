import React from 'react'
import Hero from '../components/Hero'
import Search from '../components/Search'

function Home() {
  return (
    <div className="my-10 gap-3 min-h-screen">
      <Search />
      <Hero />
    </div>
  )
}

export default Home

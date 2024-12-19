import { useState } from 'react'
import Header from './components/Home'
import Hero from './components/Hero'
import Marquee from './components/Marquee'

function App() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Marquee/>
      </main>
    </div>
  )
}

export default App


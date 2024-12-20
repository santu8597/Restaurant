import { useState } from 'react'
import Header from './components/Home'
import Hero from './components/Hero'
import Marquee from './components/Marque'
import Page from './components/Page'
import Menu from './components/Menu'
import About from './components/About'
import Contact from './components/Contact'
function App() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Marquee/>
        <Page/>
        <About/>
        <Contact/>
      </main>
    </div>
  )
}

export default App


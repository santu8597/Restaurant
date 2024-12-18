import { useState } from 'react'
import Header from './components/Home'
import Hero from './components/Hero'

function App() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
      </main>
    </div>
  )
}

export default App


import { useState } from 'react'
import Header from './components/Home'
import Hero from './components/Hero'
import Marquee from './components/Marque'
import Page from './components/Page'
import Menu from './components/Menu'
import About from './components/About'
import Contact from './components/Contact'
import SignUpForm from './components/Signup'
import SignInForm from './components/Signin'
import ReservationForm from './components/Reservation'
import AuthPage from './auth/page'
function App() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Marquee/>
        <Page/>
        <ReservationForm/>
        <About/>
        <Contact/>
       
        <AuthPage/>
      </main>
    </div>
  )
}

export default App


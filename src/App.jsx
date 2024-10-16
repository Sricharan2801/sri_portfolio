import React from 'react'
import NavBar from './sections/NavBar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <NavBar />
      <Hero />
      <About />
      <Projects/>
      <Contact/>
      {/* <Footer/> */}
      <Toaster />
    </main>
  )
}

export default App

import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Education from './components/education/Education'
import Skills from './components/skills/Skills'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

export default function App() {
  return (
    <>
      <main className='container'>
        <Header />
        <Nav />
        <About />
        <Education />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

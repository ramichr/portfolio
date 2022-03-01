import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

export default function App() {
  return (
    <main>
      <section className='container'>
        <Header />
        <Nav />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </section>
      <Footer />
    </main>
  )
}

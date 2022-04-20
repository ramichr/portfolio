import {
  Header,
  Nav,
  About,
  Experience,
  Skills,
  Portfolio,
  Contact,
  Footer,
} from './components'

export default function App() {
  return (
    <main>
      <section className='container'>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Skills />
        <Portfolio />
        <Contact />
      </section>
      <Footer />
    </main>
  )
}

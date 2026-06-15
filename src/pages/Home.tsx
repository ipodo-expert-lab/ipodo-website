import Nav from '../components/Nav'
import Hero from '../sections/Hero'
import Paths from '../sections/Paths'
import Services from '../sections/Services'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Paths />
        <Services />
      </main>
      <Footer />
    </>
  )
}
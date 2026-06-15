import Nav from '../components/Nav'
import InvestHero from '../sections/invest/InvestHero'
import InvestAbout from '../sections/invest/InvestAbout'
import Contact from '../sections/home/Contact'
import Footer from '../components/Footer'

export default function Invest() {
  return (
    <>
      <Nav />
      <main>
        <InvestHero />
        <InvestAbout />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
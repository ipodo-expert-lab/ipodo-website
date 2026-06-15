import Nav from '../components/Nav'
import FranchiseHero from '../sections/franchise/FranchiseHero'
import FranchiseAbout from '../sections/franchise/FranchiseAbout'
import Contact from '../sections/home/Contact'
import Footer from '../components/Footer'

export default function Franchise() {
  return (
    <>
      <Nav />
      <main>
        <FranchiseHero />
        <FranchiseAbout />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
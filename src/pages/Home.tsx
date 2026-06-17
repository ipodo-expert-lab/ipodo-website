import Nav from "../components/Nav";
import Hero from "../sections/home/Hero";
import Paths from "../sections/home/Paths";
import Services from "../sections/home/Services";
import Contact from "../sections/home/Contact";
import Footer from "../components/Footer";
import FAQ from "../sections/home/FAQ";
import Marquee from "../sections/home/Marquee";
import Gallery from "../sections/home/Gallery";
import Stats from "../sections/home/Stats";
import FloatWA from '../components/FloatWA'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <Paths />
        <Services />
        <FAQ />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <FloatWA />
    </>
  );
}

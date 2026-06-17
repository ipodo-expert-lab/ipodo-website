import Nav from "../components/Nav";
import Hero from "../sections/home/Hero";
import Paths from "../sections/home/Paths";
import Services from "../sections/home/Services";
import Contact from "../sections/home/Contact";
import Footer from "../components/Footer";
import FAQ from "../sections/home/FAQ";
import Marquee from "../sections/home/Marquee";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Paths />
        <Services />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}


import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Certificates from "../components/Certificates";
import ProjectPortfolio from "../components/ProjectPortfolio";
import Contact from "../components/Contact";
import MouseGlow from "../components/MouseGlow";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-slate-950">
      <MouseGlow />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      
      <Certificates />

      <ProjectPortfolio />

      <Contact />
      <Experience />

      <Footer />
    </main>
  );
}
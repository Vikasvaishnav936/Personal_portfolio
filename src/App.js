import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import DeveloperJourney from "./components/DeveloperJourney/DeveloperJourney";
import DeveloperDesk from "./components/DeveloperDesk/DeveloperDesk";
import Skills from "./components/Skill/Skills";
import Projects from "./components/Project/Projects";
import Experience from "./components/Expereince/Experience";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";

function App() {
  return (
    <>
      <Navbar />
      {/* <Profile/> */}
      <Hero 
       name= "Vikas Vaishnav"
       experience="Years Expereience"
       description="I build modern websites using React, Laravel, WordPress and PHP."
      />
      <DeveloperDesk />
      <About />
      <DeveloperJourney />

      <Skills/> 
    
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <WhatsAppButton/>
      </>
      );
}

export default App;
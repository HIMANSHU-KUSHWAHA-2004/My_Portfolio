import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import About from "./Component/About";
import Education from "./Component/Education";
import Skill from "./Component/Skill";
import CodingProfiles from "./Component/CodingProfile";
import Experience from "./Component/Experience";
import Projects from "./Component/Projects";
import Contacts from "./Component/Contacts";
import Footer from "./Component/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="app">
        <Home /> {/* ✅ replaced inline section with component */}
        <section id="about" className="section">
          <About />
        </section>
        <section id="education" className="section">
          <Education />
        </section>
        <section id="skills" className="section">
          <Skill />
        </section>
        <section id="coding-profiles" className="section">
          <CodingProfiles/>
        </section>
        <section id="experience" className="section">
          <Experience/>
        </section>
        <section id="projects" className="section">
          <Projects/>
        </section>
        <section id="contact-me" className="section">
         <Contacts/>
        </section>
        <section id="contact-me" className="section">
         <Footer/>
        </section>
      </div>
    </>
  );
}

export default App;

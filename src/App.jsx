

// imported bootstrap in a main file so the suchild can use it
// import "bootstrap/dist/css/bootstrap.min.css";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Hero from "./Component/Hero/Hero";

import Navbar from "./Component/navbar/Navbar";
import Projects from "./Component/Projects/Projects";
import Skills from "./Component/Skills/Skills";


import "./index.css"

function App() {
  return (
    <main className="font-">
      <Navbar />
      <Hero />
      <About />
      <Skills /> 
      <Projects />
      
      <Contact />
      
    </main>
  );
}

export default App;

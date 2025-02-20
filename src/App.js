import { Routes, Route } from "react-router-dom";
import Home from "./templates/Home";
import About from "./templates/About";
import Contact from "./templates/Contact";
import Projects from "./templates/Projects";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;

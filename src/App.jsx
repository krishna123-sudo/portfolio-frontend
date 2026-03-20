import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./Body";
import Tabs from "./header/Tabs";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "../Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div className="wave-bg">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 800"
          preserveAspectRatio="none"
        >
          <path
            d="M0,400 C300,200 600,600 900,400 C1200,200 1440,500 1440,500"
            stroke="rgba(139,92,246,0.3)"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M0,500 C300,300 600,700 900,500 C1200,300 1440,600 1440,600"
            stroke="rgba(139,92,246,0.2)"
            strokeWidth="1.2"
            fill="none"
          />
        </svg>
      </div>

      <BrowserRouter>
        <Tabs />

        <div className="pt-24">
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />

          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
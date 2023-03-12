import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Project from "./components/Project";

// import pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;

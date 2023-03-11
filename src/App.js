import './App.css';
import BucketList from './components/BucketList';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Project from "./components/Project"

// import pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

function App() {
  return (
    <div className="bucket-app">
      <BucketList />
    </div>
  );
}

export default App;
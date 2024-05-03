import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skill from "./components/Skill";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;

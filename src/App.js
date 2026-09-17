import './App.scss';
import {Routes, Route} from 'react-router-dom';
import Home from './containers/home';
import About from './containers/about';
import Resume from './containers/resume';
import Skill from './containers/skills';
import Portfolio from './containers/portfolio';
import Contact from './containers/contact';
import Navbar from './components/navBar';
import ParticlesComponent from './components/particles';
function App() {
  return (
    <div className="App">
      {/* Particles js  */}
    <ParticlesComponent id="particles" />
      {/* Navebar */}
      <Navbar />
      {/* main page content */}
    <div className='App__main-page-content'>
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/resume" element={<Resume/>} />
        <Route path="/skills" element={<Skill/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/contact" element={<Contact/>} />


      </Routes>
      </div>
    <div>
    
    </div>
    </div>
  );
}

export default App;

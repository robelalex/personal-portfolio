import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './pages/Home'
import Projects from './pages/Projects'
import Education from './pages/Education'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ProjectDisplay from './pages/ProjectDisplay';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} /> 
          <Route path="/projects" component={Projects} />
          <Route path="/project/:id" component={ProjectDisplay} />
          <Route path="/experience" component={Education} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
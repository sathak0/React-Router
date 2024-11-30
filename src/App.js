import logo from './logo.svg';
import './App.css';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from './Home';
import { Items } from './Items';
import { Gallery } from './Gallery';
import { About } from './About';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Items">Items</Link>
            </li>
            <li>
              <Link to="/Gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Items" element={<Items />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/About" element={<About />} />
        </Routes>


      </Router>
    </div>
  );
}

export default App;

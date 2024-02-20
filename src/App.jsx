import { Routes, Route, Link } from 'react-router-dom';
import '../src/css/App.css';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/CarGallery';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <div>
      <h1>American Muscle Car</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/gallery">Gallery</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <footer>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/gallery">Gallery</Link>
      </footer>
    </div>
  );
}

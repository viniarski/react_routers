import '../css/Gallery.css';
import { gallery } from '../stores/gallery.js';
import Car from './Car.jsx';

export default function Gallery() {
  return (
    <div className="container">
      <div className="gallery">
        {gallery.map((car) => (
          <Car car={car} />
        ))}
      </div>
    </div>
  );
}

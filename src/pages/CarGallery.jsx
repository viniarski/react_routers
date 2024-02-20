import '../css/Gallery.css';
import { gallery } from '../stores/gallery';
import Car from './Car';

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

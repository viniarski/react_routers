export default function Car({ car }) {
  return (
    <div className="carCard">
      <img src={car.image} alt="car" className="car-image" />
      <div className="car-detail-container">
        <p>{car.carName}</p>
        <p>Engine: {car.engine}</p>
      </div>
    </div>
  );
}

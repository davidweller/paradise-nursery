import { useCart } from '../context/CartContext';
import './PlantCard.css';

const PlantCard = ({ plant }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(plant.id);
  };

  return (
    <div className="plant-card">
      <div className="plant-card-image">
        <img src={plant.image} alt={plant.name} />
      </div>
      <div className="plant-card-content">
        <h3 className="plant-card-name">{plant.name}</h3>
        <p className="plant-card-description">{plant.description}</p>
        <div className="plant-card-footer">
          <span className="plant-card-price">${plant.price.toFixed(2)}</span>
          <button className="plant-card-button" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;


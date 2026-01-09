import { useState } from 'react';
import { useCart } from '../Cartslice';
import './PlantCard.css';

const PlantCard = ({ plant }) => {
  const { addToCart } = useCart();
  const [imageError, setImageError] = useState(false);

  const handleAddToCart = () => {
    addToCart(plant.id);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="plant-card">
      <div className="plant-card-image">
        {imageError ? (
          <div className="plant-card-placeholder">
            <span>{plant.name}</span>
          </div>
        ) : (
          <img 
            src={plant.image} 
            alt={plant.name}
            onError={handleImageError}
            loading="lazy"
          />
        )}
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


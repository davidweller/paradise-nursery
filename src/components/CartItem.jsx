import { useCart } from '../context/CartContext';
import './CartItem.css';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { plant, quantity } = item;

  const handleDecrease = () => {
    updateQuantity(plant.id, quantity - 1);
  };

  const handleIncrease = () => {
    updateQuantity(plant.id, quantity + 1);
  };

  const handleDelete = () => {
    removeFromCart(plant.id);
  };

  const totalPrice = plant.price * quantity;

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={plant.image} alt={plant.name} />
      </div>
      <div className="cart-item-details">
        <h3 className="cart-item-name">{plant.name}</h3>
        <p className="cart-item-unit-price">${plant.price.toFixed(2)} each</p>
      </div>
      <div className="cart-item-controls">
        <div className="quantity-controls">
          <button 
            className="quantity-button" 
            onClick={handleDecrease}
            aria-label="Decrease quantity"
          >
            -
          </button>
          <span className="quantity-value">{quantity}</span>
          <button 
            className="quantity-button" 
            onClick={handleIncrease}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
        <div className="cart-item-total">
          ${totalPrice.toFixed(2)}
        </div>
        <button 
          className="delete-button" 
          onClick={handleDelete}
          aria-label="Remove item"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CartItem;


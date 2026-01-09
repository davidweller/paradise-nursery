import { Link } from 'react-router-dom';
import Header from '../components/Header';
import CartItem from '../CartItem';
import { useCart } from '../Cartslice';
import './ShoppingCart.css';

const ShoppingCart = () => {
  const { getCartItemsWithDetails, getTotalItems, getTotalCost } = useCart();
  const cartItems = getCartItemsWithDetails();
  const totalItems = getTotalItems();
  const totalCost = getTotalCost();

  const handleCheckout = () => {
    alert('Thank you for your order! This is a demo checkout.');
  };

  if (cartItems.length === 0) {
    return (
      <div className="shopping-cart">
        <Header />
        <div className="cart-content">
          <h1 className="cart-title">Shopping Cart</h1>
          <div className="empty-cart">
            <p className="empty-cart-message">Your cart is empty</p>
            <Link to="/products" className="continue-shopping-button">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="shopping-cart">
      <Header />
      <div className="cart-content">
        <h1 className="cart-title">Shopping Cart</h1>
        <div className="cart-items-container">
          {cartItems.map(item => (
            <CartItem key={item.plantId} item={item} />
          ))}
        </div>
        <div className="cart-summary">
          <div className="cart-summary-row">
            <span className="summary-label">Total Items:</span>
            <span className="summary-value">{totalItems}</span>
          </div>
          <div className="cart-summary-row">
            <span className="summary-label">Total Cost:</span>
            <span className="summary-value total-cost">${totalCost.toFixed(2)}</span>
          </div>
        </div>
        <div className="cart-actions">
          <Link to="/products" className="continue-shopping-button">
            Continue Shopping
          </Link>
          <button className="checkout-button" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;


import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Header.css';

const Header = () => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="nav-logo">
          Paradise Nursery
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/products" className="nav-link">Products</Link>
          <Link to="/cart" className="nav-link cart-link">
            <span className="cart-icon">🛒</span>
            {totalItems > 0 && (
              <span className="cart-badge">{totalItems}</span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;


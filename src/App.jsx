import { HashRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Landing from './pages/Landing';
import ProductListing from './pages/ProductListing';
import ShoppingCart from './pages/ShoppingCart';
import './App.css';

function App() {
  return (
    <CartProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </HashRouter>
    </CartProvider>
  );
}

export default App;


import { HashRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './Cartslice';
import Landing from './pages/Landing';
import ProductList from './ProductList';
import ShoppingCart from './pages/ShoppingCart';
import Aboutus from './Aboutus';
import './App.css';

function App() {
  return (
    <CartProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/about" element={<Aboutus />} />
        </Routes>
      </HashRouter>
    </CartProvider>
  );
}

export default App;


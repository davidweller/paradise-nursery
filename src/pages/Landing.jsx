import { Link } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing-hero">
        <div className="landing-content">
          <h1 className="landing-title">Paradise Nursery</h1>
          <p className="landing-description">
            Welcome to Paradise Nursery, your one-stop destination for beautiful houseplants, 
            aromatic herbs, and medicinal plants. We offer a wide variety of carefully selected 
            plants to bring nature's beauty into your home. Whether you're looking for plants 
            to purify your air, add fragrance to your space, or create a healing garden, 
            we have something special for everyone. Start your plant journey with us today!
          </p>
          <Link to="/products" className="landing-button">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;


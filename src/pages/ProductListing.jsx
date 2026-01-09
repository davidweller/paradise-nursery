import Header from '../components/Header';
import PlantCard from '../components/PlantCard';
import { getPlantsByCategory } from '../data/plants';
import './ProductListing.css';

const ProductListing = () => {
  const plantsByCategory = getPlantsByCategory();

  return (
    <div className="product-listing">
      <Header />
      <div className="product-listing-content">
        <h1 className="product-listing-title">Our Plants</h1>
        {Object.entries(plantsByCategory).map(([category, plants]) => (
          <section key={category} className="category-section">
            <h2 className="category-title">{category}</h2>
            <div className="plants-grid">
              {plants.map(plant => (
                <PlantCard key={plant.id} plant={plant} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;


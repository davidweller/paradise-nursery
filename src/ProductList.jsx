import Header from './components/Header';
import PlantCard from './components/PlantCard';
import { getPlantsByCategory } from './data/plants';
import './ProductList.css';

const ProductList = () => {
  const plantsByCategory = getPlantsByCategory();

  return (
    <div className="product-list">
      <Header />
      <div className="product-list-content">
        <h1 className="product-list-title">Our Plants</h1>
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

export default ProductList;


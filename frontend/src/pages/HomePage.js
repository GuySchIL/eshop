import { Link } from 'react-router-dom';
import data from '../data';

function HomePage() {
  return (
    <div>
      <h1>Products</h1>
      <div className="products">
        {data.products.map((product) => (
          <div key={product.token} className="product">
            <Link to={`/product/${product.token}`}>
              <img src={product.image} alt={product.name}></img>
            </Link>
            <div className="product-desc">
              <Link to={`/product/${product.token}`}>
                <p>{product.name}</p>
              </Link>
              <p>
                <strong>{product.price}$</strong>
              </p>
              <button>Add To Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;

import { useEffect, useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../data';
import axios from 'axios';

const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_REQUEST':
      return { ...state, loading: true };
    case 'GET_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'GET_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function HomePage() {
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    loading: true,
    error: '',
    products: [],
  });

  // const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      dispatch({ type: 'GET_REQUEST' });
      try {
        const res = await axios.get('/api/v1/products');
        dispatch({ type: 'GET_SUCCESS', payload: res.data });
      } catch (error) {
        dispatch({ type: 'GET_FAILURE', payload: error.message });
      }

      // setProducts(res.data);
    };

    getProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <div className="products">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          products.map((product) => (
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
          ))
        )}
      </div>
    </div>
  );
}

export default HomePage;

import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Rating from './Rating';
import axios from 'axios';
import { Store } from '../store';
import { useContext } from 'react';

function Product(props) {
  const { product } = props;
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const addToCartHandler = async () => {
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/v1/products/${product._id}`);
    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }
    ctxDispatch({
      type: 'ADD_TO_CART',
      payload: { ...product, quantity },
    });
  };

  const outOfStock = product.countInStock === 0;

  return (
    <Card className="product-card">
      <Link to={`/product/${product.token}`}>
        <Card.Img
          variant="top"
          src={product.image}
          alt={product.name}
        ></Card.Img>
      </Link>
      <Card.Body>
        <Link to={`/product/${product.token}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Card.Text>{product.price}$</Card.Text>
        <Card.Text className="desc">{product.description}</Card.Text>
        <Rating
          rating={product.rating}
          numReviews={product.numReviews}
        ></Rating>
        {outOfStock ? (
          <Button variant="light" disabled>
            Out of Stock
          </Button>
        ) : (
          <Button
            onClick={() => addToCartHandler(product)}
            className="btn-primary"
          >
            Add to Cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default Product;

import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Rating from './Rating';

function Product(props) {
  const { product } = props;
  return (
    <Card className='product-card'>
      <Link to={`/product/${product.token}`}>
        <img
          src={product.image}
          alt={product.name}
          className="card-img-top"
        ></img>
      </Link>
      <Card.Body>
        <Link to={`/product/${product.token}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating
          rating={product.rating}
          numReviews={product.numReviews}
        ></Rating>
        <Card.Text>{product.price}$</Card.Text>
        <Button>Add To Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default Product;

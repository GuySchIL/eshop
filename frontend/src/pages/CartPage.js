import { useContext } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import MessageBox from '../components/MessageBox';
import { Store } from '../store';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button, Card } from 'react-bootstrap';
import axios from 'axios';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function CartPage() {
  const { state, dispatch: ctxDispatch } = useContext(Store);

  const navigate = useNavigate();

  const {
    cart: { cartItems },
  } = state;

  const updateCartHandler = async (item, quantity) => {
    try {
      const { data } = await axios.get(`/api/v1/products/${item._id}`);
      if (data.countInStock < quantity) {
        window.alert('Sorry. Product is out of stock');
        return;
      }
      ctxDispatch({
        type: 'ADD_TO_CART',
        payload: { ...item, quantity },
      });
    } catch (err) {
      ctxDispatch({ type: 'GET_FAIL', payload: err.message });
    }
  };

  const removeItemHandler = async (item) => {
    ctxDispatch({
      type: 'REMOVE_FROM_CART',
      payload: item,
    });
  };

  const checkoutHandler = (async) => {
    navigate('/signin?redirect=/shipping');
  };

  return (
    <div>
      <Helmet>
        <title>Shopping Cart</title>
      </Helmet>
      <h1>Shopping Cart</h1>
      <Row>
        <Col md={8}>
          {cartItems.length === 0 ? (
            <MessageBox>
              Your cart is empty.
              <div>
                <Link to="/">Go shopping</Link>
              </div>
            </MessageBox>
          ) : (
            <ListGroup>
              {cartItems.map((item) => (
                <ListGroup.Item key={item.token}>
                  <Row className="align-items-center">
                    <Col md={4}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid rounded img-thumbnail"
                      ></img>{' '}
                      <Link to={`/products/${item.token}`}>{item.name}</Link>
                    </Col>
                    <Col md={3}>
                      <Button
                        variant="light"
                        disabled={item.quantity === item.countInStock}
                      >
                        <i
                          className="fas fa-plus-circle"
                          onClick={() =>
                            updateCartHandler(item, item.quantity + 1)
                          }
                        ></i>
                      </Button>{' '}
                      <span>{item.quantity}</span>{' '}
                      <Button
                        variant="light"
                        disabled={item.quantity === 1}
                        onClick={() =>
                          updateCartHandler(item, item.quantity - 1)
                        }
                      >
                        <i className="fas fa-minus-circle"></i>
                      </Button>
                    </Col>
                    <Col md={3}>{item.price}$</Col>
                    <Col md={2}>
                      <Button variant="light">
                        <i
                          className="fas fa-trash"
                          onClick={() => removeItemHandler(item)}
                        ></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>
                    Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}{' '}
                    items): $
                    {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
                  </h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="d-grid">
                    <Button
                      type="button"
                      variant="primary"
                      disabled={cartItems.length === 0}
                      onClick={checkoutHandler}
                    >
                      Checkout
                    </Button>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12}></Col>
      </Row>
    </div>
  );
}

export default CartPage;

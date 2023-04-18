import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { Badge, NavDropdown } from 'react-bootstrap';
import { useContext } from 'react';
import { Store } from './store';
import CartPage from './pages/CartPage';
import SignInPage from './pages/SignInPage';
import React from 'react';
import logo from './images/mylogo.png';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ShippingAddressPage from './pages/ShippingAddressPage';
import SignUpPage from './pages/SignUpPage';
import PaymentPage from './pages/PaymentPage';

function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;
  // const {
  //   cart: { cartItems },
  //   userInfo,
  // } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
  };

  return (
    <BrowserRouter>
      <div className="d-flex flex-column side-allpage">
        <ToastContainer position="bottom-center" limit={1} />
        <header className="header">
          <NavBar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <NavBar.Brand>
                  <img
                    src={logo}
                    alt="Sale Frenzy Logo"
                    width="150"
                    height="50"
                    className="d-inline-block align-top me-2 logo-image"
                  />
                </NavBar.Brand>
              </LinkContainer>
              <NavBar.Toggle aria-controls="basic-navbar-nav" />
              <NavBar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Link to="/cart" className="nav-link cart-link">
                    <i className="fas fa-shopping-cart me-2"></i>
                    {cart.cartItems.length > 0 && (
                      <Badge pill bg="danger">
                        {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                      </Badge>
                    )}
                  </Link>
                  {/* <NavDropdown title="Admin" id="basic-nav-dropdown">
                    <LinkContainer to="/admin/userlist">
                      <NavDropdown.Item>Users</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/admin/productlist">
                      <NavDropdown.Item>Products</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/admin/orderlist">
                      <NavDropdown.Item>Orders</NavDropdown.Item>
                    </LinkContainer>
                  </NavDropdown> */}
                  <Nav.Link href="/" className="nav-link header-link">
                    Homepage
                  </Nav.Link>
                  <Nav.Link href="/about" className="nav-link header-link">
                    About Us
                  </Nav.Link>
                  <Nav.Link href="/contact" className="nav-link header-link">
                    Contact
                  </Nav.Link>
                  {userInfo ? (
                    <NavDropdown
                      title={userInfo.name}
                      id="basic-nav-dropdown"
                      className="nav-dropdown"
                    >
                      <LinkContainer to="/profile">
                        <NavDropdown.Item>User Profile</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/orderhistory">
                        <NavDropdown.Item>Order History</NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Divider />
                      <Link
                        className="dropdown-item"
                        to="#signout"
                        onClick={signoutHandler}
                      >
                        Sign Out
                      </Link>
                    </NavDropdown>
                  ) : (
                    <Link className="nav-link" to="/signin">
                      Sign In
                    </Link>
                  )}
                </Nav>
              </NavBar.Collapse>
            </Container>
          </NavBar>
        </header>

        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/product/:token" element={<ProductPage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/signin" element={<SignInPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/contact" element={<ContactUsPage />} />
              <Route path="/shipping" element={<ShippingAddressPage />} />
              <Route path="/payment" element={<PaymentPage />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">
            <small>Copyright © 2023 Guy Schvetz. ALL RIGHTS RESERVED</small>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

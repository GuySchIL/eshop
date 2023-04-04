import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { Badge } from 'react-bootstrap';
import { useContext } from 'react';
import { Store } from './store';
import CartPage from './pages/CartPage';
import SignInPage from './pages/SignInPage';
import React from 'react';
import logo from './images/logo.png';

function App() {
  const { state } = useContext(Store);
  const { cart } = state;

  return (
    <BrowserRouter>
      <div className="d-flex flex-column side-allpage">
        <header>
          <NavBar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <NavBar.Brand>
                  <img
                    src={logo}
                    alt="Sale Frenzy Logo"
                    width="50"
                    height="50"
                    className="d-inline-bloack align-top rounded-circle"
                  />
                </NavBar.Brand>
              </LinkContainer>
              <NavBar.Toggle aria-controls="basic-navbar-nav" />
              <NavBar.Collapse id="basic-navbar-nav" />
              {/* <nav className="ms-auto w-50 justify-content-end">
                <Link to="/cart" className="nav=link">
                  <i className="fas fa-shopping-cart text-white"></i>
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </Badge>
                  )}
                </Link>
              </nav> */}
              <Nav className="mr-auto navbar-nav">
                <Nav.Link href="/">Homepage</Nav.Link>
                <Nav.Link href="/cart">
                  <i className="fas fa-shopping-cart text-white"></i>
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </Badge>
                  )}
                </Nav.Link>
                <Nav.Link href="/about">About Us</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                <Nav.Link href="/signin">Sign In</Nav.Link>
              </Nav>
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
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">ALL RIGHTS RESERVED</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

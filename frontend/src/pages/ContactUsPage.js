import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ContactUsPage = () => {
  return (
    <Container className="contact-us small-container">
      <h2>Contact Us</h2>
      <Row>
        <Col>
          <Form>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Name:</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Label>Message:</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your message"
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="d-block mx-auto mb-3"
            >
              Submit Message
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUsPage;


import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Offerings = () => {
  return (
    <Container className="offerings-container mt-4">
      <h2>Our Offerings</h2>

      {/* First row of offerings */}
      <Row className="mb-4">
        <Col md={4}>
          <img
            src="path_to_sweet_dish_image_1.jpg"  {/* Replace with the actual path to your sweet dish image */}
            alt="Sweet Dish 1"
            className="img-fluid"
          />
          <h4>Sweet Dish 1</h4>
        </Col>

        <Col md={4}>
          <img
            src="path_to_sweet_dish_image_2.jpg"  {/* Replace with the actual path to your sweet dish image */}
            alt="Sweet Dish 2"
            className="img-fluid"
          />
          <h4>Sweet Dish 2</h4>
        </Col>

        <Col md={4}>
          <img
            src="path_to_sweet_dish_image_3.jpg"  {/* Replace with the actual path to your sweet dish image */}
            alt="Sweet Dish 3"
            className="img-fluid"
          />
          <h4>Sweet Dish 3</h4>
        </Col>
      </Row>

      {/* Second row of offerings */}
      <Row>
        <Col md={4}>
          <img
            src="path_to_sweet_dish_image_4.jpg"  {/* Replace with the actual path to your sweet dish image */}
            alt="Sweet Dish 4"
            className="img-fluid"
          />
          <h4>Sweet Dish 4</h4>
          <p>$10.99</p>
          <Button variant="primary">Order Now</Button>
        </Col>

        <Col md={4}>
          <img
            src="path_to_sweet_dish_image_5.jpg"  {/* Replace with the actual path to your sweet dish image */}
            alt="Sweet Dish 5"
            className="img-fluid"
          />
          <h4>Sweet Dish 5</h4>
          <p>$12.99</p>
          <Button variant="primary">Order Now</Button>
        </Col>

        <Col md={4}>
          <img
            src="path_to_sweet_dish_image_6.jpg"  {/* Replace with the actual path to your sweet dish image */}
            alt="Sweet Dish 6"
            className="img-fluid"
          />
          <h4>Sweet Dish 6</h4>
          <p>$8.99</p>
          <Button variant="primary">Order Now</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Offerings;

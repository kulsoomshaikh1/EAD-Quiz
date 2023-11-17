// Welcome.js
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Welcome = () => {
  return (
    <Container style={{ marginTop: '20px' }}>
      <Row>
        {/* Description on the left side */}
        <Col md={6} style={{ textAlign: 'left', padding: '20px' }}>
          <h2>Welcome to [Your Bakery Name]</h2>
          <p>
            Indulge your senses in the irresistible aroma of freshly baked delights. 
            At [Your Bakery Name], we take pride in offering a wide range of delectable treats 
            crafted with passion and the finest ingredients. From mouth-watering pastries to 
            custom cakes, every bite is a celebration of flavor.
          </p>
        </Col>

        {/* Picture of the bakery on the right side */}
        <Col md={6} style={{ padding: '20px' }}>
          <img
            src="bakery.jpg"  {/* Replace with the actual path to your bakery image */}
            alt="Bakery Interior"
            style={{ width: '100%', height: 'auto' }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Welcome;

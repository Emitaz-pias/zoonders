import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const HeaderBottom = () => {
  return (
    <Container>
      <Row className="flex-column-reverse flex-lg-row">
        <Col sm={12}>
          <h2 className="headerBottom">A pet Community Around the World.</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default HeaderBottom;

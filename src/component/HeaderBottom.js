import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const HeaderBottom = () => {
  return (
    <Container className="headerBottom" style={{ marginTop: "-0.2rem" }}>
      <Row className="mt-1 headerBottom">
        <Col md={12}>
          <h2 className="discover">The Future Starts Today !</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default HeaderBottom;

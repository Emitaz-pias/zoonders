import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const HeaderBottom = () => {
  return (
    <div className="headerBottom">
      <Container>
        <Row className="mt-1 headerBottom">
          <Col md={12}>
            <h2 className="discover">The Future Starts Today !</h2>
          </Col>
        </Row>
      </Container>
    </div>
    
  );
};

export default HeaderBottom;

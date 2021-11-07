import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../Image/Logo-Final.png";

const HomeHeader = () => {
  return (
    <div className="img-fluid bgImgHeader pb-5">
      <Container>
        <Row>
          <Col sm={12}>
            <img
              src={logo}
              className="img-fluid"
              alt=""
              style={{ maxWidth: "200px", height: "125px", marginTop: "30px" }}
            />
          </Col>
        </Row>
        <Row>
          <Col sm={12} className="txt mt-5">
            <h2>
              Think Of Zonnders As The Facebook Of The Pet World. It is a Free
              Social Network Platforms Designed To Connect Local Pet Owners Into
              A Community.
            </h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeHeader;

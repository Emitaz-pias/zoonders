import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../Image/Logo-Final.png";
import kuttaBilai from "../Image/kuttaBilai.jfif";

const HomeHeader = () => {
  return (
    <div className="relativeContainer bg-white">
      <img className="topBannerImg" src={kuttaBilai} alt="topBannerImg" />
      <Row className="logoImage">
        <Col sm={12}>
          <img
            src={logo}
            className="img-fluid"
            alt=""
            style={{ maxWidth: "200px", height: "125px", marginTop: "30px" }}
          />
        </Col>
      </Row>
      <Row className="topBannerText">
        <Col sm={12} className="headerTxt mt-5">
          <h2>
            Think of Zonnders as The Facebook Of The Pet World. It is a Free
            Social Network Platforms designed to connect Local Pet Owners into a
            community.
          </h2>
        </Col>
      </Row>
    </div>
  );
};

export default HomeHeader;

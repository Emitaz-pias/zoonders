import React from "react";
import { Col, Row } from "react-bootstrap";
import logo from "../Image/Logo-Final.png";
import kuttaBilai from "../Image/kuttaBilai.jfif";

const HomeHeader = () => {
  return (
    <div className="relativeContainer bg-white">
      <Row className="logoImage flex-column-reverse flex-lg-col ms-5    text-xl-start text-lg-start text-md-center text-xs-center text-sm-center">
        <Col sm={12}>
          <img
            src={logo}
            className="img-fluid"
            alt=""
            style={{ maxWidth: "200px", height: "125px", marginTop: "30px" }}
          />
        </Col>
      </Row>
      <Row className="topBannerTex ps-3 flex-column-reverse flex-lg-row d-flex align-items-center ">
        <Col sm={6} className="headerTxt mt-3">
          <h2>
            Zoonders it is a free social network platform designed to connect
            local and World -Wide pet owners into a community.
          </h2>
        </Col>
        <Col sm={6}>
          <img
            className="topBannerImg  img-fluid"
            src={kuttaBilai}
            alt="topBannerImg"
          />
        </Col>
      </Row>
    </div>
  );
};

export default HomeHeader;

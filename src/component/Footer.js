import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div style={{ backgroundColor: "#333333", color: "#eeeeee" }}>
            <Container>
                <Row className="pt-3 pb-3">
                    <Col md={6}>
                        <p className="mb-0 me-auto">© 2021 ZoonDers Inc.</p>
                    </Col>
                    <Col md={6}>
                        <div className="footer-link-edit d-flex justify-content-end">
                            <span style={{ marginRight: "20px" }}><Link to="/privacy-policy">Privacy Policy</Link>-</span>
                            <span style={{ marginRight: "20px" }}><Link to="/terms-&-conditions">Terms & Conditions</Link>-</span>
                            <span><Link style={{ marginRight: "0px" }} to="/about-us">About Us</Link></span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer

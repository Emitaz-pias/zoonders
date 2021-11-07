import React from 'react';
import { Col, Container, Row, Stack } from "react-bootstrap";
import topImg from "../Image/Logo-Final.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'

const FooterTop = () => {
    return (
        <Container>
            <Row className="mb-4 mt-4">
                <Col md={6}>
                    <div className="ftImg">
                        <img className="img-fluid" style={{ width: "200px", height: "135px", float: "left" }} src={topImg} alt="" />
                    </div>
                </Col>
                <Col md={6} className="d-flex justify-content-end align-items-end">
                            <Stack direction="horizontal" gap={4}>
                                <div className="bg-primary iconEdit">
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </div>
                                <div className="bg-info iconEdit">
                                    <FontAwesomeIcon icon={faTwitter} />
                                        </div>
                                <div className="bg-danger iconEdit">
                                    <FontAwesomeIcon icon={faInstagramSquare} />
                                </div>
                            </Stack>
                    
                </Col>
            </Row>
        </Container>
    )
}

export default FooterTop

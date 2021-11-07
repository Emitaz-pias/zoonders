import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Parallax } from 'react-parallax';
import parImg from "../Image/pexels-artem-beliaikin-1485637.jpg";

const Img3D = () => {
    return (
        <Parallax className="bgImg3d img-fluid" bgImage={parImg} strength={200}>
            <Container style={{height:"600px"}} >
                <Row>
                    <Col md={12}>
                        <h1 className="heading3D text-uppercase mt-5">Hey! wait for me. <br /> I'm coming.. <br /> Lets have a walk...</h1>
                    </Col>
                </Row>
            </Container>
        </Parallax>

    )
}

export default Img3D

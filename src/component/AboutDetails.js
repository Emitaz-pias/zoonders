import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const AboutDetails = () => {
    return (
        <div style={{ backgroundColor: "black" }}>
            <Container>
                <Row className="pt-5 pb-4">
                    <Col sm={12} className="headCol">
                        <h1>Our story</h1>
                        <p>
                            The Zoonders story started from a simple need. <br />
                            To provide a better, more improved relationship between pet owners and their pets. <br />
                            Though many pet owners exist, the many challenges that pet owners face when trying to feed, medicate, and groom their pets can make pet ownership tiring. As pets, they also need to socialize and build a community too. <br />
                            All these challenges and then some can make pet lovers and enthusiasts reconsider adopting a furry buddy. <br />
                            Zoonders is a one-stop-all online pet platform (or a pet app, if you wish) for anything and everything you need for your beloved pets, from excellent grooming and medical service with the top pet groomers and veterinarians to a wonderful community of pet owners to help you and your pet build a fantastic society. We are a team of pet owners and veterinarians with love for pets and understand the immeasurable value of companionship that your pets provide.

                        </p>
                        <h1>The Furry love</h1>
                        <p>We believe that there’s nothing as pure and simple as the love your pet can have for you. We also stand by the unbreakable bond between a pet lover and their furry buddy. This is why we exist to provide an exemplary service that makes every aspect of pet ownership and pet care stress-free for pet lovers and pet owners worldwide. <br />
                        At Zoonders, we understand the stress and complexities of searching through hundreds of web pages to find important information that concerns your pets. This is why we built a destination where valuable pet information is combined and easily accessed whenever you need them.</p>
                        <h1>Our mission</h1>
                        <p>Our mission is to provide an unparalleled health and wellness service to pet owners and their pets everywhere in the world through an easily navigable, well-compiled, and designed app.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutDetails

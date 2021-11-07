import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const ConditionsDetails = () => {
    return (
        <div style={{ backgroundColor: "black" }}>
            <Container>
                <Row className="pt-5 pb-4">
                    <Col sm={12} className="headCol">
                        <h1>Terms of Service</h1>
                        <p>We welcome all users of Zoonders to our pet platform.<br />
                        Please note that you are bound by this Terms of Service when you are on any of the Zoonders platforms (app, website, social media platforms) or any other affiliated platforms, either on your mobile phone, tablet, or desktop. This policy may be revised or edited with or without notice.</p>
                        <h1>Privacy Policy</h1>
                        <p>Zoonders may collect certain personally identifiable information from you. You can read our privacy policy on the Zoonders Privacy Policy page. If you don’t agree with any of the information stated clearly on the privacy policy page, please exit our app, social media platforms, or website immediately.</p>
                        <h1>Eligibility</h1>
                        <p>Please note that the Zoonders platforms (website, app, and all our social media platforms) are published for adults above 18 or any legal age in your state, district, or country. No part of our website is for the use of minors below the legal age in your area of residence. By accessing our platforms, it means that you agree that you are at or above the legal age and abide by all the terms and conditions of the Zoonders platform.</p>
                        <h1>Acceptance of Terms of Service</h1>
                        <p>This Terms of Service is a legally binding contract that establishes the rules and regulations required for you to use the Zoonders app, website, and social media platforms.  The agreement also includes our privacy policy and other policies and pages provided to deliver critical information.<br />
                        If you have any questions or inquiries about any of our services or other terms in our terms of service or policies, don't hesitate to get in touch with our contact center. Our customer service representatives are available to you.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ConditionsDetails



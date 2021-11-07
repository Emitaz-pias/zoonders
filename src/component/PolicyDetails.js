import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const PolicyDetails = () => {
    return (
        <div style={{ backgroundColor:"black"}}>
            <Container>
                <Row className="pt-5 pb-4">
                    <Col sm={12} className="headCol">
                        <h1>Privacy Policy</h1>
                        <p>The Zoonders team recognizes this Privacy Policy as an essential aspect of our business because we understand the need to protect our visitor’s and clients’ privacy. This privacy policy is adopted to inform our users of the types of information we collect on our website and app, how it is used, and whether it is disclosed to anyone. <br />
                        We advise our visitors to read this privacy policy and contact us if you have any questions about our privacy policy.</p>
                        <h1>Legal consent</h1>
                        <p>Please note that the information posted on our website and apps is intended for the use of adult pet owners. If you are below the age of 18 or your country, state, or province’s legal age, you require your legal guardian’s acceptance of our terms of service. <br />
                        If they don’t accept the terms of service, please quit this page, our website, and our app (if downloaded).</p>
                        <h1>Effective date</h1>
                        <p>Zoonders reserves the right to add, subtract, change, modify, or remove any part of this privacy policy with or without prior notice. We advise all our users to check this page regularly to keep updated.</p>
                        <h1>Information we collect</h1>
                        <p>Any information you provide to the Zoonders website and app is stored. For example, when you sign in to our website while providing your personal details, location, age, pet type, pet breed, and preferences, whether you sign using Facebook or mail, when you click on user markers, or request for technical support. <br />
                        This information is collected and stored to enhance the website and in-app performances.</p>
                        <h1>How your information is used</h1>
                        <p>Zoonders may disclose your personal data per legislation in respect to this privacy policy. We may also share your data with subsidiaries and affiliates. We may also disclose your data to partners and contractors who may need this data to curate an improved service and experience for you.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default PolicyDetails

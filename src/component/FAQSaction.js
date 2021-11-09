import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const faqsData = [
  {
    id: 1,
    Q: "Are you real?",
    A: "Yes, Zoonders is 100% real. We exist to solve a critical need that helps pet lovers and pets build a more beneficial community. Our founders, employees, and vendors are essential members of the pet community in their own ways. We are a pet platform committed to building meaningful relationships for pet owners and their pets.",
  },
  {
    id: 2,
    Q: "Do you sell pets?",
    A: "Not currently, we don’t. We create a safe place where pet owners and lovers can build a community and get vital information to answer all the pet-related questions they have. We will put up an update if our position on these changes.",
  },
  {
    id: 3,
    Q: "Is it safe to order on your platform?",
    A: "Our platform was created to make everything easier for pet owners and their pets. This means extending our service to our clients’ and users' privacy and security.Zoonders will never sell or market your private information to anyone. Our payment platforms are 100% secure.What methods of payment do you accept?We accept all methods of payment, including credit and debit cards and bank transfers.",
  },
  {
    id: 4,
    Q: "Can I choose the vet?",
    A: "Your pet is your buddy, and you are allowed to make the best choices for your loved one. We have a list of certified and experienced veterinarians on the Zoonders platform for you to pick from. All our vets are carefully screened before they are live.",
  },
];

const FAQSaction = () => {
  const [showAns, setShowAns] = useState(false);
  const dropDwn = (id) => {
    const val = id.toString();
    const select = document.getElementById(val);
    select.classList.toggle("displyBlock");
    setShowAns(!showAns);
  };
  return (
    <div style={{ backgroundColor: "#e9ecef" }}>
      <Container className="pt-4 pb-4">
        <Row>
          <Col sm={12} className="headCol">
            <h1>FAQs</h1>
            {faqsData.map((fs) => (
              <div
                key={fs.id}
                style={{ borderBottom: "1px solid grey", padding: "15px" }}
              >
                <h4 onClick={(e) => dropDwn(fs.id)}>
                  {fs.Q}
                  <span style={{ float: "right" }}>
                    <FontAwesomeIcon icon={faChevronDown} />
                  </span>
                </h4>
                <p id={fs.id} className="displyBlock">
                  {fs.A}
                </p>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FAQSaction;

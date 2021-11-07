import React from "react";
import { Container, Navbar } from "react-bootstrap";
import logo from "../Image/Logo-Final.png";

const NavMenu = () => {
  return (
    <Navbar bg="white" sticky="top" variant="dark">
      <Container>
        <Navbar.Brand>
          <img
            src={logo}
            alt=""
            style={{ maxWidth: "100px", height: "100%" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text style={{ color: "black", fontWeight: "600" }}>
            Go Back :{" "}
            <a
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "600",
              }}
              href="/"
            >
              Home
            </a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavMenu;

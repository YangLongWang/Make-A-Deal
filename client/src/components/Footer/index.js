import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    // <footer className="footer">
    //   <div className="">
    //     <h4>Thanks for Trading with us!</h4>
    //     &copy;{new Date().getFullYear()}
    //   </div>
    // </footer>
    <Container className="mt-5">
      <Row>
        <Col className="text-center" md={{ span: 6, offset: 3 }}>
          <h5>Thanks for Trading with us!</h5>
          &copy;{new Date().getFullYear()}
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;

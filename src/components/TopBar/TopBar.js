import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./TopBar.css";


export default function TopBar() {
  

  return (
    <Container className="py-1">
      <Row>
        <Col lg={3} xs={4}>
          <div className="circle-media">
            <p className="text-center">
              <i class="fab fa-twitter "></i>
            </p>
          </div>
          <div className=" circle-media">
            <p className="text-center">
              <i class="fa fa-linkedin " aria-hidden="true"></i>
            </p>
          </div>
          <div className=" circle-media">
            <p className="text-center">
              <i class="fab fa-instagram "></i>
            </p>
          </div>
        </Col>
        <Col lg={9} xs={8} className="my-auto">
          <p className={`w-100 text-end text-light`} style={{fontSize:"10px"}}>Dar Al Khayam General Trading LLC | Office : <a href="tell:+97142501090" className="text-decoration-none">+971 42 50 10 90</a></p>
        </Col>
      </Row>
     
    </Container>
  );
}

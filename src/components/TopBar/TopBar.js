import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./TopBar.css";


export default function TopBar() {
  

  return (
    <Container className="py-1">
      <Row>
        <Col lg={3} xs={4}>
        <div className="circle-media">
                      <a className="text-center text-dark ms-1" target="_blank" href="https://twitter.com/DaralKhayam" rel="noreferrer">
                        <i class="fab fa-twitter "></i>
                      </a>
                    </div>
                    <div className=" circle-media">
                      <a className="text-center text-dark ms-1" target="_blank" href="https://www.linkedin.com/in/dar-al-khayam-llc-b6538124b/" rel="noreferrer">
                        <i class="fa fa-linkedin " aria-hidden="true"></i>
                      </a>
                    </div>
                    <div className=" circle-media">
                      <a className="text-center text-dark ms-1" target="_blank" href="https://www.instagram.com/daralkhayamllc/" rel="noreferrer">
                        <i class="fab fa-instagram "></i>
                      </a>
                    </div>
        </Col>
        <Col lg={9} xs={8} className="my-auto">
          <p className={`w-100 text-end text-light`} style={{fontSize:"10px"}}>Dar Al Khayam General Trading LLC | Office : <a href="tel:+97142501090" className="text-decoration-none">+971 42 50 10 90</a></p>
        </Col>
      </Row>
     
    </Container>
  );
}

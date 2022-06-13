import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import eDevice from "./../../resources/serviceItems/electronicDevices.png";
import food from "./../../resources/serviceItems/food.png";
import industrialMachines from "./../../resources/serviceItems/industrialLogo.png";
export default function SectionCapabilities() {
  return (
    <Container className="pt-5">
      <Row>
        <Col lg={6}>
          <h1>Our Capabilities</h1>
          <p>
            We are always aiming to exceed customer expectations and provide
            creative solutions to meet any kind of demand. Keeping up with the
            emerging trends, market needs and combining them with our technical
            and creative expertise...
          </p>
        </Col>
        <Col lg={6}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=First slide&bg=373940"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=Second slide&bg=282c34"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=Third slide&bg=20232a"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Container>
        <Row className="justify-content-center col-12">
          <Col  xs={4} >
            <img src={food} alt="Food industry" style={{maxWidth:"80px"}} className="img-fluid" />
            <h1>42,000 <sub className="text-muted" style={{fontSize:"12px"}}>Tons of Food</sub></h1>
            
          </Col>
          <Col  xs={4} >
            <img src={industrialMachines} alt="Food industry" style={{maxWidth:"80px"}} className="img-fluid" />
            <h1>12,000 <sub className="text-muted" style={{fontSize:"12px"}}>Industrial Machinaries</sub></h1>
           
          </Col>
          <Col  xs={4} >
            <img src={eDevice} alt="Food industry" style={{maxWidth:"80px"}} className="img-fluid" />
            <h1>8,000 <sub className="text-muted" style={{fontSize:"12px"}}>Electronic Categories</sub></h1>
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

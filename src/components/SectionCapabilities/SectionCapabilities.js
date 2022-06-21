import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import eDevice from "./../../resources/serviceItems/electronicDevices.png";
import food from "./../../resources/serviceItems/food.png";
import industrialMachines from "./../../resources/serviceItems/industrialLogo.png";
import warehouse from "./../../resources/banners/slides/warehouse.png";
import foodSlide from "./../../resources/banners/slides/food.png";
import lifter from "./../../resources/banners/slides/lifter.png";
export default function SectionCapabilities() {
  return (
    <Container className="pt-5">
      <Row>
        <Col lg={6} className="my-auto">
          <h1 className="mb-5 text-primary">Our Capabilities</h1>
          <p className="pb-3">
            We always aim to exceed customer expectations and provide
            creative solutions to meet any kind of demand. Keeping up with the
            emerging trends, market needs and combining them with our technical
            and creative expertise...
          </p>
        </Col>
        <Col lg={6} >
          <Carousel variant="light">
            <Carousel.Item>
              <img
                className="d-block w-100 img-thumbnail"
                src={warehouse}
                alt="First slide"
              />
              <Carousel.Caption className="bg-dark">
                <h4>Air Conditionairs </h4>
                {/* <p>
                  Our Export / Import services for all types of air conditioners and electronic devices shipping around the world
                </p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-thumbnail"
                src={foodSlide}
                alt="Second slide"
              />

              <Carousel.Caption className="bg-dark">
                <h4>Export / Import Seafood</h4>
                {/* <p>Export and Import of all kind of shrimp all around GCC with safe containers </p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-thumbnail"
                src={lifter}
                alt="Third slide"
              />

              <Carousel.Caption className="bg-dark">
                <h4>Lifters in different Capacities</h4>
                {/* <p>
                  Lifters from world class brands with different capacities available for Import / Export all around the world
                </p> */}
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Container className="text-center pt-5">
        <Row className=" col-12">
          <Col  xs={4} >
          <img src={food} alt="Food industry" style={{maxWidth:"80px"}} className="img-fluid " />
            <h1 className="d-inline">42,000 <sub className="text-muted" style={{fontSize:"12px"}}>Tons of Food</sub></h1>
          </Col>
          <Col  xs={4} >
            <img src={industrialMachines} alt="Industrial machines" style={{maxWidth:"80px"}} className="img-fluid" />
            <h1 className="d-inline">78,000 <sub className="text-muted" style={{fontSize:"12px"}}>Industrial Machinaries</sub></h1>
           
          </Col>
          <Col  xs={4} >
            <img src={eDevice} alt="electronic devices" style={{maxWidth:"80px"}} className="img-fluid" />
            <h1 className="d-inline">8,000 <sub className="text-muted" style={{fontSize:"12px"}}>Electronic Categories</sub></h1>
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

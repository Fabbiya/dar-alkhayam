import React from "react";
import "./SectionMain.css";
import { Col, Container, Row, Button } from "react-bootstrap";
import ServiceItem from "./ServiceItem/ServiceItem";
import eDevice from "./../../resources/serviceItems/electronicDevices.png";
import food from "./../../resources/serviceItems/food.png";
import industrialMachines from "./../../resources/serviceItems/industrialLogo.png";
import bg from "./../../resources/banners/topBanner.png";

export default function SectionMain() {
  return (
    <div >
      <div style={{ overflowX: "hidden" , maxWidth:"100vw"}}>
      <img
        src={bg}
        style={{
          position: "absolute",
          left: "0px",
          top: "0px",
          maxHeight: "80vh",
          width: "100%",
          zIndex: "-1",
        }}
        className=" bg"
        alt="main page bg"
      />
      </div>
      <div className="w-100 d-flex justify-content-center">
        <div className=" w-100 ">
          <div className="pb-5 w-100">
            <Container className="text-center h-100 mt-5 w-100">
              <h1 className="title text-light mb-3">
                <b>
                  Leader in International <br /> General Trading
                </b>
              </h1>
              <h4 className="sub-title text-light mt-3">
                Export / Import of all kind of products <br />
                around Gulf Cooperation Council
              </h4>
              <Container className="my-4 mx-auto">
                <Row className="justify-content-center">
                  <Col xxl={2} xl={2} lg={3} md={3} sm={5} xs={5}>
                    <a className="btn btn-primary w-100" href="/about">
                      Learn More...
                    </a>
                  </Col>
                  <Col xxl={3} xl={3} lg={3} md={4} sm={6} xs={6}>
                    <Button variant="outline-light w-100">
                      Get Free Quote
                    </Button>
                  </Col>
                </Row>
              </Container>
              <Container className="mx-auto mt-5" style={{ height: "100px" }}>
                <Row className="justify-content-center align-bottom col-12 ">
                  <Col
                    xxl={1}
                    xl={1}
                    lg={1}
                    md={1}
                    sm={2}
                    xs={2}
                    className=" me-5"
                  >
                    <ServiceItem img={industrialMachines} title="Inductrial Machines" />
                  </Col>
                  <Col
                    xxl={1}
                    xl={1}
                    lg={1}
                    md={1}
                    sm={2}
                    xs={2}
                    className=" me-5"
                  >
                    <ServiceItem img={eDevice} title ="Electronic Goods" />
                  </Col>
                  <Col
                    xxl={1}
                    xl={1}
                    lg={1}
                    md={1}
                    sm={2}
                    xs={2}
                    className=" me-3"
                  >
                    <ServiceItem img={food}  title="Food Industry"/>
                  </Col>
                </Row>
              </Container>
            </Container>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
}

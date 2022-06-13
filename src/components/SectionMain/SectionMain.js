import React from "react";
import Menu from "./../Menu/Menu";
import "./SectionMain.css";
import TopBar from "../TopBar/TopBar";
import { Col, Container, Row, Button } from "react-bootstrap";
import ServiceItem from "./ServiceItem/ServiceItem";
import eDevice from "./../../resources/serviceItems/electronicDevices.png";
import food from "./../../resources/serviceItems/food.png";
import industrialMachines from "./../../resources/serviceItems/industrialLogo.png";
import bg from "./../../resources/banners/topBanner.png";

export default function SectionMain() {
  return (
    <div className=" w-100">
      <img src={bg} className="card-img img-fluid" alt="..." />
      <div className="card-img-overlay py-0">
        <TopBar />
        <hr style={{ margin: "2px" }} className="text-light" />
        <Menu />
        <Container className="text-center h-100 mt-5">
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
              <Col xxl={2} xl={2} lg={3} md={3} sm={4} xs={6}>
                <Button variant="primary w-100 btn-lg">Learn More...</Button>
              </Col>
              <Col xxl={3} xl={3} lg={3} md={4} sm={5} xs={6}>
                <Button variant="outline-light w-100 btn-lg">
                  Get Free Quote
                </Button>
              </Col>
            </Row>
          </Container>
          <Container className="my-4 mx-auto mt-5">
            <Row className="justify-content-center col-12">
              <Col xxl={1} xl={1} lg={1} md={1} sm={1} xs={1} className=" me-5">
                <ServiceItem img={industrialMachines} />
              </Col>
              <Col xxl={1} xl={1} lg={1} md={1} sm={1} xs={1} className=" me-5">
                <ServiceItem img={eDevice} />
              </Col>
              <Col xxl={1} xl={1} lg={1} md={1} sm={1} xs={1}>
                <ServiceItem img={food} />
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    </div>
  );
}

import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import bg from "./../../resources/banners/waterOcean.png";
import person1 from "./../../resources/person1.png";
import person2 from "./../../resources/person2.png";
export default function SectionDifference() {
  return (
    <div
      className="w-100 py-5 my-5"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        minHeight: "70vh",
      }}
    >
      <div>
        <Container>
          <Row className="my-auto">
            <Col lg={4} className="my-auto">
              <h2
                className="text-light "
                style={{ textShadow: "5px 5px 8px #FF1F17", fontSize: "3em" }}
              >
                <b>
                  What Makes <br /> us Diferent?
                </b>
              </h2>
            </Col>
            <Col lg={8}>
              <Container>
                <Row className="py-3">
                  <Col lg={2} className="text-center">
                   <div className="position-relative">
                  
                   <img
                      src={person1}
                      alt="Feedback for dlk"
                      style={{ width: "60px" }}
                    />
                     <span class="badge rounded-pill bg-light text-dark position-absolute bottom-0 start-75 ms-3  translate-middle">
                        Customer
                      </span>
                   </div>
                  </Col>

                  <Col>
                    <Card>
                      <Card.Body>
                        <Card.Text>
                          I would like to say thank you to all your staff. On
                          time shipping and delivery done without any problem. I
                          never recieved any cargo that much easy!
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                <Row className="py-3">
                  <Col>
                    <Card>
                      <Card.Body>
                        <Card.Text>
                          I didn't expect how fast the cargo delivered to the
                          endpoit! I would like to thank you and your team for
                          your fast and reliable service. All goods recieved
                          safely at the end point.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg={2} className="text-center">
                    <div className="position-relative">
                      <img
                        src={person2}
                        alt="Feedback for dlk"
                        style={{ width: "60px" }}
                        className="mx-auto"
                      />
                      <span class="badge rounded-pill bg-light text-dark position-absolute bottom-0 start-75 ms-3  translate-middle">
                        Customer
                      </span>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col className=" col-6 col-lg-4 d-flex align-items-stretch">
                    <Card
                      style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
                      className="my-2 w-100"
                    >
                      <Card.Body className="text-center d-flex flex-column">
                        <i class="fas fa-award text-light  fa-2x my-2"></i>
                        <Card.Text className="text-light ">
                          <small>High Quality Products</small>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col className="col-6 col-lg-4 d-flex align-items-stretch">
                    <Card
                      style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
                      className="my-2 w-100"
                    >
                      <Card.Body className="text-center d-flex flex-column">
                        <i class="fa-solid fa-handshake text-light  fa-2x my-2"></i>
                        <Card.Text className="text-light ">
                          <small>Negotiable & Competitive price</small>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col className=" col-6 col-lg-4 d-flex align-items-stretch">
                    <Card
                      style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
                      className="my-2 w-100"
                    >
                      <Card.Body className="text-center d-flex flex-column">
                        <i class="fa-solid fa-users-gear text-light my-2 fa-2x"></i>
                        <Card.Text className="text-light">
                          <small>Total and Complete industrial solutions</small>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col className="col-6 col-lg-4 d-flex align-items-stretch">
                    <Card
                      style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
                      className="my-2 w-100"
                    >
                      <Card.Body className="text-center d-flex flex-column">
                        <i class="fas fa-upload text-light my-2 fa-2x"></i>
                        <Card.Text className="text-light">
                          <small>Up to date products & information</small>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col className="col-6 col-lg-4 d-flex align-items-stretch">
                    <Card
                      style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
                      className="my-2 w-100"
                    >
                      <Card.Body className="text-center d-flex flex-column">
                        <i class="fa-solid fa-gauge-high text-light my-2 fa-2x"></i>
                        <Card.Text className="text-light">
                          <small>Fast Response</small>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col className="col-6 col-lg-4 d-flex align-items-stretch">
                    <Card
                      style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
                      className="my-2 w-100"
                    >
                      <Card.Body className="text-center d-flex flex-column">
                        <i class="fas fa-truck-loading text-light my-2 fa-2x"></i>
                        <Card.Text className="text-light">
                          <small>Reliable & on time Delivery</small>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

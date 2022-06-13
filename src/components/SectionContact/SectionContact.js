import React from "react";
import { Col, Container, Form, Row, Button, Card } from "react-bootstrap";
import bg from "./../../resources/banners/worldMap.png";

export default function SectionContact() {
  return (
    <div className="w-100">
      <Container fluid className="bg-primary text-light py-3">
        <Container>
          <Row>
            <Col lg={6}>
              <h2>Let's get in touch</h2>
            </Col>
            <Col lg={6}>
            <p>
                  <a href="https://google.com" className="text-light">
                    <i class="fas fa-phone px-2"></i>
                    <b>+971555555</b>
                  </a>
                </p>
                <p>
                  <a href="https://google.com" className="text-light">
                    <i class="fa fa-map-marker px-2" aria-hidden="true"></i>
                    <b>Business Bay, Dubai, UAE</b>
                  </a>
                </p>
            </Col>
          </Row>
        </Container>
      </Container>
      <div className="w-100 py-5" style={{ backgroundImage: `url(${bg})` }}>
        <Container>
          <Row>
            <Col lg={6}>
              <h2 className="text-light">Contact Us</h2>
              <p className="text-light">
                Our professional team always available to answer all of your
                questions. Let’s get intouch!
              </p>
              <Form className="py-4">
                <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder="Enter a title" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control as="textarea" rows={10} placeholder="Message" />
                </Form.Group>

                <Row>
                  <Col>
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
                  <Col className="d-flex justify-content-end">
                    <Button variant="primary text-light" type="submit">
                      Send Message
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
            <Col lg={6}>
            <p className="text-light">
                  Our professional team works to increase productivity and cost
                  effective on the market all around the world
                </p>
                {/* google map */}
                <Card>
                <div
                  class="mapouter"
                  style={{
                    position: "relative",
                    textAlign: "right",
                    height: "400px",
                    width: "100%",
                  }}
                >
                  <div
                    class="gmap_canvas"
                    style={{
                      overflow: "hidden",
                      background: "none!important",
                      height: "400px",
                      width: "100%",
                    }}
                  >
                    <iframe
                      width="100%"
                      height="400"
                      id="gmap_canvas"
                      src="https://maps.google.com/maps?q=25.267740,%2055.301822&t=&z=13&ie=UTF8&iwloc=&output=embed"
                      frameborder="0"
                      scrolling="no"
                      marginheight="0"
                      marginwidth="0"
                    ></iframe>
                    <a href="https://123movies-to.org"></a>
                    <br />
                    <a href="https://www.embedgooglemap.net">
                      embedgooglemap.net
                    </a>
                  </div>
                </div>
                </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

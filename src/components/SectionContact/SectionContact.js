import React from "react";
import { Col, Container, Form, Row, Button, Card } from "react-bootstrap";
import bg from "./../../resources/banners/worldMap.png";


export default function SectionContact() {
  
  return (
    <div className="w-100">
      <Container fluid className="bg-primary text-light py-3">
        <Container>
          <Row>
            <Col lg={6} className="my-auto">
              <h2>Let's get in touch</h2>
            </Col>
            <Col lg={6}>
              <p className="pb-2">
                <a href="tel:+97142501090" className="text-light text-decoration-none ">
                  <i class="fas fa-phone px-2"></i>
                  <b>+971-4250-1090 </b>
                </a>
              </p>
              <p className="pt-2">
                <a
                  href="http://www.makani.ae/q?l=E&m=2896295688"
                  target="_blank"
                  className="text-light text-decoration-none "
                  rel="noreferrer"
                >
                  <i class="fa fa-map-marker px-2" aria-hidden="true"></i>
                  <b>
                    611 22nd Rd, Deira, Al Sabkha, Dubai, United Arab Emirates
                  </b>
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
      <div className="w-100 py-5" style={{ backgroundImage: `url(${bg})` }}>
        <Container>
          <Row>
            <Col lg={6} className="my-2">
              <h2 className="text-light">Contact Us</h2>
              <p className="text-light">
                Our professional team always available to answer all of your
                questions. Let’s get intouch!
              </p>
              <Form className="py-4" action="POST" data-netlify="true">
                <Row>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Control type="text" placeholder="Your Name" name="name"/>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Control type="text" placeholder="Your Surename"  name="surename"/>
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Control type="email" placeholder="Enter your Email" name="email" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="phone"
                    placeholder="Enter your phone number eg. +97155555555"
                    name="email"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder="Enter a subject" name="subject" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control as="textarea" rows={10} placeholder="Message" name="message"/>
                </Form.Group>
                <Form.Group className="mb-3">
                  <div data-netlify-recaptcha="true"></div>
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
                    <Button variant="primary text-light" type="submit" >
                      Send Message
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
            <Col lg={6} className="my-2">
              <p className="text-light">
                Our professional team works to increase productivity and cost
                effective on the market all around the world
              </p>
              {/* google map */}
              <Card className="mt-3">
                <div
                  className="mapouter"
                  style={{
                    position: "relative",
                    textAlign: "right",
                    height: "500px",
                    width: "100%",
                  }}
                >
                  <div
                    class="gmap_canvas"
                    style={{
                      overflow: "hidden",
                      background: "none!important",
                      height: "500px",
                      width: "100%",
                    }}
                  >
                    <iframe
                    title="gmap"
                      width="100%"
                      height="500"
                      id="gmap_canvas"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.081861011471!2d55.299123315449776!3d25.267831535030858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43569bcf9219%3A0x683b423105e4d1bb!2sDar%20Al%20Khayam%20General%20Trading!5e0!3m2!1sen!2s!4v1655449014499!5m2!1sen!2s"
                      frameborder="0"
                      scrolling="no"
                      marginheight="0"
                      marginwidth="0"
                    ></iframe>
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

import React from 'react'
import { Container,Row,Col, Button, Card } from 'react-bootstrap';
import bg from "./../../resources/banners/waterOcean.png";
import person1 from "./../../resources/person1.png";
import person2 from "./../../resources/person2.png";
export default function SectionDifference() {
  return (
    <div className='w-100 py-5 my-5' style={{backgroundImage:`url(${bg})`}}>
        {/* <img src={bg} className="card-img img-fluid" alt="..." /> */}
        <div>
            <Container>
                <Row>
                    <Col lg={4}>
                        <h2 className='text-light' style={{"-webkit-text-stroke":"1px #FF1F17", fontSize:"40px"}}>What Makes <br/> us Diferent?</h2>
                        <p>World class services on all shipping. this is a sample text is a sample textis a sample textis a sample textis a sample textis a sample textis a sample text is a sample text</p>
                        <Button variant="primary w-100">Learn More...</Button>
                    </Col>
                    <Col lg={8}>
                        <Container>
                            <Row className='py-3'>
                                <Col lg={2} className='text-center'>
                                <img src={person1} alt="Feedback for dlk" style={{width:"60px"}}/>
                                <p className='text-center' style={{fontSize:"10px"}}>John Doe | Founder</p>
                                </Col>
                                
                                <Col>
                                <Card>
                                    <Card.Body>
                                        <Card.Text>
                                        I would like to say thank you to all your staff. On time shipping and delivery done without any problem. I never recieved any cargo that much easy! 
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                </Col>
                            </Row>
                            <Row className='py-3'>
                                <Col>
                                <Card>
                                    <Card.Body>
                                        <Card.Text>
                                        I would like to say thank you to all your staff. On time shipping and delivery done without any problem. I never recieved any cargo that much easy! 
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                </Col>
                                <Col lg={2} className='text-center'>
                                
                                <img src={person2} alt="Feedback for dlk"  style={{width:"60px"}} className="mx-auto"/>
                                <p className='text-center' style={{fontSize:"10px"}}>John Doe | Founder</p>
                                
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                <h3 className='text-primary'>Reliable</h3>
                                <p>World class services on all shipping. this is a sample text is a sample textis a sample textis a sample textis a sample textis a sample textis a </p>
                                </Col>
                                <Col>
                                <h3 className='text-primary'>Experienced</h3>
                                <p>World class services on all shipping. this is a sample text is a sample textis a sample textis a sample textis a sample textis a sample textis a </p>
                                </Col>
                                <Col>
                                <h3 className='text-primary'>Trusted</h3>
                                <p>World class services on all shipping. this is a sample text is a sample textis a sample textis a sample textis a sample textis a sample textis a </p>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
  )
}

import React from 'react'
import { Container, Row,Col ,Card,Button} from 'react-bootstrap'
import industrialMachines from "./../../resources/serviceItems/images/IndustrialMachinaries.png";
import electronics from "./../../resources/serviceItems/images/electronics.png";
import food from "./../../resources/serviceItems/images/food.png";
export default function SectionServices() {
  return (
    <Container className="py-5 my-5">
        <Row className="justify-content-center">
            <Col lg={3}>
            <Card>
                <img src={industrialMachines} className="card-img img-fluid" alt='machines'/>
                <div className='card-img-overlay text-center d-flex'>
                    <div className='align-self-center mx-auto'>
                    <h2 className='text-light mt-5'><b>INDUSTRIAL <br/> MACHINARIES</b></h2>
                    <p className='text-light mt-2'>Dar Al Khayam provides import and export services for all types of industial machinaries.</p>
                    <Button variant="outline-light " className='mt-3'>
                  Get Free Quote
                </Button>
                    </div>
                    
                </div>
            </Card>
            </Col>
            <Col lg={3}>
            <Card>
                <img src={electronics} className="card-img img-fluid" alt='machines'/>
                <div className='card-img-overlay text-center d-flex'>
                    <div className='align-self-center mx-auto'>
                    <h2 className='text-light mt-5'><b>Electronics</b></h2>
                    <p className='text-light mt-2'>Electronic devices, laptops, tablets, smartphones, speakers, accessories, bags,...</p>
                    <Button variant="outline-light " className='mt-3'>
                  Get Free Quote
                </Button>
                    </div>
                    
                </div>
            </Card>
            </Col>
            <Col lg={3}>
            <Card>
                <img src={food} className="card-img img-fluid" alt='machines'/>
                <div className='card-img-overlay text-center d-flex'>
                    <div className='align-self-center mx-auto'>
                    <h2 className='text-light mt-5'><b>FOOD SUPPLY</b></h2>
                    <p className='text-light mt-2'>Dar Al Khayam provides import and export of all types of seafoods, beef, in the most heigine way to all countries.</p>
                    <Button variant="outline-light " className='mt-3'>
                  Get Free Quote
                </Button>
                    </div>
                    
                </div>
            </Card>
            </Col>
           
        </Row>
    </Container>
  )
}

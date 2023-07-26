import {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Performance.css'
const Workable = (props) => {

   const [data, setData] = useState([
      ['1', '2', '3', '4', '5', '6'],
      ['1', '2', '3', '4', '5', '6'],
      ['1', '2', '3', '4', '5', '6'],
      ['1', '2', '3', '4', '5', '6'],
      ['1', '2', '3', '4', '5', '6'],
      ['1', '2', '3', '4', '5', '6'],
      ['1', '2', '3', '4', '5', '6'],
      ['1', '2', '3', '4', '5', '6'],
      ['1', '2', '3', '4', '5', '6'],
      ['1', '2', '3', '4', '5', '6'],
   ])

   return(<>
   <Container>
      <Row>
         <Col xs={4} className='dinamic-element wkb-header'>Date</Col>
         <Col className='dinamic-element wkb-header'>BEFORE 6AM</Col>
         <Col className='dinamic-element wkb-header'>12:00</Col>
         <Col className='dinamic-element wkb-header'>15:00</Col>
         <Col className='dinamic-element wkb-header'>17:00</Col>
         <Col className='dinamic-element wkb-header'>19:00</Col>
         <Col className='dinamic-element wkb-header'>DAY END</Col>
      </Row>
      <Row>
         <Col xs={2} className='border-control'> </Col>
         <Col xs={2} className='border-control'>Subtotal</Col>
         <Col className='border-control'>58</Col>
         <Col className='border-control'>55</Col>
         <Col className='border-control'>0</Col>
         <Col className='border-control'>0</Col>
         <Col className='border-control'>0</Col>
         <Col className='border-control'>0</Col>
      </Row>
      <Row>
         <Col xs={2} className='border-control'>Workable</Col>
         <Col xs={2} className='border-control'> 
            <Row>
            <Col className='border-control'>PRETEST</Col>
            </Row>
            <Row>
            <Col className='border-control'>REPAIR</Col>
            </Row>
            <Row>
            <Col className='border-control'>POSTEST</Col>
            </Row>
            <Row>
            <Col className='border-control'>CLOSE</Col>
            </Row>
            <Row>
            <Col className='border-control'>REQUOTE</Col>
            </Row>
            <Row>
            <Col className='border-control'>SLOWLANE</Col>
            </Row>
         </Col>
         <Col className='border-control'> 
         <Row>
            <Col className='border-control'>1</Col>
            <Col className='border-control'>1</Col>
            <Col className='border-control'></Col>
            <Col className='border-control'></Col>
            <Col className='border-control'></Col>
            <Col className='border-control'></Col>
            </Row>
            <Row>
            <Col className='border-control'>41</Col>
            <Col className='border-control'>23</Col>
            <Col className='border-control'></Col>
            <Col className='border-control'></Col>
            <Col className='border-control'></Col>
            <Col className='border-control'></Col>
            </Row>
            <Row>
            <Col className='border-control'>16</Col>
            <Col className='border-control'>33</Col>
            <Col className='border-control'></Col>
            <Col className='border-control'></Col>
            <Col className='border-control'></Col>
            <Col className='border-control'></Col>
            </Row>
            <Row>
            <Col className='border-control'>0</Col>
            <Col className='border-control'>1</Col>
            <Col className='border-control'></Col>
            <Col className='border-control'></Col>
            <Col className='border-control'></Col>
            <Col className='border-control'></Col>
            </Row>
            <Row>
            <Col className='border-control'>0</Col>
            <Col className='border-control'>2</Col>
            <Col className='border-control'></Col>
            <Col className='border-control'></Col>
            <Col className='border-control'></Col>
            <Col className='border-control'></Col>
            </Row>
            <Row>
            <Col className='border-control'>0</Col>
            <Col className='border-control'>0</Col>
            <Col className='border-control'></Col>
            <Col className='border-control'></Col>
            <Col className='border-control'></Col>
            <Col className='border-control'></Col>
            </Row>
         </Col>
      </Row>
   </Container>
   </>)
}

export default Workable
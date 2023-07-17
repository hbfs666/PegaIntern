import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Performance.css'

const Performance = () => {
    return(<>
     <Container>
        <Row className='border-control'>
            <Col xl={5} className='border-control'>PJV</Col>
            <Col xl={1} className='border-control date-font-size bold'>03.07.2023</Col>
            <Col xl={1} className='border-control date-font-size bold'>04.07.2023</Col>
            <Col xl={1} className='border-control date-font-size bold'>05.07.2023</Col>
            <Col xl={1} className='border-control date-font-size bold'>06.07.2023</Col>
            <Col xl={1} className='border-control date-font-size bold'>07.07.2023</Col>
            <Col xl={1} className='border-control date-font-size bold'>08.07.2023</Col>
            <Col xl={1} className='border-control date-font-size bold'>09.07.2023</Col>
        </Row>
        <Row className='border-control bold'>
            <Col xl={5} className='border-controll'>PLAN Overall processed</Col>
            <Col className='border-control'>242</Col>
            <Col className='border-control'></Col>
            <Col className='border-control'>242</Col>
            <Col className='border-control'>242</Col>
            <Col className='border-control'>242</Col>
            <Col className='border-control'></Col>
            <Col className='border-control'></Col>
        </Row>
        <Row className='border-control bold'>
            <Col xl={5} className='border-control'>Real processed</Col>
            <Col className='border-control state-ok'>209</Col>
            <Col className='border-control'></Col>
            <Col className='border-control state-warn'>239</Col>
            <Col className='border-control state-ok'>261</Col>
            <Col className='border-control'></Col>
            <Col className='border-control'></Col>
            <Col className='border-control'></Col>
        </Row>
        <Row className='border-control'>
            <Col xl={5} className='border-control'>Real Output</Col>
            <Col className='border-control'>141</Col>
            <Col className='border-control'></Col>
            <Col className='border-control'>166</Col>
            <Col className='border-control'>156</Col>
            <Col className='border-control'></Col>
            <Col className='border-control'></Col>
            <Col className='border-control'></Col>
        </Row>
        <Row className='border-control'>
            <Col xl={5} className='border-control'>Weekly plan</Col>
            <Col className='border-control bold'>709</Col>
        </Row>
    </Container>
    </>)
}

export default Performance
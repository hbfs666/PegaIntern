import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Performance.css'

const PczPerformance = () => {
    return(<>
    <Container>
        <Row className='border-control'>
            <Col xl={4} className='border-control'>PCZ(target 7,5)</Col>
            <Col className='border-control'>
                <Row className='border-control'>
                    <Col xl={12} className='border-control'>W27</Col>
                </Row>
                <Row>
                    <Col className='border-control date-font-size'>03.07.2023</Col>
                    <Col className='border-control date-font-size'>04.07.2023</Col>
                    <Col className='border-control date-font-size'>05.07.2023</Col>
                    <Col className='border-control date-font-size'>06.07.2023</Col>
                    <Col className='border-control date-font-size'>07.07.2023</Col>
                    <Col className='border-control date-font-size'>08.07.2023</Col>
                    <Col className='border-control date-font-size'>09.07.2023</Col>
                </Row>
            </Col>
        </Row>

        <Row className='border-control'>
            <Col xl={4} className='border-control'>Standard manpower</Col>
            <Col className='border-control'>6</Col>
            <Col className='border-control'></Col>
            <Col className='border-control'>20</Col>
            <Col className='border-control'>20</Col>
            <Col className='border-control'>15</Col>
            <Col className='border-control'></Col>
            <Col className='border-control'></Col>
        </Row>
        <Row className='border-control'>
            <Col xl={4} className='border-control'>Support PJV</Col>
            <Col className='border-control'>1</Col>
            <Col className='border-control'></Col>
            <Col className='border-control'>1</Col>
            <Col className='border-control'>1</Col>
            <Col className='border-control'>1</Col>
            <Col className='border-control'></Col>
            <Col className='border-control'></Col>
        </Row>
        <Row className='border-control'>
            <Col xl={4} className='border-control'>Overtimes (hours)</Col>
            <Col className='border-control'>0,0</Col>
            <Col className='border-control'></Col>
            <Col className='border-control'></Col>
            <Col className='border-control'></Col>
            <Col className='border-control'></Col>
            <Col className='border-control'></Col>
            <Col className='border-control'></Col>
        </Row>
        <Row className='border-control'>
            <Col xl={4} className='border-control'>PLAN Standard time processed</Col>
            <Col className='border-control'>49</Col>
            <Col className='border-control'></Col>
            <Col className='border-control'>154</Col>
            <Col className='border-control'>154</Col>
            <Col className='border-control'>116</Col>
            <Col className='border-control'>0</Col>
            <Col className='border-control'></Col>
        </Row>
        <Row className='border-control'>
            <Col xl={4} className='border-control'>PLAN Overtime output processed</Col>
            <Col className='border-control'>0</Col>
            <Col className='border-control'></Col>
            <Col className='border-control'>0</Col>
            <Col className='border-control'>0</Col>
            <Col className='border-control'>0</Col>
            <Col className='border-control'>0</Col>
            <Col className='border-control'></Col>
        </Row>
        <Row className='border-control'>
            <Col xl={4} className='border-control bold'>PLAN Overall processed</Col>
            <Col className='border-control bold'>49</Col>
            <Col className='border-control\'></Col>
            <Col className='border-control bold'>154</Col>
            <Col className='border-control bold'>154</Col>
            <Col className='border-control bold'>116</Col>
            <Col className='border-control bold'>0</Col>
            <Col className='border-control'></Col>
        </Row>
        <Row className='border-control'>
            <Col xl={4} className='border-control bold'>Real processed</Col>
            <Col className='border-control state-danger state-danger-bg'>35</Col>
            <Col className='border-control'></Col>
            <Col className='border-control state-danger state-danger-bg'>61</Col>
            <Col className='border-control state-danger state-danger-bg'>90</Col>
            <Col className='border-control'></Col>
            <Col className='border-control'></Col>
            <Col className='border-control'></Col>
        </Row>
        <Row className='border-control'>
            <Col xl={4} className='border-control'>Plan Output</Col>
            <Col className='border-control'>33</Col>
            <Col className='border-control'></Col>
            <Col className='border-control'>105</Col>
            <Col className='border-control'>105</Col>
            <Col className='border-control'>79</Col>
            <Col className='border-control'>0</Col>
            <Col className='border-control'></Col>
        </Row>
        <Row className='border-control'>
            <Col xl={4} className='border-control'>Real Output</Col>
            <Col className='border-control state-warn state-warn-bg'>31</Col>
            <Col className='border-control'></Col>
            <Col className='border-control state-danger state-danger-bg'>31</Col>
            <Col className='border-control state-danger state-danger-bg'>64</Col>
            <Col className='border-control'></Col>
            <Col className='border-control'></Col>
            <Col className='border-control'></Col>
        </Row>
        <Row className='border-control'>
            <Col xl={4} className='border-control'>Weekly plan</Col>
            <Col className='border-control bold'>472</Col>
        </Row>
    </Container>
    </>)
}

export default PczPerformance;
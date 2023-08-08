import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Performance.css'
import {useState, useEffect} from 'react';

const Teams = (props) => {
    return(<>
    <Container>
        <Row>
            <Col>
                <Row>
                    <Nav
                        fill variant = 'tabs'
                        className='justify-content-center team-bg'
                        activeKey="/home"
                    >
                        <Nav.Item>
                        <Nav.Link href="/PYRTeam">PYR Team</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link href="PJVTeam">PJV Team</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link href="PCZTeam">PCZ Team</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Row>
                <Row>
                    <Col className='PRR-font-size'>PCZ Team</Col>
                </Row>
            </Col>
        </Row>
    </Container>
    </>)
    
}

export default Teams;
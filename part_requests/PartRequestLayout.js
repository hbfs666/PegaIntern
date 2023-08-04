import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { useLocation } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

const PartRequestLayout = (props) => {
    const location = useLocation();
    return(
    <Container>
        <Row>
            <Col xl ={2}>
                <ListGroup className='menu-font' defaultActiveKey={location.pathname}>
                    <ListGroup.Item action href="/PRR">
                        All
                    </ListGroup.Item>
                    <ListGroup.Item action href="/PYRRequest">
                        PYR Part Request
                    </ListGroup.Item>
                    <ListGroup.Item action href='/PJVRequest'>
                        PJV Part Request
                    </ListGroup.Item>
                    <ListGroup.Item action href='/PCZRequest'>
                        PCZ Part Request
                    </ListGroup.Item>
                    <ListGroup.Item action href='/PYRTeam'>
                        Teams
                    </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col>
            {props.children}
            </Col>
        </Row>
    </Container>
    )
}

export default PartRequestLayout
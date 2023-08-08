import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { useLocation } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

const PartRequestLayout = (props) => {
    const location = useLocation();

    const MenuLocator = () => {
        switch(location.pathname) {
            case "/PYRTeam": return "/PYRTeam"
            case "/PJVTeam": return "/PYRTeam"
            case "/PCZTeam": return "/PYRTeam" 
        }
        return location.pathname;
        
    }

    return(
    <Container>
        <Row>
            <Col xl ={2}>
                <ListGroup className='menu-font' defaultActiveKey={MenuLocator()}>
                    <ListGroup.Item action href="/PRR">
                        <FontAwesomeIcon icon={icon({name: 'list-ul', style:'solid'})}/> All
                    </ListGroup.Item>
                    <ListGroup.Item action href="/PYRRequest">
                        <FontAwesomeIcon icon={icon({name: 'boxes-packing', style:'solid'})}/> &nbsp;PYR Part Request
                    </ListGroup.Item>
                    <ListGroup.Item action href='/PJVRequest'>
                        <FontAwesomeIcon icon={icon({name: 'boxes-packing', style:'solid'})}/> &nbsp;PJV Part Request
                    </ListGroup.Item>
                    <ListGroup.Item action href='/PCZRequest'>
                        <FontAwesomeIcon icon={icon({name: 'boxes-packing', style:'solid'})}/> &nbsp;PCZ Part Request
                    </ListGroup.Item>
                    <ListGroup.Item action href='/PYRTeam'>
                        <FontAwesomeIcon icon={icon({name: 'people-roof', style:'solid'})}/> Teams
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
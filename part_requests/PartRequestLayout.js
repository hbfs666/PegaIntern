import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const PartRequestLayout = (props) => {
    return(<Container>
        <Row>
            <Col xl={1}>
                <DropdownButton
                as={ButtonGroup}
                key={'Menu'}
                id={`dropdown-variants-Primary`}
                variant='primary'
                title={'Menu'}
            >
                <Dropdown.Item eventKey="1" href='/PRR'>All</Dropdown.Item>
                <Dropdown.Item eventKey="2" href='/PYRRequest'>PYR Part Request</Dropdown.Item>
                <Dropdown.Item eventKey="3" href='/PJVRequest'>PJV Part Request</Dropdown.Item>
                <Dropdown.Item eventKey="4" href='/PCZRequest'>PCZ Part Request</Dropdown.Item>
                <Dropdown.Item eventKey="5" href='/PYRTeam'>Teams</Dropdown.Item>

                
            </DropdownButton>
            </Col>
            <Col>
            {props.children}
            </Col>
        </Row>
        </Container>)
}

export default PartRequestLayout
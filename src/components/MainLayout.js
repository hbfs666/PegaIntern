import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

function MainLayout(props) {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/comb"><FontAwesomeIcon icon={icon({name: 'house', style:'solid'})}/> &nbsp;Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/request/pcz">PCZ</Nav.Link>
            <Nav.Link href="/request/pjv">PJV</Nav.Link>
            <Nav.Link href="/request/pyr">PYR</Nav.Link>
            <Nav.Link href="/performance/pcz">Performance PCZ</Nav.Link>
            <Nav.Link href="/">Performance PJV</Nav.Link>
            <Nav.Link href="/Ramp">Ramp</Nav.Link>
            <Nav.Link href="/PRR">PRR</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      

      {props.children}
    </>
  );
}

export default MainLayout;
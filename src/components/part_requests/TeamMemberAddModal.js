import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';


function TeamMemberAddModal(props) {

    const [memberData, setMemberData] = useState({
        name:'',
        last:'',
        workid:'',
        schedule:''
    })

  return (    
    <Modal
    show={true}
    size="lg"
    backdrop="static"
    keyboard={false}
  >
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Add Member</Modal.Title>
        </Modal.Header>

        <Modal.Body>

            <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                Name
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" value = {memberData.name} onChange={(event) => setMemberData({...memberData, name:event.target.value})}/>
                </Col>
            </Form.Group>

            <Form.Group as={Row}  controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                Last Name
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text"  value = {memberData.last} onChange={(event) => setMemberData({...memberData, last:event.target.value})}/>
                </Col>
            </Form.Group>

            <Form.Group as={Row}  controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                WorkID 
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text"  value = {memberData.workid} onChange={(event) => setMemberData({...memberData, workid:event.target.value})}/>
                </Col>
            </Form.Group>

            <Form.Group as={Row}  controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                Schedule
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text"  schedule = {memberData.name} onChange={(event) => setMemberData({...memberData, schedule:event.target.value})}/>
                </Col>
            </Form.Group>

        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleModalClose}>Cancel</Button>
          <Button variant="primary" onClick={() => props.handleModalAddMember(memberData)}>Save</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
}

export default TeamMemberAddModal;
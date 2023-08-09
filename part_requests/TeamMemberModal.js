import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'


function TeamMemberEditModal(props) {

    const [memberData, setMemberData] = useState({
        name:'',
        last:'',
        workid:'',
        schedule:''
    })

    const [editIndex, setEditIndex] = useState(-1)

    const handleSaveButton = () => {
      if (editIndex === -1) {
        // adding member
        props.handleModalAddMember(memberData)

      } else {
        // editing member
        props.handleModalMemberEdition({index:editIndex,memberData:{
          name: memberData.name + " " + memberData.last,
          workid: memberData.workid,
          schedule: memberData.schedule
        }})
      }
      props.handleModalClose()
    }

    useEffect(() => {

        if (props.editMember !== undefined) {
            let name = props.editMember.name.split(" ");
            setMemberData({
                name: name[0],
                last: name[1],
                workid: props.editMember.workid,
                schedule: props.editMember.schedule
            })

            setEditIndex(props.editMember.index)
        }
    },[])

  return (
    <Modal
    show={true}
    size="md"
    backdrop="static"
  >
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title><FontAwesomeIcon icon={icon({name: 'user-plus', style:'solid'})}/> &nbsp; Add Member</Modal.Title>
        </Modal.Header>

        <Modal.Body>

            <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label className='modal-font' column sm="4">
                Name
                </Form.Label>
                <Col sm="8">
                <Form.Control type="text" value = {memberData.name} onChange={(event) => setMemberData({...memberData, name:event.target.value})}/>
                </Col>
            </Form.Group>

            <Form.Group as={Row}  controlId="formPlaintextPassword">
                <Form.Label className='modal-font' column sm="4">
                Last Name
                </Form.Label>
                <Col sm="8">
                <Form.Control type="text"  value = {memberData.last} onChange={(event) => setMemberData({...memberData, last:event.target.value})}/>
                </Col>
            </Form.Group>

            <Form.Group as={Row}  controlId="formPlaintextPassword">
                <Form.Label className='modal-font' column sm="4">
                WorkID 
                </Form.Label>
                <Col sm="8">
                <Form.Control type="text"  value = {memberData.workid} onChange={(event) => setMemberData({...memberData, workid:event.target.value})}/>
                </Col>
            </Form.Group>

            <Form.Group as={Row}  controlId="formPlaintextPassword">
                <Form.Label className='modal-font' column sm="4">
                Schedule
                </Form.Label>
                <Col sm="8">
                <Form.Control type="text"  value = {memberData.schedule} onChange={(event) => setMemberData({...memberData, schedule:event.target.value})}/>
                </Col>
            </Form.Group>

        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleModalClose}>Cancel</Button>
          <Button variant="primary" onClick={handleSaveButton}>Save</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
}

export default TeamMemberEditModal;
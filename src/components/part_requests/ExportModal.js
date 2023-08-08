import {Button, FloatingLabel} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';

/*
    props:
        memberList -> list with object elements
        handleCloseExportModal -> function to close this modal
*/
function ExportModal(props) {

   
    const ListToCSV = () => {
        let csv = "";
        props.memberList.map((item, index) =>{
            for(let key in item) {
                csv = csv + `${item[key]},`
            }
            csv = csv + "\n"
        })  

        return csv;
    }

  return (
    <Modal
    show={true}
    size="lg"
    backdrop="static"
    keyboard={false}
  >
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Export Members (CSV)</Modal.Title>
        </Modal.Header>

        <Modal.Body>

        <FloatingLabel controlId="floatingTextarea2" label="Members.CSV">
            <Form.Control
            as="textarea"
            style={{ height: '400px', width:'700px' }}
            value={ListToCSV()}
            />
        </FloatingLabel>

        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={props.handleCloseExportModal}>Ok</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
}

export default ExportModal;
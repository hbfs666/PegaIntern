import {Button, FloatingLabel} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

/*
    props:
        memberList -> list with object elements
        handleCloseExportModal -> function to close this modal
*/
function ImportModal(props) {

   
    const [cvsData, setCvsData] = useState('')
    
    

    const CSVtoList = (data) =>{
        let members = [];
        let member = data.split("\n")
        member.forEach((item,index)=>{
            let itemx = item.split(",")
            members.push({
                name: itemx[0],
                workid: itemx[1],
                schedule: itemx[2]
            })
        })
        console.log(members,'members')
        return members;
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
            <Modal.Title><FontAwesomeIcon icon={icon({name: 'user-plus', style:'solid'})}/> &nbsp;Import Members (CSV)</Modal.Title>
            </Modal.Header>
            
            <Modal.Body>

            <FloatingLabel controlId="floatingTextarea2" label="Members.CSV">
                <Form.Control
                as="textarea"
                type = "text"
                style={{ height: '400px', width:'700px' }}
                onChange={(event) => setCvsData(event.target.value)}
                />
            </FloatingLabel>

            </Modal.Body>

            <Modal.Footer>
            <Button variant="secondary" onClick={props.handleCloseImportModal}><FontAwesomeIcon icon={icon({name: 'xmark', style:'solid'})}/> &nbsp;Cancel</Button>
            <Button variant="primary" onClick={() => props.handleImportMember(CSVtoList(cvsData))}><FontAwesomeIcon icon={icon({name: 'circle-check', style:'regular'})}/> &nbsp;Submit</Button>
            </Modal.Footer>
        </Modal.Dialog>
        </Modal>
  );
}

export default ImportModal;
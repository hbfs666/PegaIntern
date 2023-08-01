import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Performance.css'
import {useState, useEffect} from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Nav from 'react-bootstrap/Nav';
import  Button  from 'react-bootstrap/Button';

import TeamMemberModal from './TeamMemberModal';
import PartRequestLayout from './PartRequestLayout';

const PJVTeam = (props) => {
    const [option, setOption] = useState('')

    const handleOptionMember = (opt) => {
        setOption(opt)
    }

    const [members,setMembers] = useState([
        {name:'Junior Jimenez', workid:'LL2345274', schedule: '9pm-6pm'},
        {name:'Bert Cheng', workid:'LL2345274', schedule: '9pm-6pm'},
        {name:'Junior Jimenez', workid:'LL2345274', schedule: '9pm-6pm'},
        {name:'Junior Jimenez', workid:'LL2345274', schedule: '9pm-6pm'},
        {name:'Junior Jimenez', workid:'LL2345274', schedule: '9pm-6pm'}
    ])

    const [editMember, setEditMember] = useState({name:'', workid:'', schedule: '', index:0})

    const displayMemberOptions = (data) => {
        switch(option) {
            case 'delete': return (<Button variant='danger' onClick={() => handleMemberDelete(data)}>Delete</Button>)
            case 'edit': return (<Button variant='success' onClick={() => handleModalEditMember(data)}>Edit</Button>)
        }
        return null;
    }

    const handleMemberDelete = (index) => {
        members.splice(index,1)
        setMembers(members)
        setOption('')
    }

    const handleModalClose = () => {
        setOption('')
    }

    const handleModalAddMember = (member) => {
        setMembers([...members, {
            name: member.name+" "+member.last,
            workid:member.workid,
            schedule:member.schedule
        }])
    }

    const handleModalEditMember = (member) => {
        setEditMember({...members[member], index: member})
        setOption('editModal')
    }

    const handleModalMemberEdition = (data) => {
        members[data.index] = {...data.memberData}
        setMembers(members)
    }


    const displayMembers = () => {
        return(
            members.map((member, index) => {
                return(<Row>

                    <Col className='PRR-name-bg1'>{member.name}</Col>
                    <Col className='PRR-name-bg1'>{member.workid}</Col>
                    <Col className='PRR-name-bg1'>{member.schedule}</Col>
                    <Col xl={1} className='PRR-name-bg1'>{displayMemberOptions(index)}</Col>
                </Row>)
            })
        )
    }

    return(<>
    <PartRequestLayout>
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
                    <Col className='PRR-font-size'>PJV Team</Col>
                    
                </Row>
                <Row>
                    <Col>
                        <ToggleButtonGroup type="checkbox" className="mb-2 float-end">
                            <ToggleButton id="tbg-check-1" variant='warning' value={1} onClick={() => handleOptionMember('edit')}>
                                Edit
                            </ToggleButton>
                            <ToggleButton id="tbg-check-2" variant='primary' value={2} onClick={() => handleOptionMember('add')}>
                                Add
                            </ToggleButton>
                            <br />
                            <ToggleButton id="tbg-check-3" variant='danger' value={3} onClick={() => handleOptionMember('Delete')}>
                                Delete
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Col>
                </Row>
                <Row>
                    <Col className=' PRR-bg'>Name & Last Name</Col>
                    <Col className=' PRR-bg'>LL</Col>
                    <Col className=' PRR-bg'>Schedule</Col>
                    <Col xl={1} className='PRR-bg'></Col>
                </Row>

                {displayMembers()}

                <br></br>
                <Row>
                    <Nav
                        fill variant = 'tabs'
                        className='justify-content-center team-bg'
                        activeKey="/home"
                    >
                        <Nav.Item>
                        <Nav.Link href="/PYRTeam">Previous Page</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link href="PJVTeam">12345</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link href="PCZTeam">Next Page</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Row>
            </Col>
        </Row>
        {(option === 'add') ? <TeamMemberModal handleModalClose={handleModalClose} handleModalAddMember={handleModalAddMember}/> : null}
        {(option === 'editModal') ? <TeamMemberModal handleModalClose={handleModalClose} handleModalMemberEdition={handleModalMemberEdition} editMember={editMember}/> : null}
    </PartRequestLayout>
    </>
    )

}

export default PJVTeam;
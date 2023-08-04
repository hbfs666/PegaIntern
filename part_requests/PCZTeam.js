import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Performance.css'
import {useState, useEffect} from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Nav from 'react-bootstrap/Nav';
import  Button  from 'react-bootstrap/Button';

import TeamMemberModal from './TeamMemberModal';
import PartRequestLayout from './PartRequestLayout';

import {useLocation} from "react-router-dom"

const PCZTeam = (props) => {

    /*
        option:
        '' -> nothing means no option has been selected, so no buttons display
        delete -> to enable delete buttons on members
        edit -> to enable edition over one member
    */
    const [option, setOption] = useState('')

    const [page, setPage] = useState(0)

    const [key, setKey] = useState('1')

  

    const handleOptionMember = (opt) => {
        setOption(opt)
    }

    const [members, setMembers] = useState([
        {name:'Junior Jimenez', workid:'LL2345274', schedule: '9pm-6pm'},
        {name:'Bert Cheng', workid:'LL2345274', schedule: '9pm-6pm'},
        {name:'Junior Jimenez', workid:'LL2345274', schedule: '9pm-6pm'},
        {name:'Junior Jimenez', workid:'LL2345274', schedule: '9pm-6pm'},
        {name:'Junior Jimenez', workid:'LL2345274', schedule: '9pm-6pm'},
        {name:'Junior Jimenez', workid:'LL2345274', schedule: '9pm-6pm'},
        {name:'Junior Jimenez', workid:'LL2345274', schedule: '9pm-6pm'},
        {name:'Junior Jimenez', workid:'LL2345274', schedule: '9pm-6pm'},
        {name:'Junior Jimenez', workid:'LL2345274', schedule: '9pm-6pm'},
        {name:'10', workid:'LL2345274', schedule: '9pm-6pm'},
        {name:'11', workid:'LL2345274', schedule: '9pm-6pm'},
        {name:'12', workid:'LL2345274', schedule: '9pm-6pm'},
        {name:'13', workid:'LL2345274', schedule: '9pm-6pm'},
        {name:'14', workid:'LL2345274', schedule: '9pm-6pm'},
        {name:'15', workid:'LL2345274', schedule: '9pm-6pm'},
        {name:'16', workid:'LL2345274', schedule: '9pm-6pm'},
        {name:'17', workid:'LL2345274', schedule: '9pm-6pm'},
        {name:'18', workid:'LL2345274', schedule: '9pm-6pm'},
        {name:'19', workid:'LL2345274', schedule: '9pm-6pm'},
        {name:'20', workid:'LL2345274', schedule: '9pm-6pm'},
        {name:'21', workid:'LL2345274', schedule: '9pm-6pm'},
        {name:'22', workid:'LL2345274', schedule: '9pm-6pm'},
        {name:'23', workid:'LL2345274', schedule: '9pm-6pm'},
        {name:'24', workid:'LL2345274', schedule: '9pm-6pm'},
        {name:'25', workid:'LL2345274', schedule: '9pm-6pm'},
        {name:'26', workid:'LL2345274', schedule: '9pm-6pm'},
        {name:'27', workid:'LL2345274', schedule: '9pm-6pm'},
        {name:'28', workid:'LL2345274', schedule: '9pm-6pm'},
        {name:'29', workid:'LL2345274', schedule: '9pm-6pm'},
        {name:'30', workid:'LL2345274', schedule: '9pm-6pm'},
        {name:'31', workid:'LL2345274', schedule: '9pm-6pm'},
        {name:'32', workid:'LL2345274', schedule: '9pm-6pm'},
        {name:'33', workid:'LL2345274', schedule: '9pm-6pm'},
        {name:'34', workid:'LL2345274', schedule: '9pm-6pm'}
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


    const displayMembers = () => 
        {
            let quantity = page*10;
            let lst = members.slice(quantity,Math.min(quantity+10,members.length))
            return(
                lst.map((member, index) => {
                    return(
                    <Row>
                        <Col className='PRR-name-bg1'>{index+quantity}</Col>
                        <Col className='PRR-name-bg1'>{member.name}</Col>
                        <Col className='PRR-name-bg1'>{member.workid}</Col>
                        <Col className='PRR-name-bg1'>{member.schedule}</Col>
                        <Col xl={1} className='PRR-name-bg1'>{displayMemberOptions(index)}</Col>
                    </Row>)
                })
            )

        }

    const displayPages= () =>
        {
            let num = Math.floor(members.length/10)
            let lst = [...Array(num+1).keys()]
            console.log("num"+num)
            console.log("lst"+lst)
            console.log("page"+page)
            return(
            lst.map((pgnum,index) => {
                return(
                <Nav.Item>
                    <Nav.Link eventKey={pgnum+1} onClick={()=>[setPage(pgnum),setKey(pgnum+1)]}>{pgnum+1}</Nav.Link>
                </Nav.Item>
                )
                
            })
        )
        }

        const location = useLocation();



    return(<>
        
    
    <PartRequestLayout>
        <Row>
            <Nav
            fill variant = 'tabs'
            className='justify-content-center team-bg'
            defaultActiveKey={location.pathname}
            >
            <Nav.Item key = "/PYRTeam">
                <Nav.Link href="/PYRTeam">PYR Team</Nav.Link>
            </Nav.Item>
            <Nav.Item key="/PJVTeam">
                <Nav.Link href="/PJVTeam">PJV Team</Nav.Link>
            </Nav.Item>
            <Nav.Item key="/PCZTeam">
                <Nav.Link href="/PCZTeam">PCZ Team</Nav.Link>
            </Nav.Item>
            </Nav>
            <Col>
                <Row>
                    <Col className='PRR-font-size'>{props.title}</Col>
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

                            <ToggleButton id="tbg-check-3" variant='danger' value={3} onClick={() => handleOptionMember('delete')}>
                                Delete
                            </ToggleButton>

                        </ToggleButtonGroup>
                    </Col>
                </Row>
                <Row>
                    <Col className='PRR-bg'>#</Col>
                    <Col className='PRR-bg'>Name & Last Name</Col>
                    <Col className='PRR-bg'>LL</Col>
                    <Col className='PRR-bg'>Schedule</Col>
                    <Col xl={1} className='PRR-bg'></Col> 
                </Row>
                
                {displayMembers()}
                
                <br></br>
                <Row>
                    <Nav
                        variant = 'pills'
                        className='justify-content-center team-bg'
                        activeKey={key}
                        defaultActiveKey="1">

                        <Nav.Item>
                            <Nav.Link onClick ={()=>[setPage((page-1 < 0) ? 0 : page-1),setKey((page<1)?1:page)]}>Previous Page</Nav.Link>
                        </Nav.Item>

                        {displayPages()}

                        <Nav.Item>
                            <Nav.Link onClick ={()=>[setPage((page+1 > Math.floor(members.length/10)) ? page : page+1), setKey((page+1>Math.floor(members.length/10))? page+1:page+2)]}>Next Page</Nav.Link>
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

export default PCZTeam;
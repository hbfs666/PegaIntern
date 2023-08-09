import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Performance.css'
import {useState, useEffect} from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Nav from 'react-bootstrap/Nav';
import  Button  from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import TeamMemberModal from './TeamMemberModal';
import PartRequestLayout from './PartRequestLayout';

import {useLocation} from "react-router-dom";
import ExportModal from './ExportModal';
import Importmodal from './ImportModal';

// decoration imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'


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

    const deleteList = []

    
    const displayMemberOptions = (data) => {
        switch(option) {
            case 'delete': 
                if (!toggleButtons[0]) {
                    setOption('')
                }
                else{
                    return ( <Form>
                    <Form.Check 
                    type={'checkbox'}
                    id={`default-checkbox`}
                    onClick={(event) => handleMemberDelete(event.target.checked, data)}
                    />
                    </Form>)
                }
            case 'edit': 
                if (!toggleButtons[1]) {
                    setOption('')
                }
                else{
                    return (<Button variant='success' onClick={() => handleModalEditMember(data)}>Edit</Button>)
                }
                }
            return null;
    }

    const handleMemberDelete = (checked,index) => {
        if (checked) {
            // add to delete list
            deleteList.push(index+page*10)
        } else {
            // remove from delete list
            const indx = deleteList.indexOf(index+page*10)
            if (indx>-1){
            deleteList.splice(indx,1)}
        }
    }

    const handleDeleteButton = () => {
        if (option=='delete')
        {return (<Button variant= 'success' onClick={() => finalMemberDelete()}>Confirm Delete <FontAwesomeIcon icon={icon({name: 'check', style:'solid'})}/></Button>)}
        return null
    } 

    const finalMemberDelete = () => {
        deleteList.sort(function(a, b){return b-a})
        deleteList.map((item) => {
            members.splice(item,1)
            setMembers(members)
        })
        handleModalClose()
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

    const handleImportMember = (memberslst) => {
        console.log(memberslst,'lst')
        setMembers([
            ...members,
            ...memberslst
        ])
        handleModalClose()
    } 

    const handleModalEditMember = (member) => {
        setEditMember({...members[member+page*10], index: member+page*10})
        setOption('editModal')
    }

    const handleModalMemberEdition = (data) => {
        members[data.index+page*10] = {...data.memberData}
        setMembers(members)
    }

    const handleCloseExportModal = () => {
        setOption('')
    }

    const handleCloseImportModal = () => {
        setOption('')
    }


    const displayMembers = () => 
        {
            let quantity = page*10;
            let lst = members.slice(quantity,Math.min(quantity+10,members.length))
            console.log(lst,'lst')
            if (lst.length == 0){
                if (members.length!=0){
                    setPage(page-1)
                    setKey(page)
                }
            }
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

        const displayPages = () => {
            const currentPage = page + 1; 
            const num = Math.floor((members.length - 1) / 10);
            const pageNumbers = [...Array(num + 1).keys()];
        
            return pageNumbers.map((pgnum, index) => {
                
                const difference = Math.abs(currentPage - (pgnum + 1));
        
                if (difference < 4) {
                    return (
                        <Nav.Item key={`page-${pgnum}`}>
                            <Nav.Link eventKey={pgnum + 1} onClick={() => [setPage(pgnum), setKey(pgnum + 1)]}>
                                {pgnum + 1}
                            </Nav.Link>
                        </Nav.Item>
                    );
                }

                if (index === 0 || index === pageNumbers.length - 1) {
                    return (
                        <Nav.Item key={`page-${pgnum}`}>
                            <Nav.Link disabled>...</Nav.Link>
                        </Nav.Item>
                    );
                }
        
                return null; 
            });
        };

        const location = useLocation();

    const [toggleButtons, setToggleButtons] = useState([false, false]) 

    function handleToggleButtons(data) {
        toggleButtons[data] = !toggleButtons[data];
        setToggleButtons(toggleButtons)
    }


        

    return(<>
    <PartRequestLayout>
        <Row>
            <Nav
            fill variant = 'tabs'
            className='justify-content-center team-bg'
            defaultActiveKey={location.pathname}
            >
            <Nav.Item key ="/PYRTeam">
                <Nav.Link href="/PYRTeam"> <FontAwesomeIcon icon={icon({name: 'people-group', style:'solid'})}/> PYR Team</Nav.Link>
            </Nav.Item>
            <Nav.Item key="/PJVTeam">
                <Nav.Link href="/PJVTeam"> <FontAwesomeIcon icon={icon({name: 'people-group', style:'solid'})}/> PJV Team</Nav.Link>
            </Nav.Item>
            <Nav.Item key="/PCZTeam">
                <Nav.Link href="/PCZTeam"> <FontAwesomeIcon icon={icon({name: 'people-group', style:'solid'})}/> PCZ Team</Nav.Link>
            </Nav.Item>
            </Nav>
            <Col>
                <Row>
                    <Col className='PRR-font-size'>{props.title}</Col>
                </Row>
                <Row>
                    <Col xl={5}></Col>
                    <Col xl={2}>
                        {handleDeleteButton()}
                    </Col>
                    <Col>
                        <ToggleButtonGroup type="checkbox" className="mb-2 float-end">
                            
                            <ToggleButton id="tbg-check-1" variant='info' value={1} onChange={() => handleOptionMember('export')}>
                                Export <FontAwesomeIcon icon={icon({name: 'file-arrow-down', style:'solid'})}/>
                            </ToggleButton>

                            <ToggleButton id="tbg-check-2" variant='info' value={2} onChange={() => handleOptionMember('import')}>
                                Import <FontAwesomeIcon icon={icon({name: 'file-arrow-up', style:'solid'})}/>
                            </ToggleButton>

                            <ToggleButton id="tbg-check-3" variant='warning' value={3} onChange={() => [handleToggleButtons(1),handleOptionMember('edit')]}>
                                Edit <FontAwesomeIcon icon={icon({name: 'pen-to-square', style:'solid'})}/>
                            </ToggleButton>

                            <ToggleButton id="tbg-check-4" variant='primary' value={4} onChange={() => handleOptionMember('add')}>
                                Add <FontAwesomeIcon icon={icon({name: 'plus', style:'solid'})}/>
                            </ToggleButton>
                            <br />
                            <ToggleButton id="tbg-check-5" variant='danger' value={5} onChange={() => [handleToggleButtons(0),handleOptionMember('delete')]}>
                                Delete <FontAwesomeIcon icon={icon({name: 'minus', style:'solid'})}/>
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
                            <Nav.Link onClick ={()=>[setPage(0),setKey(1)]}><FontAwesomeIcon icon={icon({name: 'backward-fast', style:'solid'})}/> &nbsp;&nbsp;First</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link onClick ={()=>[setPage((page-1 < 0) ? 0 : page-1),setKey((page<1)?1:page)]}><FontAwesomeIcon icon={icon({name: 'angles-left', style:'solid'})}/> Previous Page</Nav.Link>
                        </Nav.Item>

                        {displayPages()}

                        <Nav.Item>
                            <Nav.Link onClick ={
                            ()=>[((option === 'delete')? setOption(''):0), setPage((page+1 > Math.floor((members.length-1)/10)) ? page : page+1), setKey((page+1>Math.floor((members.length-1)/10))? page+1:page+2)]
                            }>Next Page <FontAwesomeIcon icon={icon({name: 'angles-right', style:'solid'})}/></Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link onClick ={()=>[setPage(Math.floor((members.length-1)/10)),setKey(Math.floor((members.length-1)/10+1))]}>Last&nbsp;&nbsp; <FontAwesomeIcon icon={icon({name: 'forward-fast', style:'solid'})}/></Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Row>
            </Col>
        </Row>
        {(option === 'add') ? <TeamMemberModal handleModalClose={handleModalClose} handleModalAddMember={handleModalAddMember}/> : null}
        {(option === 'editModal') ? <TeamMemberModal handleModalClose={handleModalClose} handleModalMemberEdition={handleModalMemberEdition} editMember={editMember} page={page}/> : null}
        {(option === 'export') ? <ExportModal handleCloseExportModal = {handleCloseExportModal} memberList={members}/> : null}
        {(option === 'import') ? <Importmodal handleCloseImportModal = {handleCloseImportModal} handleImportMember={handleImportMember}/> : null}
    </PartRequestLayout>
    </>
    )

}

export default PCZTeam;
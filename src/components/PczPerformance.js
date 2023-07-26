import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Performance.css'
import {useState, useEffect} from 'react'

const PczPerformance = (props) => {
    const [date,setDate] = useState(
        ['1','2','3','4','5','6','7']
    )

    const [totals, setTotals] = useState({})

    useEffect(() => {
        console.log(props)
        fetch("http://192.168.50.239:3001"+props.endpoint).then(async (response) => {
           const fetched = await response.json();
           console.log("response:",fetched)
           totals.plan = 0;
           fetched.map((item, index) => {
            
            // get totals before aveerage is calculated
            totals.plan = totals.plan + item.plan_overall_processed;      
         })
         setDate(fetched)
         setTotals(totals)
     })
        return () => {}
     },[])

    const TableDate = () => {
        return(
            date.map((item, index) => {
                return(
            <Col className='wkb-header border-control'>{item.timestamp}</Col>
           )})
        )
    }

    const TableSM = () => {
        return(
            date.map((item, index) => {
                return(
            <Col className='dinamic-element responsive-font-size border-control'>{item.standard_manpower}</Col>
           )})
        )
    }

    const TableSupport = () => {
        return(
            date.map((item, index) => {
                return(
            <Col className='dinamic-element responsive-font-size border-control'>{item.support_pjv}</Col>
           )})
        )
    }

    const TableOT = () => {
        return(
            date.map((item, index) => {
                return(
            <Col className='dinamic-element responsive-font-size border-control'>{item.overtimes}</Col>
           )})
        )
    }

    const TableSTP = () => {
        return(
            date.map((item, index) => {
                return(
            <Col className='dinamic-element responsive-font-size border-control'>{item.plan_standard_time_processed}</Col>
           )})
        )
    }

    const TableOOP = () => {
        return(
            date.map((item, index) => {
                return(
            <Col className='dinamic-element responsive-font-size border-control'>{item.plan_overtime_output_processed}</Col>
           )})
        )
    }

    const TablePOP = () => {
        return(
            date.map((item, index) => {
                return(
            <Col className='dinamic-element responsive-font-size border-control'>{item.plan_overall_processed}</Col>
           )})
        )
    }

    const TableRP = () => {
       
        return(
            date.map((item, index) => {
                let check = (item.real_processed*100)/item.plan_overall_processed;
                if (isNaN(check)) check = 0;
                console.log("check: "+check+", item: "+item.real_processed)

                let color = '';
                if (check>=100) color='state-ok'
                else if (check<90) color='state-danger'
                else if (check>=90) color='state-warn';
                return(
            <Col className={`dinamic-element responsive-font-size border-control ${color}`}>{item.real_processed}</Col>
           )})
        )
    }

    const TablePO = () => {
        return(
            date.map((item, index) => {
                return(
            <Col className='dinamic-element responsive-font-size border-control'>{item.plan_output}</Col>
           )})
        )
    }

    const TableRO = () => {
        return(
            date.map((item, index) => {
                let check = (item.real_output*100)/item.plan_output;
                if (isNaN(check)) check = 0;
                let color = '';
                if (check>=100) color='state-ok'
                else if (check<90) color='state-danger'
                else if (check>=90) color='state-warn';
                return(
            <Col className={`dinamic-element responsive-font-size border-control ${color}`}>{item.real_output}</Col>
           )})
        )
    }

    const TableWP = () => {
                return(
            <Col className='dinamic-element bold responsive-font-size border-control'>{totals.plan}</Col>
           )
    }
    
    return(<>
    <Container>
        <Row className='dinamic-element header-font-size border-control'>
           <Col xl={3} className='dinamic-element header-font-size border-control'>PCZ (target 7,5)</Col>
           <Col>
                <Row>
                    <Col className='dinamic-element header-font-size border-control'>W27</Col>
                </Row>
                <Row>
                    <TableDate/>
                </Row>
           </Col>  
        </Row>
        <Row>
            <Col xl={3} className='wkb-header border-control'>Standard manpower</Col>
            <TableSM/>
        </Row>
        <Row>
            <Col xl={3} className='wkb-header border-control'>Support PJV</Col>
            <TableSupport/>
        </Row>
        <Row>
            <Col xl={3} className='wkb-header border-control'>Overtimes (hours)</Col>
            <TableOT/>
        </Row>
        <Row>
            <Col xl={3} className='wkb-header border-control'>PLAN Standard time processed</Col>
            <TableSTP/>
        </Row>
        <Row>
            <Col xl={3} className='wkb-header border-control'>PLAN Overtime output processed</Col>
            <TableOOP/>
        </Row>
        <Row className = 'bold'>
            <Col xl={3} className='wkb-header border-control'>PLAN Overall processed</Col>
            <TablePOP/>
        </Row>
        <Row className = 'bold'>
            <Col xl={3} className='wkb-header border-control'>Real processed</Col>
            <TableRP/>
        </Row>
        <Row>
            <Col xl={3} className='wkb-header border-control'>Plan Output</Col>
            <TablePO/>
        </Row>
        <Row>
            <Col xl={3} className='wkb-header border-control'>Real Output</Col>
            <TableRO/>
        </Row>
        <Row>
            <Col xl={3} className='wkb-header border-control'>Weekly plan</Col>
            <TableWP/>
        </Row>
    </Container>
    </>)
}
// const PczPerformance = () => {
//     return(<>
//     <Container>
//         <Row className='border-control'>
//             <Col xl={4} className='border-control'>PCZ(target 7,5)</Col>
//             <Col className='border-control'>
//                 <Row className='border-control'>
//                     <Col xl={12} className='border-control'>W27</Col>
//                 </Row>
//                 <Row>
//                     <Col className='border-control date-font-size'>03.07.2023</Col>
//                     <Col className='border-control date-font-size'>04.07.2023</Col>
//                     <Col className='border-control date-font-size'>05.07.2023</Col>
//                     <Col className='border-control date-font-size'>06.07.2023</Col>
//                     <Col className='border-control date-font-size'>07.07.2023</Col>
//                     <Col className='border-control date-font-size'>08.07.2023</Col>
//                     <Col className='border-control date-font-size'>09.07.2023</Col>
//                 </Row>
//             </Col>
//         </Row>

//         <Row className='border-control'>
//             <Col xl={4} className='border-control'>Standard manpower</Col>
//             <Col className='border-control'>6</Col>
//             <Col className='border-control'></Col>
//             <Col className='border-control'>20</Col>
//             <Col className='border-control'>20</Col>
//             <Col className='border-control'>15</Col>
//             <Col className='border-control'></Col>
//             <Col className='border-control'></Col>
//         </Row>
//         <Row className='border-control'>
//             <Col xl={4} className='border-control'>Support PJV</Col>
//             <Col className='border-control'>1</Col>
//             <Col className='border-control'></Col>
//             <Col className='border-control'>1</Col>
//             <Col className='border-control'>1</Col>
//             <Col className='border-control'>1</Col>
//             <Col className='border-control'></Col>
//             <Col className='border-control'></Col>
//         </Row>
//         <Row className='border-control'>
//             <Col xl={4} className='border-control'>Overtimes (hours)</Col>
//             <Col className='border-control'>0,0</Col>
//             <Col className='border-control'></Col>
//             <Col className='border-control'></Col>
//             <Col className='border-control'></Col>
//             <Col className='border-control'></Col>
//             <Col className='border-control'></Col>
//             <Col className='border-control'></Col>
//         </Row>
//         <Row className='border-control'>
//             <Col xl={4} className='border-control'>PLAN Standard time processed</Col>
//             <Col className='border-control'>49</Col>
//             <Col className='border-control'></Col>
//             <Col className='border-control'>154</Col>
//             <Col className='border-control'>154</Col>
//             <Col className='border-control'>116</Col>
//             <Col className='border-control'>0</Col>
//             <Col className='border-control'></Col>
//         </Row>
//         <Row className='border-control'>
//             <Col xl={4} className='border-control'>PLAN Overtime output processed</Col>
//             <Col className='border-control'>0</Col>
//             <Col className='border-control'></Col>
//             <Col className='border-control'>0</Col>
//             <Col className='border-control'>0</Col>
//             <Col className='border-control'>0</Col>
//             <Col className='border-control'>0</Col>
//             <Col className='border-control'></Col>
//         </Row>
//         <Row className='border-control'>
//             <Col xl={4} className='border-control bold'>PLAN Overall processed</Col>
//             <Col className='border-control bold'>49</Col>
//             <Col className='border-control\'></Col>
//             <Col className='border-control bold'>154</Col>
//             <Col className='border-control bold'>154</Col>
//             <Col className='border-control bold'>116</Col>
//             <Col className='border-control bold'>0</Col>
//             <Col className='border-control'></Col>
//         </Row>
//         <Row className='border-control'>
//             <Col xl={4} className='border-control bold'>Real processed</Col>
//             <Col className='border-control state-danger state-danger-bg'>35</Col>
//             <Col className='border-control'></Col>
//             <Col className='border-control state-danger state-danger-bg'>61</Col>
//             <Col className='border-control state-danger state-danger-bg'>90</Col>
//             <Col className='border-control'></Col>
//             <Col className='border-control'></Col>
//             <Col className='border-control'></Col>
//         </Row>
//         <Row className='border-control'>
//             <Col xl={4} className='border-control'>Plan Output</Col>
//             <Col className='border-control'>33</Col>
//             <Col className='border-control'></Col>
//             <Col className='border-control'>105</Col>
//             <Col className='border-control state-ok'>105</Col>
//             <Col className='border-control'>79</Col>
//             <Col className='border-control'>0</Col>
//             <Col className='border-control'></Col>
//         </Row>
//         <Row className='border-control'>
//             <Col xl={4} className='border-control'>Real Output</Col>
//             <Col className='border-control state-warn state-warn-bg'>31</Col>
//             <Col className='border-control'></Col>
//             <Col className='border-control state-danger state-danger-bg'>31</Col>
//             <Col className='border-control state-danger state-danger-bg'>64</Col>
//             <Col className='border-control'></Col>
//             <Col className='border-control'></Col>
//             <Col className='border-control'></Col>
//         </Row>
//         <Row className='border-control'>
//             <Col xl={4} className='border-control'>Weekly plan</Col>
//             <Col className='border-control bold'>472</Col>
//         </Row>
//     </Container>
//     </>)
// }

export default PczPerformance;
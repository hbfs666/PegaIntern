import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Performance.css'
import {useState, useEffect} from 'react'

// const Performance = () => {

const Performance = (props) => {
    const [date,setDate] = useState(
        ['1','2','3','4','5','6','7']
    )

    const [totals, setTotals] = useState({})

    useEffect(() => {
        console.log(props)
        fetch(process.env.REACT_APP_API+props.endpoint).then(async (response) => {
           const fetched = await response.json();
           console.log("response:",fetched)
           totals.plan = 0;
           fetched.map((item, index) => {
            
            // get totals before aveerage is calculated
            totals.plan = totals.plan + item.real_processed;      
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

    const TableRO = () => {
        return(
            date.map((item, index) => {
                return(
            <Col className='dinamic-element responsive-font-size border-control'>{item.real_output}</Col>
           )})
        )
    }

    const TableWP = () => {
                return(
            <Col className='dinamic-element responsive-font-size bold border-control'>{totals.plan}</Col>
           )
    }
    
    return(<>
    <Container>
        <Row>
            <Col xl={3} className='dinamic-element responsive-font-size border-control'>PJV</Col>
            <TableDate/>
        </Row>
        <Row className='bold'>
            <Col xl={3} className='dinamic-element responsive-font-size border-control'>PLAN Overall processed</Col>
            <TablePOP/>
        </Row>
        <Row className='bold'>
            <Col xl={3} className='dinamic-element responsive-font-size border-control'>Real processed</Col>
            <TableRP/>
        </Row>
        <Row>
            <Col xl={3} className='dinamic-element responsive-font-size border-control'>Real Output</Col>
            <TableRO/>
        </Row>
        <Row>
            <Col xl={3} className='dinamic-element responsive-font-size border-control'>Weekly plan</Col>
            <TableWP/>
        </Row>
    </Container>
    </>)
}


    {/* return(<>
     <Container>
        <Row className='border-control'>
            <Col xl={5} className='border-control'>PJV</Col>
            <Col xl={1} className='border-control date-font-size bold'>03.07.2023</Col>
            <Col xl={1} className='border-control date-font-size bold'>04.07.2023</Col>
            <Col xl={1} className='border-control date-font-size bold'>05.07.2023</Col>
            <Col xl={1} className='border-control date-font-size bold'>06.07.2023</Col>
            <Col xl={1} className='border-control date-font-size bold'>07.07.2023</Col>
            <Col xl={1} className='border-control date-font-size bold'>08.07.2023</Col>
            <Col xl={1} className='border-control date-font-size bold'>09.07.2023</Col>
        </Row>
        <Row className='border-control bold'>
            <Col xl={5} className='border-controll'>PLAN Overall processed</Col>
            <Col className='border-control'>242</Col>
            <Col className='border-control'></Col>
            <Col className='border-control'>242</Col>
            <Col className='border-control'>242</Col>
            <Col className='border-control'>242</Col>
            <Col className='border-control'></Col>
            <Col className='border-control'></Col>
        </Row>
        <Row className='border-control bold'>
            <Col xl={5} className='border-control'>Real processed</Col>
            <Col className='border-control state-ok'>209</Col>
            <Col className='border-control'></Col>
            <Col className='border-control state-warn'>239</Col>
            <Col className='border-control state-ok'>261</Col>
            <Col className='border-control'></Col>
            <Col className='border-control'></Col>
            <Col className='border-control'></Col>
        </Row>
        <Row className='border-control'>
            <Col xl={5} className='border-control'>Real Output</Col>
            <Col className='border-control'>141</Col>
            <Col className='border-control'></Col>
            <Col className='border-control'>166</Col>
            <Col className='border-control'>156</Col>
            <Col className='border-control'></Col>
            <Col className='border-control'></Col>
            <Col className='border-control'></Col>
        </Row>
        <Row className='border-control'>
            <Col xl={5} className='border-control'>Weekly plan</Col>
            <Col className='border-control bold'>709</Col>
        </Row>
    </Container>
    </>)

} */}

export default Performance;
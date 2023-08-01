import {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Performance.css'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import PartRequestLayout from './PartRequestLayout';

const Request = (props) => {

   const [data, setData] = useState([
      ['1', '2', '3', '4', '5'],
      ['1', '2', '3', '4', '5'],
      ['1', '2', '3', '4', '5'],
      ['1', '2', '3', '4', '5'],
      ['1', '2', '3', '4', '5'],
      ['1', '2', '3', '4', '5'],
      ['1', '2', '3', '4', '5'],
      ['1', '2', '3', '4', '5'],
      ['1', '2', '3', '4', '5'],
      ['1', '2', '3', '4', '5'],
   ])

   const [average, setAverage] = useState(
      {}
   )

   const [totals, setTotals] = useState({top_case:0, mlb:0, lcd:0, others:0})

   useEffect(() => {

      //if (props.data != undefined) setData(props.data)
      //if (props.average != undefined) setAverage(props.average)
      console.log(props)
      fetch(process.env.REACT_APP_API+props.endpoint).then(async (response) => {
         const fetched = await response.json();
         console.log("response:",fetched)
         

         average.top_case = 0;
         average.mlb = 0;
         average.lcd = 0;
         average.others = 0;
         fetched.map((item, index) => {
            
            // get totals before aveerage is calculated
            totals.top_case = totals.top_case + item.top_case;
            totals.lcd = totals.lcd + item.lcd;
            totals.mlb = totals.mlb + item.mlb
            totals.others = totals.others +item.others

            // calculate averages
            fetched[index].top_case = Math.floor((item.top_case / (item.top_case + item.lcd +item.mlb + item.others))*100)
            fetched[index].mlb = Math.floor((item.mlb / (item.top_case + item.lcd +item.mlb + item.others))*100)
            fetched[index].lcd = Math.floor((item.lcd / (item.top_case + item.lcd +item.mlb + item.others))*100)
            fetched[index].others = Math.floor((item.others / (item.top_case + item.lcd +item.mlb + item.others))*100)

            // check for NaN values
            if (isNaN(item.top_case)) item.top_case = 0; 
            if (isNaN(item.lcd)) item.lcd = 0;
            if (isNaN(item.mlb)) item.mlb = 0;
            if (isNaN(item.others)) item.others = 0;
            
         })
         setData(fetched)
         average.top_case = Math.round((totals.top_case / (totals.others+totals.lcd+totals.mlb+totals.top_case))*100);
         average.mlb = Math.round((totals.mlb / (totals.others+totals.lcd+totals.mlb+totals.top_case))*100);
         average.lcd = Math.round((totals.lcd / (totals.others+totals.lcd+totals.mlb+totals.top_case))*100);
         average.others = Math.round((totals.top_case / (totals.others+totals.lcd+totals.mlb+totals.top_case))*100);
         console.log("average:",average)
         console.log("totals:",totals)
         setAverage(average)
         setTotals(totals)
   })
      return () => {}
   },[])

   const TableItems = () => {
      return(
         data.map((item, index) => {
            let odd = '';
            if (index % 2 == 0) odd = 'request-background-' + props.title;
            return(
         <Row className={`border-control ${odd}`}>
            <Col className="dinamic-element responsive-font-size" xs={3}>{item.timestamp}</Col>
            <Col xs={2}>{item.top_case}%</Col> 
            <Col xs={2}>{item.mlb}%</Col>
            <Col xs={2}>{item.lcd}%</Col> 
            <Col xs={2}>{item.others}%</Col> 
         </Row>
         )
         })
      )
   }

   const TableAverage = () => {
      return(
         <Row className={`border-control request-background-${props.title} bold`}>
            <Col className='dinamic-element responsive-font-size' xs={3}>Average Longterm</Col>
            <Col xs={2}>{average.top_case}%</Col>
            <Col xs={2}>{average.mlb}%</Col>
            <Col xs={2}>{average.lcd}%</Col>
            <Col xs={2}>{average.others}%</Col>
         </Row>
         )
   }


    return(<>
    <PartRequestLayout>
        <Row>
            <Col>
                <Row className={`dinamic-element header-font-size border-control request-topbg-${props.title}`}>
                <Col xs={3}>{props.title}</Col>
                <Col xs={2}>TopCase%</Col> 
                <Col xs={2}>MLB%</Col> 
                <Col xs={2}>LCD%</Col> 
                <Col xs={2}>Other%</Col> 
                </Row>
                <TableItems/>
                <TableAverage/>
            </Col>
        </Row>
    </PartRequestLayout>
    </>)
}

export default Request;
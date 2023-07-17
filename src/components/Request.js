import {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Performance.css'

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
      ['1','2','3','4','5']
   )

   useEffect(() => {

      if (props.data != undefined) setData(props.data)
      if (props.average != undefined) setAverage(props.average)
      return () => {}
   },[])
   
   
   const TableItems = () => {
      return(
         data.map((item, index) => {
            let odd = '';
            if (index % 2 == 0) odd = 'request-background-' + props.title
            return(
         <Row className={`border-control ${odd}`}>
            <Col>{item[0]}</Col>
            <Col>{item[1]}</Col> 
            <Col>{item[2]}</Col>
            <Col>{item[3]}</Col> 
            <Col>{item[4]}</Col> 
         </Row>
         )
         })
      )
   }

   const TableAverage = () => {
      return(
         <Row className={`border-control request-background-${props.title} bold`}>
            <Col>{average[0]}</Col>
            <Col>{average[1]}</Col>
            <Col>{average[2]}</Col>
            <Col>{average[3]}</Col>
            <Col>{average[4]}</Col>
         </Row>
         )
   }


    return(<>
    <Container>
        <Row className={`border-control request-topbg-${props.title}`}>
           <Col>{props.title}</Col>
           <Col>TopCase %</Col> 
           <Col>MLB %</Col> 
           <Col>LCD %</Col> 
           <Col>Other %</Col> 
        </Row>
        <TableItems/>
        <TableAverage/>
    </Container>
    </>)
}

export default Request;
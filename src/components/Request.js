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
            <Col className="dinamic-element responsive-font-size" xs={3}>{item[0]}</Col>
            <Col xs={2}>{item[1]}</Col> 
            <Col xs={2}>{item[2]}</Col>
            <Col xs={2}>{item[3]}</Col> 
            <Col xs={2}>{item[4]}</Col> 
         </Row>
         )
         })
      )
   }

   const TableAverage = () => {
      return(
         <Row className={`dinamic-element responsive-font-size border-control request-background-${props.title} bold`}>
            <Col xs={3}>{average[0]}</Col>
            <Col xs={2}>{average[1]}</Col>
            <Col xs={2}>{average[2]}</Col>
            <Col xs={2}>{average[3]}</Col>
            <Col xs={2}>{average[4]}</Col>
         </Row>
         )
   }


    return(<>
    <Container>
        <Row className={`dinamic-element responsive-font-size border-control request-topbg-${props.title}`}>
           <Col xs={3}>{props.title}</Col>
           <Col xs={2}>TopCase %</Col> 
           <Col xs={2}>MLB %</Col> 
           <Col xs={2}>LCD %</Col> 
           <Col xs={2}>Other %</Col> 
        </Row>
        <TableItems/>
        <TableAverage/>
    </Container>
    </>)
}

export default Request;
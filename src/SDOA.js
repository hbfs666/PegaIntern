import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Performance.css'
import {useState, useEffect} from 'react';


const SDOA = (props) => {

    const [FY,setFY] = useState([
        
        ['N/A','N/A','4.71%','4.36%','6.05%','6.14%'],
        ['N/A','N/A','0.71%','1.81%','1.46%','1.99%'],
        ['N/A','N/A','2.66%','2.89%','1.57%','1.0%'],
        ['N/A','N/A','0.61%','0.88%','0.88%','0.44%'],
        ['N/A','N/A','2.73%','1.41%','0.77%','0.93%'],
        ['N/A','N/A','0.74%','0.97%','1.24%','1.15%'],
        ['N/A','N/A','1.13%','1.43%','0.96%','0.00%'],
        ['N/A','N/A','0.00%','0.74%','0.47%','0.45%']
    ])

    const [P,setP] = useState([
        
        ['4.40%','7.81%','4.78%','7.56%','5.69%','6.84%'],
        ['2.04%','0.97%','0.96%','1.74%','2.5%','2.64%'],
        ['1.87%','1.25%','1.11%','0.0%','0.0%','0.0%'],
        ['0.98%','0.73%','0.33%','0.70%','0.69%','0.00%'],
        ['0.58%','0.99%','1.84%','0.2%','0.4%','1.17%'],
        ['1.52%','0.97%','1.71%','1.61%','0.00%','1.44%'],
        ['1.45%','0.00%','0.00%','0.00%','0.00%','0.00%'],
        ['1.24%','0.00%','0.44%','0.39%','0.31%','0.66%']
    ])

    const [label,setLabel] = useState([
        'MLB','TOPCASE','LAS','LCD','TOUCH ID','OTHERBOARD','FAN','OTHERS'
    ])

    const [goal,setGoal] = useState([
        '5.7%','2%','2%','1%','2%','2%','2%','2%'
    ])

    const [FYname,setFYname] = useState(['FY22P05','FY23P06','FY23P07','FY23P08','FY23P09','FY23P10'])

    const [weight,setWeight] = useState(['49.1%','18.9%','1.9%','7.5%','11.3%','7.5%','0.0%','3.8%'])

    const [Pname,setPname] = useState(['P09W3','P09W4','P10W1','P10W2','P10W3',"P10W4"])

    const FYtable = () => {
        return (
            FY.map((item, rowIndex) => {
                return (
                    <Row style={{ width: "507.36px" }} className='border-control'>
                        {item.map((value, colIndex) => {
                            if (value === "N/A") {
                                return (
                                    <Col key={colIndex}>
                                        <div className="invisible-circle">
                                            {value}
                                        </div>
                                    </Col>
                                );
                            }
    
                            const goalPercentage = parseFloat(goal[rowIndex]);
                            const itemPercentage = parseFloat(value);
    
                            let circleColor = '';
    
                            if (itemPercentage <= goalPercentage) {
                                circleColor = 'green-circle';
                            } else if (itemPercentage <= goalPercentage * 1.1) {
                                circleColor = 'yellow-circle';
                            } else {
                                circleColor = 'red-circle';
                            }
    
                            return (
                                <Col key={colIndex}>
                                    <div className={`${circleColor}`}>
                                        {value}
                                    </div>
                                </Col>
                            );
                        })}
                    </Row>
                );
            })
        );
    };

    const LabelTable = () =>{
        return(
            label.map((item,index)=>{
            return(
                <Row style = {{width:'120px',height:'34.8px'}}>
                    <Col className='border-control'>{item}</Col>
                </Row>
            )
        })
        )
    }

    const GoalTable = () =>{
        return(
            goal.map((item,index)=>{
            return(
                <Row style = {{width:'65px',height:'34.8px'}}>
                    <Col className='border-control'>{item}</Col>
                </Row>
            )
        })
        )
    }

    const FYnameTable = () =>{
        return(
            FYname.map((item,index)=>{
            return(
                    <Col className='border-control'>{item}</Col>
            )
        })
        )
    }

    const PnameTable = () =>{
        return(
            Pname.map((item,index)=>{
            return(
                    <Col xl='auto' className='border-control'>{item}</Col>
            )
        })
        )
    }

    const WeightTable = () =>{
        return(
            weight.map((item,index)=>{
            return(
                <Row>
                    <Col style={{ height: "34.8px" }} className='border-control'>{item}</Col>
                </Row>
            )
        })
        )
    }

    const Ptable = () => {
        return (
            P.map((item, rowIndex) => {
                return (
                    <Row style={{ width: "449.82px" }} className='border-control'>
                        {item.map((value, colIndex) => {
                            const goalPercentage = parseFloat(goal[rowIndex]); 
                            const itemPercentage = parseFloat(value);
    
                            let circleColor = ''; 
    
                            if (itemPercentage <= goalPercentage) {
                                circleColor = 'green-circle';
                            } else if (itemPercentage <= goalPercentage * 1.1) {
                                circleColor = 'yellow-circle';
                            } else {
                                circleColor = 'red-circle';
                            }
    
                            return (
                                <Col key={colIndex}>
                                    <div className={`${circleColor}`}>
                                        {value}
                                    </div>
                                </Col>
                            );
                        })}
                    </Row>
                );
            })
        );
    };

    return(<>
        <Container fluid>
            <Row>
                <Col>SDOA rate by Commodity</Col>
            </Row>
            <br></br>
            <Row xl='auto'  className='SDOA-text'>
                <Col>
                    <Row className='border-control' style = {{width:'120px',height:'54.16px'}}>
                        <Col>COMMODITY</Col>
                    </Row>
                    <LabelTable/>
                </Col>
                <Col>
                    <Row style = {{width:'65px',height:'54.16px'}}>
                        <Col className='border-control'>GOAL</Col>
                    </Row>
                    <GoalTable/>
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <Row>
                                <Col className='border-control'>6-Period Trend</Col>
                            </Row>
                            <Row>
                                <FYnameTable/>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col ><FYtable/></Col>
                    </Row>
                </Col>
                <Col> 
                    <Row className='border-control' style = {{height:'54.16px'}}>
                        <Col>WEIGHT</Col>
                    </Row>
                    <WeightTable/>  
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <Row>
                                <Col className='border-control' style = {{width:'449.82px'}}>6-Week Trend</Col>
                            </Row>
                            <Row>
                                <PnameTable/>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col><Ptable/></Col>
                    </Row>
                </Col>
                <Col>
                    <Row className='border-control' style = {{height:'27.08px'}}>
                        <Col></Col>
                    </Row>
                    <Row style = {{height:'27.08px'}}> 
                        <Col className='border-control'>6 Week Trend</Col>
                    </Row>
                </Col>
                
            </Row>
        </Container>
    </>)
}

export default SDOA;
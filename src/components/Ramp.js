import {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Performance.css'

const Ramp = (props) => {

    const [week1,setWeek1] = useState([
        ['1','2','3','4','5'],
        ['1','2','3','4','5'],
        ['1','2','3','4','5'],
        ['1','2','3','4','5'],
        ['1','2','3','4','5'],
        ['1','2','3','4','5'],
        ['1','2','3','4','5'],
        ['1','2','3','4','5'],
        ['1','2','3','4','5'],
        ['1','2','3','4','5']
    ])

    const [date,setDate] = useState([
        ['1','2','3','4','5','6'],
        ['1','2','3','4','5','6'],
        ['1','2','3','4','5','6'],
        ['1','2','3','4','5','6'],
        ['1','2','3','4','5','6'],
        ['1','2','3','4','5','6'],
        ['1','2','3','4','5','6'],
        ['1','2','3','4','5','6'],
        ['1','2','3','4','5','6'],
        ['1','2','3','4','5','6'],
        ['1','2','3','4','5','6']
    ])

    const [week2,setWeek2] = useState([
        ['1','2','3'],
        ['1','2','3'],
        ['1','2','3'],
        ['1','2','3'],
        ['1','2','3'],
        ['1','2','3'],
        ['1','2','3'],
        ['1','2','3'],
        ['1','2','3'],
        ['1','2','3']
    ])


    return(<>
    <Container>
        <Row> 
            <Col xl={6} className='dinamic-element ramp-font-size border first-row'> </Col>
            <Col className='dinamic-element ramp-font-size border blue-block'>12%</Col>
            <Col className='dinamic-element ramp-font-size border blue-block'>26%</Col>
            <Col className='dinamic-element ramp-font-size border blue-block'>22%</Col>
            <Col className='dinamic-element ramp-font-size border blue-block'>16%</Col>
            <Col className='dinamic-element ramp-font-size border blue-block'>18%</Col>
            <Col className='dinamic-element ramp-font-size border blue-block'>6%</Col>
            <Col className='dinamic-element ramp-font-size border last'>100%</Col>
            <Col className='dinamic-element ramp-font-size border'> </Col>
            <Col className='dinamic-element ramp-font-size border'> </Col>
        </Row>
        <Row>
            <Col xl={2} className='dinamic-element ramp-font-size border ramp-up'>Ramp Up Simulation</Col>
            <Col className='dinamic-element ramp-font-size border request-background-PJV gray-block'>W13</Col>
            <Col className='dinamic-element ramp-font-size border request-background-PJV gray-block'>W14</Col>
            <Col className='dinamic-element ramp-font-size border request-background-PJV gray-block'>W15</Col>
            <Col className='dinamic-element ramp-font-size border request-background-PJV gray-block'>W16</Col>
            <Col className='dinamic-element ramp-font-size border request-background-PJV gray-block'>W17</Col>
            <Col xl={3}>
                <Row className='request-background-PCZ'>
                    <Col className='dinamic-element ramp-font-size border'>7/24</Col>
                    <Col className='dinamic-element ramp-font-size border'>7/25</Col>                    
                    <Col className='dinamic-element ramp-font-size border'>7/26</Col>
                    <Col className='dinamic-element ramp-font-size border'>7/27</Col>
                    <Col className='dinamic-element ramp-font-size border'>7/28</Col>
                    <Col className='dinamic-element ramp-font-size border'>7/29</Col>
                </Row>
                <Row className='request-background-PCZ'>
                    <Col className='dinamic-element ramp-font-size border'>Mon</Col>
                    <Col className='dinamic-element ramp-font-size border'>Tue</Col>                    
                    <Col className='dinamic-element ramp-font-size border'>Wed</Col>
                    <Col className='dinamic-element ramp-font-size border'>Thu</Col>
                    <Col className='dinamic-element ramp-font-size border'>Fri</Col>
                    <Col className='dinamic-element ramp-font-size border'>Sat</Col>
                </Row>
            </Col>
            <Col className='dinamic-element ramp-font-size border request-background-PJV'>W18</Col>
            <Col className='dinamic-element ramp-font-size border request-topbg-PYR'>W19</Col>
            <Col className='dinamic-element ramp-font-size border request-topbg-PYR'>W20</Col>
        </Row>
        <Row>
            <Col xl={1} className='dinamic-element ramp-font-size border'>Input</Col>
            <Col>
                <Row>
                    <Col xl={2} className='dinamic-element ramp-font-size border rightside-title'>Actual</Col>
                    <Col className='dinamic-element ramp-font-size border request-background-PJV gray-block'>490</Col>
                    <Col className='dinamic-element ramp-font-size border request-background-PJV gray-block'>430</Col>
                    <Col className='dinamic-element ramp-font-size border request-background-PJV gray-block'>789</Col>
                    <Col className='dinamic-element ramp-font-size border request-background-PJV gray-block'>985</Col>
                    <Col className='dinamic-element ramp-font-size border request-background-PJV gray-block'>983</Col>
                    <Col>
                        <Row>
                            <Col className='ramp-font-size border blue-block'>179</Col>
                            <Col className='ramp-font-size border blue-block'>255</Col>
                            <Col className='ramp-font-size border blue-block'>0</Col>
                            <Col className='ramp-font-size border blue-block'>0</Col>
                            <Col className='ramp-font-size border blue-block'>0</Col>
                            <Col className='ramp-font-size border blue-block'>0</Col>
                        </Row>
                    </Col>
                    <Col xl={1} className='dinamic-element ramp-font-size border last'>434</Col>
                    <Col xl={1} className='dinamic-element ramp-font-size border request-topbg-PYR last'>0</Col>
                    <Col xl={1} className='dinamic-element ramp-font-size border request-topbg-PYR last'>0</Col>
                </Row>
            </Col>
        </Row>
        <Row>
            <Col xl={1} className='dinamic-element ramp-font-size border'>Output</Col>
            <Col>
                <Row>
                    <Col xl={2} className='dinamic-element ramp-font-size border rightside-title'>Actual</Col>
                    <Col className='dinamic-element ramp-font-size border request-background-PJV gray-block'>1417</Col>
                    <Col className='dinamic-element ramp-font-size border request-background-PJV gray-block'>1220</Col>
                    <Col className='dinamic-element ramp-font-size border request-background-PJV gray-block'>799</Col>
                    <Col className='dinamic-element ramp-font-size border request-background-PJV gray-block'>1023</Col>
                    <Col className='dinamic-element ramp-font-size border request-background-PJV gray-block'>1033</Col>
                    <Col className='dinamic-element ramp-font-size border blue-block'>181</Col>
                    <Col className='dinamic-element ramp-font-size border blue-block'>0</Col>
                    <Col className='dinamic-element ramp-font-size border blue-block'>0</Col>
                    <Col className='dinamic-element ramp-font-size border blue-block'>0</Col>
                    <Col className='dinamic-element ramp-font-size border blue-block'>0</Col>
                    <Col className='dinamic-element ramp-font-size border blue-block'>0</Col>
                    <Col className='dinamic-element ramp-font-size border last'>181</Col>
                    <Col className='dinamic-element ramp-font-size border request-topbg-PYR last'>0</Col>
                    <Col className='dinamic-element ramp-font-size border request-topbg-PYR last'>0</Col>
                </Row>
                <Row>
                    <Col xl={2} className='dinamic-element ramp-font-size border rightside-title'>PCZ(%)</Col>
                    <Col className='dinamic-element ramp-font-size border request-background-PJV gray-block'>40%</Col>
                    <Col className='dinamic-element ramp-font-size border request-background-PJV gray-block'>46%</Col>
                    <Col className='dinamic-element ramp-font-size border request-background-PJV gray-block'>20%</Col>
                    <Col className='dinamic-element ramp-font-size border request-background-PJV gray-block'>14%</Col>
                    <Col className='dinamic-element ramp-font-size border request-background-PJV gray-block'>20%</Col>
                    <Col className='dinamic-element ramp-font-size border blue-block'>39%</Col>
                    <Col className='dinamic-element ramp-font-size border blue-block'>0</Col>
                    <Col className='dinamic-element ramp-font-size border blue-block'>0</Col>
                    <Col className='dinamic-element ramp-font-size border blue-block'>0</Col>
                    <Col className='dinamic-element ramp-font-size border blue-block'>0</Col>
                    <Col className='dinamic-element ramp-font-size border blue-block'>0</Col>
                    <Col className='dinamic-element ramp-font-size border last'>0</Col>
                    <Col className='dinamic-element ramp-font-size border request-topbg-PYR last'>0</Col>
                    <Col className='dinamic-element ramp-font-size border request-topbg-PYR last'>0</Col>
                </Row>
                <Row>
                    <Col xl={2} className='dinamic-element ramp-font-size border rightside-title'>PJV(%)</Col>
                    <Col className='dinamic-element ramp-font-size border request-background-PJV gray-block'>60%</Col>
                    <Col className='dinamic-element ramp-font-size border request-background-PJV gray-block'>54%</Col>
                    <Col className='dinamic-element ramp-font-size border request-background-PJV gray-block'>80%</Col>
                    <Col className='dinamic-element ramp-font-size border request-background-PJV gray-block'>86%</Col>
                    <Col className='dinamic-element ramp-font-size border request-background-PJV gray-block'>80%</Col>
                    <Col className='dinamic-element ramp-font-size border blue-block'>61%</Col>
                    <Col className='dinamic-element ramp-font-size border blue-block'>0</Col>
                    <Col className='dinamic-element ramp-font-size border blue-block'>0</Col>
                    <Col className='dinamic-element ramp-font-size border blue-block'>0</Col>
                    <Col className='dinamic-element ramp-font-size border blue-block'>0</Col>
                    <Col className='dinamic-element ramp-font-size border blue-block'>0</Col>
                    <Col className='dinamic-element ramp-font-size border last'>0</Col>
                    <Col className='dinamic-element ramp-font-size border request-topbg-PYR last'>0</Col>
                    <Col className='dinamic-element ramp-font-size border request-topbg-PYR last'>0</Col>
                </Row>
            </Col>
        </Row>
        <Row>
            <Col xl={1} className='dinamic-element ramp-font-size border'>WIP</Col>
            <Col>
                <Row>
                    <Col xl={2} className='dinamic-element ramp-font-size border rightside-title'>Total WIP</Col>
                    <Col className='dinamic-element ramp-font-size border request-background-PJV gray-block'>1096</Col>
                    <Col className='dinamic-element ramp-font-size border request-background-PJV gray-block'>306</Col>
                    <Col className='dinamic-element ramp-font-size border request-background-PJV gray-block'>296</Col>
                    <Col className='dinamic-element ramp-font-size border request-background-PJV gray-block'>258</Col>
                    <Col className='dinamic-element ramp-font-size border request-background-PJV gray-block'>208</Col>
                    <Col className='dinamic-element ramp-font-size border blue-block'>206</Col>
                    <Col className='dinamic-element ramp-font-size border blue-block'>0</Col>
                    <Col className='dinamic-element ramp-font-size border blue-block'>0</Col>
                    <Col className='dinamic-element ramp-font-size border blue-block'>0</Col>
                    <Col className='dinamic-element ramp-font-size border blue-block'>0</Col>
                    <Col className='dinamic-element ramp-font-size border blue-block'>0</Col>
                    <Col className='dinamic-element ramp-font-size border last'>0</Col>
                    <Col className='dinamic-element ramp-font-size border request-topbg-PYR last'>0</Col>
                    <Col className='dinamic-element ramp-font-size border request-topbg-PYR last'>0</Col>
                </Row>
                <Row>
                    <Col xl={2} className='dinamic-element ramp-font-size border rightside-title'>Non Workable</Col>
                    <Col className='dinamic-element ramp-font-size border request-background-PJV gray-block'>278</Col>
                    <Col className='dinamic-element ramp-font-size border request-background-PJV gray-block'>195</Col>
                    <Col className='dinamic-element ramp-font-size border request-background-PJV gray-block'>186</Col>
                    <Col className='dinamic-element ramp-font-size border request-background-PJV gray-block'>169</Col>
                    <Col className='dinamic-element ramp-font-size border request-background-PJV gray-block'>150</Col>
                    <Col className='dinamic-element ramp-font-size border blue-block'>128</Col>
                    <Col className='dinamic-element ramp-font-size border blue-block'>0</Col>
                    <Col className='dinamic-element ramp-font-size border blue-block'>0</Col>
                    <Col className='dinamic-element ramp-font-size border blue-block'>0</Col>
                    <Col className='dinamic-element ramp-font-size border blue-block'>0</Col>
                    <Col className='dinamic-element ramp-font-size border blue-block'>0</Col>
                    <Col className='dinamic-element ramp-font-size border last'>0</Col>
                    <Col className='dinamic-element ramp-font-size border request-topbg-PYR last'>0</Col>
                    <Col className='dinamic-element ramp-font-size border request-topbg-PYR last'>0</Col>
                </Row>
                <Row>
                    <Col xl={2} className='dinamic-element ramp-font-size border rightside-title'>Workable</Col>
                    <Col className='dinamic-element ramp-font-size border request-background-PJV gray-block'>818</Col>
                    <Col className='dinamic-element ramp-font-size border request-background-PJV gray-block'>111</Col>
                    <Col className='dinamic-element ramp-font-size border request-background-PJV gray-block'>110</Col>
                    <Col className='dinamic-element ramp-font-size border request-background-PJV gray-block'>89</Col>
                    <Col className='dinamic-element ramp-font-size border request-background-PJV gray-block'>58</Col>
                    <Col className='dinamic-element ramp-font-size border blue-block'>78</Col>
                    <Col className='dinamic-element ramp-font-size border blue-block'>0</Col>
                    <Col className='dinamic-element ramp-font-size border blue-block'>0</Col>
                    <Col className='dinamic-element ramp-font-size border blue-block'>0</Col>
                    <Col className='dinamic-element ramp-font-size border blue-block'>0</Col>
                    <Col className='dinamic-element ramp-font-size border blue-block'>0</Col>
                    <Col className='dinamic-element ramp-font-size border last'>0</Col>
                    <Col className='dinamic-element ramp-font-size border request-topbg-PYR last'>0</Col>
                    <Col className='dinamic-element ramp-font-size border request-topbg-PYR last'>0</Col>
                </Row>
            </Col>
        </Row>
        <Row>
            <Col xs={1} className='dinamic-element ramp-font-size border'>TAT</Col>
            <Col>
                <Row>
                    <Col xl={2} className='dinamic-element ramp-font-size border rightside-title'>SD TAT (1DT)-70%</Col>
                    <Col className='dinamic-element ramp-font-size border request-background-PJV gray-block'>0%</Col>
                    <Col className='dinamic-element ramp-font-size border request-background-PJV gray-block'>23%</Col>
                    <Col className='dinamic-element ramp-font-size border request-background-PJV gray-block'>57%</Col>
                    <Col className='dinamic-element ramp-font-size border request-background-PJV gray-block'>75%</Col>
                    <Col className='dinamic-element ramp-font-size border request-background-PJV gray-block'>70%</Col>
                    <Col className='dinamic-element ramp-font-size border blue-block'>64%</Col>
                    <Col className='dinamic-element ramp-font-size border blue-block'>0</Col>
                    <Col className='dinamic-element ramp-font-size border blue-block'>0</Col>
                    <Col className='dinamic-element ramp-font-size border blue-block'>0</Col>
                    <Col className='dinamic-element ramp-font-size border blue-block'>0</Col>
                    <Col className='dinamic-element ramp-font-size border blue-block'>0</Col>
                    <Col className='dinamic-element ramp-font-size border last'>0</Col>
                    <Col className='dinamic-element ramp-font-size border request-topbg-PYR last'>0</Col>
                    <Col className='dinamic-element ramp-font-size border request-topbg-PYR last'>0</Col>
                </Row>
                <Row>
                    <Col xl={2} className='dinamic-element ramp-font-size border rightside-title'>ND TAT (2DT)-100%</Col>
                    <Col className='dinamic-element ramp-font-size border request-background-PJV gray-block'>0%</Col>
                    <Col className='dinamic-element ramp-font-size border request-background-PJV gray-block'>63%</Col>
                    <Col className='dinamic-element ramp-font-size border request-background-PJV gray-block'>90%</Col>
                    <Col className='dinamic-element ramp-font-size border request-background-PJV gray-block'>95%</Col>
                    <Col className='dinamic-element ramp-font-size border request-background-PJV gray-block'>100%</Col>
                    <Col className='dinamic-element ramp-font-size border blue-block'>0</Col>
                    <Col className='dinamic-element ramp-font-size border blue-block'>0</Col>
                    <Col className='dinamic-element ramp-font-size border blue-block'>0</Col>
                    <Col className='dinamic-element ramp-font-size border blue-block'>0</Col>
                    <Col className='dinamic-element ramp-font-size border blue-block'>0</Col>
                    <Col className='dinamic-element ramp-font-size border blue-block'>0</Col>
                    <Col className='dinamic-element ramp-font-size border last'>0</Col>
                    <Col className='dinamic-element ramp-font-size border request-topbg-PYR last'>0</Col>
                    <Col className='dinamic-element ramp-font-size border request-topbg-PYR last'>0</Col>
                </Row>
            </Col>
        </Row>
    </Container>
    </>)
}

export default Ramp;
import React from 'react'
import { Col, Container, Progress, Row } from 'reactstrap'
import { skill } from '../../assest/images/img'

const Abouthire = () => {
    return (
        <div>
            <Container className='mt-5' >
                <Row className=' align-items-center'>

                    <Col md={8}>
                        <div className="why-content mt-5">
                            <h1 className='fw-bold spread-abt'>Why You Hire Us?
                            </h1>
                            <p>Proin ipsum arcu, lobortis id ullamcorper nec, vehicula eget magna. Sed ut malesuada magna, eget lacinia sapien.
                            </p>


                            {/* first bar */}
                            <div className='d-flex justify-content-between'>
                                <h5 className='fw-bold'>UI/UX Design</h5>
                                <h5 className='fw-bolder ab-num'>85%</h5>

                            </div>
                            <Progress
                                animated
                                className="my-3"
                                color="warning"
                                value={85}
                            />

                            {/* second bar */}
                            <div className='d-flex justify-content-between'>
                                <h5 className='fw-bold'>Web Design</h5>
                                <h5 className='fw-bolder ab-num'>75%</h5>

                            </div>
                            <Progress
                                animated
                                className="my-3"
                                color="warning"
                                value={75}
                            />

                            {/* third bar */}

                            <div className='d-flex justify-content-between'>
                                <h5 className='fw-bold'>HTML/CSS</h5>
                                <h5 className='fw-bolder ab-num'>90%</h5>

                            </div>
                            <Progress
                                animated
                                className="my-3"
                                color="warning"
                                value={90}
                            />

                            {/* four bar */}


                            <div className='d-flex justify-content-between'>
                                <h5 className='fw-bold'>Sketch</h5>
                                <h5 className='fw-bolder ab-num'>65%</h5>

                            </div>
                            <Progress
                                animated
                                className="my-3"
                                color="warning"
                                value={65}
                            />
                        </div>
                    </Col>

                    <Col md={4}>

                        <img className='h-auto w-100' src={skill} alt="" />
                    </Col>


                </Row>
            </Container>

        </div>
    )
}

export default Abouthire

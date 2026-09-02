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
                            <h1 className='fw-bold spread-abt'>Our Expertise
                            </h1>
                            <p>Specialized skills across channels to plan, launch and optimize growth-focused marketing programs for B2B and B2C brands.</p>


                            {/* first bar */}
                            <div className='d-flex justify-content-between'>
                                <h5 className='fw-bold'>SEO & Organic</h5>
                                <h5 className='fw-bolder ab-num'>92%</h5>

                            </div>
                            <Progress
                                animated
                                className="my-3"
                                color="warning"
                                value={92}
                            />

                            {/* second bar */}
                            <div className='d-flex justify-content-between'>
                                <h5 className='fw-bold'>Paid Media & Social</h5>
                                <h5 className='fw-bolder ab-num'>88%</h5>

                            </div>
                            <Progress
                                animated
                                className="my-3"
                                color="warning"
                                value={88}
                            />

                            {/* third bar */}

                            <div className='d-flex justify-content-between'>
                                <h5 className='fw-bold'>Content Marketing</h5>
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
                                <h5 className='fw-bold'>Analytics & CRO</h5>
                                <h5 className='fw-bolder ab-num'>85%</h5>

                            </div>
                            <Progress
                                animated
                                className="my-3"
                                color="warning"
                                value={85}
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

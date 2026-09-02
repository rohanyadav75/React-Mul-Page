import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { award, men2 } from '../../assest/images/img'

const Abouthero = () => {
    return (
        <div>
            <Container >
                <Row className=' align-items-center'>

                    <Col md={6}>

                        <img className='men-2 p-2' src={men2} alt="" />
                    </Col>

                    <Col md={6}>
                        <div className="why-content mt-5">
                            <h1 className='fw-bold spread-abt' >Why Choose Deneb Digital?
                            </h1>
                            <button>Our Services</button>
                            <p>We build measurable marketing programs that combine strategy, creative and data — SEO, paid media, social and content — to help brands acquire customers and grow sustainably. We prioritize clear KPIs, transparent reporting and continuous optimization.
                            </p>
                            <Row>
                                <Col md={4}>
                                    <img className='  w-5' src={award} alt="" />

                                </Col>
                                <Col md={8}>
                                    <h5 className='fw-bolder'>Deneb Digital</h5>
                                    <p>Performance-driven marketing agency</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Abouthero;


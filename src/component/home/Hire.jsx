import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { men2 } from '../../assest/images/img'

const Hire = () => {
    return (
        <div>
            <Container fluid className='mt-5 px-3 shape-service'>
                <Row className='mt-5 p-5 sh-row align-items-center '>

                    <Col md={6}>
                        <img className='men-2 p-2' src={men2} alt="" />
                    </Col>

                    <Col md={6}>
                        <div className="why-content mt-5">
                            <h1 className='fw-bold spread-img-home'>Why Hire Deneb Digital?
                            </h1>
                            <p>We combine creative strategy with measurable execution — search, social, paid and content — to deliver growth. Our team focuses on clear KPIs, continuous optimization and transparent reporting so you see real business results.
                            </p>
                            <button>See Case Studies</button>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Hire;

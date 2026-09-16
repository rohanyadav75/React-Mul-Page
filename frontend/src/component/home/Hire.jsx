import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { men2 } from '../../assest/images/img'

const Hire = () => {
    return (
        <div>
            <Container fluid className='mt-5 px-3 shape-service section-block'>
                <Row className='mt-0 p-4 p-md-5 sh-row align-items-center g-4'>

                    <Col md={6} className="order-1 order-md-1">
                        <img className='men-2 p-2' src={men2} alt="" />
                    </Col>

                    <Col md={6} className="order-2 order-md-2">
                        <div className="why-content mt-0 mt-md-5">
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

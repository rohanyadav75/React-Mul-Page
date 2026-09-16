import React from 'react'
import { AiOutlineThunderbolt, GiPodiumWinner, IoMdHappy, PiNotepadThin,  } from '../../assest/icon/icon'
import { Col, Container, Row } from 'reactstrap'

const Static = () => {
    return (
        <div>
            <Container className='mt-5 pt-5 shape section-block stat-section'>
                <Row className='align-items-center g-5'>
                    <Col lg={6} md={12}>
                        <div className="why-content stat-copy mt-0 mt-md-5">
                            <h1 className='fw-bold stat-heading'>Proven Marketing <span>Results</span></h1>
                            <p>We launch and optimize campaigns that drive meaningful growth — from awareness to conversion. Here are a few metrics that show our impact.</p>
                            <button className="stat-btn">Read More</button>
                        </div>
                    </Col>

                    <Col lg={6} md={12} className='p-3 p-md-5'>
                        <Row className='g-4 stat-grid'>
                            <Col xs={12} sm={6}>
                                <div className="stat-card">
                                    <span className='stat-icon'><PiNotepadThin /></span>
                                    <h3>1,200+</h3>
                                    <p>Campaigns Launched</p>
                                </div>
                            </Col>
                            <Col xs={12} sm={6}>
                                <div className="stat-card">
                                    <span className='stat-icon'><IoMdHappy /></span>
                                    <h3>950+</h3>
                                    <p>Satisfied Clients</p>
                                </div>
                            </Col>
                            <Col xs={12} sm={6}>
                                <div className="stat-card">
                                    <span className='stat-icon'><AiOutlineThunderbolt /></span>
                                    <h3>1M+</h3>
                                    <p>Leads Generated</p>
                                </div>
                            </Col>
                            <Col xs={12} sm={6}>
                                <div className="stat-card">
                                    <span className='stat-icon'><GiPodiumWinner /></span>
                                    <h3>45</h3>
                                    <p>Industry Awards</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Static;

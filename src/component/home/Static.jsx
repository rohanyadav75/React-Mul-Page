import React from 'react'
import { AiOutlineThunderbolt, GiPodiumWinner, IoMdHappy, PiNotepadThin,  } from '../../assest/icon/icon'
import { Col, Container, Row } from 'reactstrap'

const Static = () => {
    return (
        <div>
            <Container className='mt-5 pt-5 shape'>
                <Row className='align-items-center '>
                    <Col md={6}>
                        <div className="why-content mt-5">
                            <h1 className='fw-bold spread-img-home'>Over 500+ Completed work & Still Counting

                            </h1>
                            <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus at orci non risus luctus commodo. Ut nibh tellus, faucibus nec gravida.<br />
                            </p>
                            <button>Read More</button>
                        </div>

                    </Col>

                    <Col md={6} className='p-5 '>

                        <Row>
                            <Col md={6} >
                                <div className="circle-1 text-center bg-light rounded-pill  shadow">
                                    <span className='fs-1  p-2 rounded h-100 w-100'><PiNotepadThin /></span>

                                    <h3 >300+</h3>
                                    <p>Projects Done</p>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="circle-1 text-center bg-light rounded-pill shadow">
                                    <span className='fs-1  p-2 rounded h-100 w-100'><IoMdHappy /></span>

                                    <h3>300+</h3>
                                    <p>Projects Done</p>
                                </div>
                            </Col>
                        </Row>
                        <Row className='mt-3'>
                            <Col md={6}>
                                <div className="circle-1 text-center bg-light shadow rounded-pill">
                                    <span className='fs-1  p-2 rounded h-100 w-100'><AiOutlineThunderbolt /></span>

                                    <h3>300+</h3>
                                    <p>Projects Done</p>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="circle-1 text-center bg-light shadow rounded-pill">
                                    <span className='fs-1  p-2 rounded h-100 w-100'><GiPodiumWinner /></span>
                                    <h3>300+</h3>
                                    <p>Projects Done</p>
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

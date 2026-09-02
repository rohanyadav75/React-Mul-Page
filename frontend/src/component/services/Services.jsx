import React from 'react'
import { Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { analysis, development, formen, launch } from '../../assest/images/img'
import { IoIosAnalytics, CiDesktop, MdRocketLaunch, FaAngleRight } from '../../assest/icon/icon'
import Contact from '../home/Contact'
import { services } from '../../assest/images/img'


const Services = () => {
    return (
        <div>
            <div
                className="background-overlay d-flex align-items-center"
                style={{
                    backgroundImage: `linear-gradient(rgba(8, 15, 30, 0.45), rgba(8, 15, 30, 0.45)), url(${services})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}
            >
                <div className="ser-con px-5">
                    <h1 className='fw-bold'>Our Digital Marketing Services
                    </h1>
                    <p style={{ color: '#feb000' }}>HOME<span className='fs ser-icon'><FaAngleRight /></span>SERVICES</p>

                </div>
            </div>

            <Container fluid>
                <Row>
                    <Col md={12} className='mt-5'>
                        <div className='text-center mt-5 '>
                            <h1 className='fw-bold spread-img-s'>Our Work Flow
                            </h1>
                            <p>From research and strategy to creative execution and optimization — we build measurable marketing programs that drive growth.</p>
                        </div>
                    </Col>
                </Row>

                {/* Service-1 */}
                <div className="ser-pro mt-5 container-fluid">
                    <Row className='container-fluid ser px-5'>
                        <Col md={6}>
                            <img src={analysis} className='h-auto w-100 ' alt="" />
                        </Col>
                        <Col className='d-flex align-items-center' md={6}>
                            <div className='text-center mt-5'>
                                <span className='fs-1 shadow p-2 rounded h-100 w-100'><IoIosAnalytics /></span>
                                <h2 className='fw-bold mt-4'>Strategy & Research
                                </h2>
                                <p>Audience research, competitive analysis, and KPI definition to create a focused marketing strategy that targets high-value customers.</p>
                            </div>
                        </Col>
                    </Row>
                </div>

                {/* Service-2 */}

                <div className="ser-pro  container">
                    <Row className='container-fluid ser px-5'>
                        <Col className='d-flex align-items-center' md={6}>
                            <div className='text-center'>
                                <span className='fs-1 shadow p-2 rounded h-0 w-100'><CiDesktop /></span>
                                <h2 className='fw-bold mt-4'>Campaign Setup & Creative
                                </h2>
                                <p>Landing pages, ad creative, content plans and technical implementations tailored to convert your target audiences across channels.</p>
                            </div>
                        </Col>


                        <Col md={6}>
                            <img src={development} className='h-auto w-100 ' alt="" />
                        </Col>
                    </Row>
                </div>

                {/* Service-3 */}

                <div className="ser-pro  container-fluid">
                    <Row className='container-fluid ser px-5'>
                        <Col md={6}>
                            <img src={launch} className='h-auto w-100 ' alt="" />
                        </Col>
                        <Col className='d-flex align-items-center' md={6}>
                            <div className='text-center mt-5'>
                                <span className='fs-1 shadow p-2 rounded h-0 w-100'><MdRocketLaunch /></span>
                                <h2 className='fw-bold mt-4'>Launch & Optimization
                                </h2>
                                <p>Multivariate testing, bid and budget optimization, and continuous creative refreshes to maximize ROI and lower acquisition costs.</p>
                            </div>
                        </Col>
                    </Row>
                </div>

                {/* Section-4 */}
                <Contact/>
                

            </Container>
        </div>
    )
}

export default Services

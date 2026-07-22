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
                            <h1 className='fw-bold spread-abt' >Why You  Hire Us?
                            </h1>
                            <button >Make it Green</button>
                            <p>Proin ipsum arcu, lobortis id ullamcorper nec, vehicula eget magna. Sed ut malesuada magna, eget lacinia sapien. Nam molestie non ex sit amet ornare. Nunc in pellentesque ipsum, vel vulputate sapien.
                                Suspendisse potenti. Aliquam elementum felis purus, quis vulputate libero semper nec. Morbi tincidunt maximus nisl vel placerat. Curabitur at ligula ac diam elementum hendrerit. Suspendisse nec metus eu est laoreet hendrerit vitae non ipsum. Nam faucibus elementum arcu, eget eleifend tortor.
                            </p>
                            <Row>
                                <Col md={4}>
                                    <img className='  w-5' src={award} alt="" />

                                </Col>
                                <Col md={8}>
                                    <h5 className='fw-bolder'>Deneb Agency</h5>
                                    <p>Proin ipsum arcu,</p>
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


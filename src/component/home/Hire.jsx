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
                            <h1 className='fw-bold spread-img-home'>Why You Hire Us?
                            </h1>
                            <p>Proin ipsum arcu, lobortis id ullamcorper nec, vehicula eget magna. Sed ut malesuada magna, eget lacinia sapien. Nam molestie non ex sit amet ornare. Nunc in pellentesque ipsum, vel vulputate sapien.
                                Suspendisse potenti. Aliquam elementum felis purus, quis vulputate libero semper nec. Morbi tincidunt maximus nisl vel placerat. Curabitur at ligula ac diam elementum hendrerit. Suspendisse nec metus eu est laoreet hendrerit vitae non ipsum. Nam faucibus elementum arcu, eget eleifend tortor.
                            </p>
                            <button>Read More</button>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Hire;

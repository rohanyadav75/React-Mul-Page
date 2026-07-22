import React from 'react'
import { men } from '../../assest/images/img';

import { Col, Container, Row } from 'reactstrap';

const Hero = () => {
    return (
        <div>
            <Container fluid className='shape px-5'>
                <Row className='align-items-center mt-2 p-5'>
                    <Col md={6}>
                        <div className="content">
                            <h1 className='fw-light txt'>We Are Creative</h1>
                            <h1 className='fw-bolder color'>Deneb Agency</h1>
                            <p>Aliquam sollicitudin consequat commodo. Cras bibendum ipsum eu augue egestas laciniaam eu ornare ipsum, quis tristique ligula.</p>
                            <button>Know More</button>
                        </div>
                    </Col>
                    <Col className="mt-5" md={6}>
                        <img className='h-100 w-100' src={men} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Hero;

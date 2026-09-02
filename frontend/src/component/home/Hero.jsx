import React from 'react'
import services from '../../assest/images/Services.png';

import { Col, Container, Row } from 'reactstrap';

const Hero = () => {
    return (
        <div>
            <Container fluid className='shape px-5'>
                <Row className='align-items-center mt-2 p-5'>
                    <Col md={6}>
                        <div className="content">
                            <h1 className='fw-light txt'>Digital Marketing That Grows Your Brand</h1>
                            <h1 className='fw-bolder color'>Deneb Digital</h1>
                            <p>We craft performance-driven strategies — SEO, PPC, social media and content — designed to increase traffic, generate qualified leads, and grow revenue.</p>
                            <button>Learn More</button>
                        </div>
                    </Col>
                    <Col className="mt-5" md={6}>
                        <div
                            className='rounded-4'
                            style={{
                                backgroundImage: `url(${services})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                width: '100%',
                                height: '420px',
                                maxHeight: '100%'
                            }}
                            aria-label="Services illustration"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Hero;

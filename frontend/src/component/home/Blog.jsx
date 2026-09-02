import React from 'react'
import { FaCaretRight } from 'react-icons/fa'
import { Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Container, Row } from 'reactstrap'
import { content, organic, paid } from '.'

const Blog = () => {
    return (
        <div>
            <Container className='mt-5'>
                <h1 className='text-center fw-bold spread-img-home'>Insights & Marketing Tips</h1>
                <Row className='mt-5'>
                    <Col md={4}>
                        <Card className='ab-bl'

                        >
                            <img
                                alt="Organic"
                                src={organic}
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                    How to Improve Organic Traffic in 90 Days
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    November 14, 2024

                                </CardSubtitle>
                                <CardText>
                                    Practical tactics for on-page SEO, content planning, and technical fixes that increase organic visibility.
                                </CardText>
                                <span className='rounded  text-center fs-7 h-100 w-100'><FaCaretRight className='btn-icon' />Read More</span>

                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className='ab-bl'

                        >
                            <img
                                alt="paid"
                                src={paid}
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                    Paid Media: Maximize ROAS with Smart Targeting
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    November 14, 2024

                                </CardSubtitle>
                                <CardText>
                                    Some quick example text to build on the card title and make up the bulk of the card‘s content.
                                </CardText>
                                <span className='rounded  text-center fs-7 h-100 w-100'><FaCaretRight className='btn-icon' />Read More</span>

                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className='ab-bl'

                        >
                            <img
                                alt="content"
                                src={content}
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                    Content Marketing That Converts: From Awareness to Sales
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    November 14, 2024
                                </CardSubtitle>
                                <CardText>
                                    Some quick example text to build on the card title and make up the bulk of the card‘s content.
                                </CardText>
                                <span className='rounded  text-center fs-7 h-100 w-100'><FaCaretRight className='btn-icon' />Read More</span>

                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Blog;

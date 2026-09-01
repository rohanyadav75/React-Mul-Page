import React from 'react'
import { Col, Container, Row, Form, FormGroup, Label, Input } from 'reactstrap'
import { formen } from '../../assest/images/img'

const Contact = () => {
    return (
        <div>
            <Container className='mt-5 pb-5 h-f'>
                <Row className='mt-5 pt-5'>
                    <Col md={6} className='d-flex p-0 align-items-center'>
                        <img className="h-auto w-100 " src={formen} alt="" />
                    </Col>
                    <Col md={6}>
                        <h1 className='text-center fw-bold spread-img-home'>Talk to a Digital Marketing Expert</h1>
                        <p>Share your goals and challenges — we’ll recommend a tailored strategy to acquire customers and scale your business.</p>
                        <Form>
                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="exampleName">
                                            Name
                                        </Label>
                                        <Input
                                            id="exampleName"
                                            name="Name"
                                            placeholder="Enter your name"
                                            type="text"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="exampleEmail">
                                            Email
                                        </Label>
                                        <Input
                                            id="exampleEmail"
                                            name="email"
                                                placeholder="Enter your email"
                                            type="email"
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup>
                                <Label for="examplePhone">
                                    Phone
                                </Label>
                                <Input
                                    id="examplePhone"
                                    name="phone"
                                        placeholder="Enter your phone number"
                                />
                            </FormGroup>
                           
                           

                            <button>
                                Send Message
                            </button>
                        </Form>


                    </Col>
                </Row>


            </Container>
        </div>
    )
}

export default Contact

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
                        <h1 className='text-center fw-bold spread-img-home'>Get In Touch</h1>
                        <p>Some quick example text to build on the card title and make up the bulk of the card‘s content.</p>
                        <Form>
                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="exampleEmail">
                                            Email
                                        </Label>
                                        <Input
                                            id="exampleEmail"
                                            name="email"
                                            placeholder="with a placeholder"
                                            type="email"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="examplePassword">
                                            Password
                                        </Label>
                                        <Input
                                            id="examplePassword"
                                            name="password"
                                            placeholder="password placeholder"
                                            type="password"
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup>
                                <Label for="exampleAddress">
                                    Address
                                </Label>
                                <Input
                                    id="exampleAddress"
                                    name="address"
                                    placeholder="1234 Main St"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleAddress2">
                                    Address 2
                                </Label>
                                <Input
                                    id="exampleAddress2"
                                    name="address2"
                                    placeholder="Apartment, studio, or floor"
                                />
                            </FormGroup>
                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="exampleCity">
                                            City
                                        </Label>
                                        <Input
                                            id="exampleCity"
                                            name="city"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="exampleState">
                                            State
                                        </Label>
                                        <Input
                                            id="exampleState"
                                            name="state"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup>
                                        <Label for="exampleZip">
                                            Zip
                                        </Label>
                                        <Input
                                            id="exampleZip"
                                            name="zip"
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>

                            <button>
                                Submit
                            </button>
                        </Form>


                    </Col>
                </Row>


            </Container>
        </div>
    )
}

export default Contact

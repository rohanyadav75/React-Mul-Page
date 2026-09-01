import React, { useState } from 'react';
import {
    Col,
    Container,
    Row,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

import { formen } from '../../assest/images/img';

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const response = await fetch(
                'http://localhost:3000/api/user',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                }
            );

            const data = await response.json();

            console.log(data);

            if (data.status === 1) {
                setMessage('Your message has been submitted successfully.');

                setFormData({
                    name: '',
                    email: '',
                    phone: ''
                });
            } else {
                setMessage('Something went wrong.');
            }

        } catch (error) {
            console.log(error);
            setMessage('Server error. Please try again.');
        }
    };

    return (
        <div>
            <Container className="mt-5 pb-5 h-f">

                <Row className="mt-5 pt-5">

                    <Col
                        md={6}
                        className="d-flex p-0 align-items-center"
                    >
                        <img
                            className="h-auto w-100"
                            src={formen}
                            alt=""
                        />
                    </Col>

                    <Col md={6}>

                        <h1 className="text-center fw-bold spread-img-home">
                            Talk to a Digital Marketing Expert
                        </h1>

                        <p>
                            Share your goals and challenges — we’ll recommend
                            a tailored strategy to acquire customers and scale
                            your business.
                        </p>

                        <Form onSubmit={handleSubmit}>

                            <Row>

                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="exampleName">
                                            Name
                                        </Label>

                                        <Input
                                            id="exampleName"
                                            name="name"
                                            placeholder="Enter your name"
                                            type="text"
                                            value={formData.name}
                                            onChange={handleChange}
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
                                            value={formData.email}
                                            onChange={handleChange}
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
                                    type="text"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </FormGroup>

                           

                            <button type="submit">
                                Send Message
                            </button>

                            {message && (
                                <p className="mt-3">
                                    {message}
                                </p>
                            )}

                        </Form>

                    </Col>

                </Row>

            </Container>
        </div>
    );
};

export default Contact;


import React, { useState } from "react";

import { Col, Container, Form, FormGroup, Input, Row } from 'reactstrap'
import { FaAngleRight } from "react-icons/fa6";
import contact from '../images/contact.png' 
import './Contact.css'
const Contact = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");


    // Step 2: Handle the input change event
    const handleInputChange = (e) => {
        setFirstName(e.target.value); // Update state with the input value
    };

    const handleInputChangelast = (e) => {
        setLastName(e.target.value); // Update state with the input value
    };

    // Step 1: State to track map visibility
    const [isMapVisible, setIsMapVisible] = useState(false);

    // Step 2: Toggle visibility function
    const toggleMapVisibility = () => {
        setIsMapVisible((prevState) => !prevState);
    };
    return (
        <div>
            <div className="background-overlay d-flex  align-items-center">
                <div className="ser-con px-5">
                    <h1 className='fw-bold'>Contact Us
                    </h1>
                    <p style={{ color: '#feb000' }}>HOME<span className='fs-5 ser-icon'><FaAngleRight /></span> CONTACT</p>

                </div>

            </div>
            <Container >
                <Row>
                    <Col md={12} className='mt-5'>
                        <div className='spread-img mt-5'>
                            <h1 className='fw-bold'>Send a message</h1>
                            <p>When unknow printer took a gallery of type and scramblted it to makea type specimen book</p>
                        </div>
                    </Col>
                    <Col md={12} className='mt-2'>
                        <Form>
                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        {/* Optional: Label for accessibility */}
                                        {/* <Label for="exampleEmail">First Name</Label> */}
                                        <Input
                                            id="exampleEmail"
                                            name="first-name"
                                            placeholder="First Name"
                                            type="email" // Email is fine if you expect an email, else use "text"
                                            className="rounded-pill input"
                                            value={firstName} // Step 3: Bind the state to the input's value
                                            onChange={handleInputChange} // Step 4: Call handler on change
                                        />
                                        {/* Step 5: Display the value (for debugging or real-time updates) */}
                                    </FormGroup>

                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        {/* <Label for="examplePassword">
                                            Password
                                        </Label> */}
                                        <Input
                                            id="examplePassword"
                                            name="last-name"
                                            placeholder="Last name"
                                            type="password"
                                            className='rounded-pill input'
                                            value={lastName}
                                            onChange={handleInputChangelast}

                                        />

                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        {/* <Label for="exampleEmail">
                                            Email
                                        </Label> */}
                                        <Input
                                            id="exampleEmail"
                                            name="email"
                                            placeholder="Email"
                                            type="email"
                                            className='rounded-pill input'

                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        {/* <Label for="examplePassword">
                                            Password
                                        </Label> */}
                                        <Input
                                            id="examplePassword"
                                            name="phone"
                                            placeholder="Phone"
                                            type="password"
                                            className='rounded-pill input'

                                        />
                                    </FormGroup>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        {/* <Label for="exampleCity">
                                            City
                                        </Label> */}
                                        <Input
                                            id="exampleCity"
                                            name="project title"
                                            placeholder='Project'
                                            className='rounded-pill input'

                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <Input
                                        id="exampleSelect"
                                        name="select"
                                        type="select"
                                        className='rounded-pill borde-style-none input'

                                    >
                                        <option>
                                            Choose Service
                                        </option>
                                        <option>
                                            Web & Graphic Design
                                        </option>
                                        <option>
                                            Apps & Web Development
                                        </option>
                                        <option>
                                            SEO  Marketing
                                        </option>

                                    </Input>
                                </Col>

                            </Row>
                            <p>Your  Name is  {firstName} and Sirname is {lastName}</p>

                            <Row className='mt-4'>
                                <textarea className='rounded-'
                                    placeholder='Your Message' style={{ height: '150px' }}></textarea>
                            </Row>
                            <button className='text-light mt-4 rounded-md px-4'>Submit Now</button>
                        </Form>
                    </Col>

                </Row>

            </Container>

            <Container fluid className='p-0 mt-5'>
                <Row>
                    <button onClick={toggleMapVisibility}>
                        {isMapVisible ? "Hide Map" : "Show Map"}
                    </button>
                    {isMapVisible && (
                        <div style={{ marginTop: "20px" }}>
                            <iframe
                                title="Google Maps Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345098975!2d144.96305761532163!3d-37.8136279797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xb0101ec7b888b36a!2s123+React+Street!5e0!3m2!1sen!2sus!4v1234567890"
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    )}
                    {/* <iframe
                        title="Our Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2951212543763!2d144.96305791521143!3d-37.81410787975198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce840!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1600074959397!5m2!1sen!2sus"
                        width="1138"
                        height="350"
                        style={{ border: 0 }}
                        allowFullScreen="true"
                        loading="lazy"
                    ></iframe> */}
                </Row>
            </Container>

        </div>
    )
}

export default Contact



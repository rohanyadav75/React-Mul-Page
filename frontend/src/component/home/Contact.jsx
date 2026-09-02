import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Label, Input } from "reactstrap";
import { formen } from "../../assest/images/img";
import "../../page/Contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setMessage("");

        try {
            const response = await fetch("/api/user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            // Check response before trying to read JSON
            if (!response.ok) {
                throw new Error(`Server error: ${response.status}`);
            }

            const data = await response.json();

            console.log("Server response:", data);

            if (data.status === 1) {
                setMessage(data.message);

                // Clear form after successful submission
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                });
            } else {
                setMessage(data.message || "Data was not saved.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);

            setMessage(
                "Unable to submit the form. Please check your connection and try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="contact-section">
            <Container>
                <Row>
                    <Col md="6">
                        <div className="contact-image">
                            <img src={formen} alt="Contact us" />
                        </div>

                    </Col>

                    <Col md="6">
                        <div className="contact-content">
                            <h2>Let's Connect</h2>

                            <p>
                                Have a question or want to discuss your digital marketing
                                requirements? Fill out the form and our team will get back to
                                you.
                            </p>

                            <Form onSubmit={handleSubmit}>
                                <FormGroup>
                                    <Label for="name">Name</Label>
                                    <Input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Enter your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="phone">Phone</Label>
                                    <Input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        placeholder="Enter your phone number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </FormGroup>

                                <button type="submit" disabled={loading}>
                                    {loading ? "Submitting..." : "Submit"}
                                </button>

                                {message && <p className="mt-3">{message}</p>}
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;

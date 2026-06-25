import React from 'react'
import analysis from '../images/service_1-ZUEv7Wpv.png'
import { IoIosAnalytics } from "react-icons/io";
import { CiDesktop } from "react-icons/ci";
import { FaAngleRight } from "react-icons/fa6";
import { MdRocketLaunch } from "react-icons/md";
import development from '../images/service_2-5PXNrvK4.png'
import formen from '../images/contact-hiQDr1Sx.png'
import launch from '../images/service_3-jHV7r_Pj.png'

import './Service.css'
import {  Col, Container, Form, FormGroup, Input, Label,  Row,  } from 'reactstrap'

const Service = () => {
  return (
    <div>
      {/* First Section */}
      <div className="background-overlay d-flex  align-items-center">
        <div className="ser-con px-5">
          <h1 className='fw-bold'>Our Services
          </h1>
          <p style={{ color: '#feb000' }}>HOME<span className='fs ser-icon'><FaAngleRight /></span>SERVICES</p>

        </div>
      </div>


      {/* Third Section */}

      <Container fluid>
        <Row>
          <Col md={12} className='mt-5'>
            <div className='text-center mt-5 '>
              <h1 className='fw-bold spread-img-s'>Our Work Flow
              </h1>
              <p>When unknow printer took a gallery of type and scramblted it to makea type specimen book</p>
            </div>
          </Col>
        </Row>

        {/* Service-1 */}
        <div className="ser-pro mt-5 container-fluid">
          <Row className='container-fluid ser px-5'>
            <Col md={6}>
              <img src={analysis} className='h-auto w-100 ' alt="" />
            </Col>
            <Col className='d-flex align-items-center' md={6}>
              <div className='text-center mt-5'>
                <span className='fs-1 shadow p-2 rounded h-100 w-100'><IoIosAnalytics /></span>
                <h2 className='fw-bold mt-4'>Analysis
                </h2>
                <p>Morbi vel tortor at metus malesuada convallis. Nam diam magna, laoreet ac libero quis, laoreet semper sem. Etiam erat quam, suscipit in orci ut, aliquet finibus tortor. Nullam dui leo, convallis quis diam eget, aliquam feugiat nunc. Vivamus quis volutpat dui.</p>
              </div>
            </Col>
          </Row>
        </div>

        {/* Service-2 */}

        <div className="ser-pro  container">
          <Row className='container-fluid ser px-5'>
            <Col className='d-flex align-items-center' md={6}>
              <div className='text-center'>
                <span className='fs-1 shadow p-2 rounded h-0 w-100'><CiDesktop /></span>
                <h2 className='fw-bold mt-4'>Development
                </h2>
                <p>Morbi vel tortor at metus malesuada convallis. Nam diam magna, laoreet ac libero quis, laoreet semper sem. Etiam erat quam, suscipit in orci ut, aliquet finibus tortor. Nullam dui leo, convallis quis diam eget, aliquam feugiat nunc. Vivamus quis volutpat dui.</p>
              </div>
            </Col>


            <Col md={6}>
              <img src={development} className='h-auto w-100 ' alt="" />
            </Col>
          </Row>
        </div>

        {/* Service-3 */}

        <div className="ser-pro  container-fluid">
          <Row className='container-fluid ser px-5'>
            <Col md={6}>
              <img src={launch} className='h-auto w-100 ' alt="" />
            </Col>
            <Col className='d-flex align-items-center' md={6}>
              <div className='text-center mt-5'>
                <span className='fs-1 shadow p-2 rounded h-0 w-100'><MdRocketLaunch /></span>
                <h2 className='fw-bold mt-4'>Launch
                </h2>
                <p>Morbi vel tortor at metus malesuada convallis. Nam diam magna, laoreet ac libero quis, laoreet semper sem. Etiam erat quam, suscipit in orci ut, aliquet finibus tortor. Nullam dui leo, convallis quis diam eget, aliquam feugiat nunc. Vivamus quis volutpat dui.</p>
              </div>
            </Col>
          </Row>
        </div>

        {/* Section-4 */}

        <Container className='mt-5 pb-5'>
          <Row className='mt-5 ser pt-5'>
            <Col md={6}>
              <img className="h-auto w-100" src={formen} alt="" />
            </Col>
            <Col md={6}>
              <h1 className='text-center fw-bold spread-img-f'>Get In Touch</h1>
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

      </Container>
    </div >
  )
}

export default Service



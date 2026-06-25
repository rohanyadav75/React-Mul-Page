import React from "react";

import './About.css'
// import  from '../images/common.png'
import men2 from '../images/about-tdHAvNOC.png'
import award from '../images/award-la9r5_KF.png'
import skill from '../images/skill-kMjIKc8e.png'
import { FaCaretRight } from "react-icons/fa";
import formen from '../images/contact-hiQDr1Sx.png'
import { Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Container, Form, FormGroup, Input, Label, Progress, Row } from 'reactstrap'



const About = () => {
  // const [color, setColor] = useState("blue");
  // const [count, setCount] = useState(0);
  // const [name] = useState('Rohan')


  return (
    <div>

      {/* First  */}
      <Container >
        <Row className=' align-items-center'>

          <Col md={6}>

            <img className='men-2 p-2' src={men2} alt="" />
          </Col>

          <Col md={6}>
            <div className="why-content mt-5">
              <h1 className='fw-bold spread-abt' >Why You  Hire Us?
              </h1>
              <button >Make it Green</button>
              <p>Proin ipsum arcu, lobortis id ullamcorper nec, vehicula eget magna. Sed ut malesuada magna, eget lacinia sapien. Nam molestie non ex sit amet ornare. Nunc in pellentesque ipsum, vel vulputate sapien.
                Suspendisse potenti. Aliquam elementum felis purus, quis vulputate libero semper nec. Morbi tincidunt maximus nisl vel placerat. Curabitur at ligula ac diam elementum hendrerit. Suspendisse nec metus eu est laoreet hendrerit vitae non ipsum. Nam faucibus elementum arcu, eget eleifend tortor.
              </p>
              <Row>
                <Col md={4}>
                  <img className='  w-5' src={award} alt="" />

                </Col>
                <Col md={8}>
                  <h5 className='fw-bolder'>Deneb Agency</h5>
                  <p>Proin ipsum arcu,</p>
                </Col>
              </Row>





            </div>
          </Col>
        </Row>
      </Container>

      {/* Second */}
      <Container className='mt-5' >
        <Row className=' align-items-center'>

          <Col md={8}>
            <div className="why-content mt-5">
              <h1 className='fw-bold spread-abt'>Why You Hire Us?
              </h1>
              <p>Proin ipsum arcu, lobortis id ullamcorper nec, vehicula eget magna. Sed ut malesuada magna, eget lacinia sapien.
              </p>


              {/* first bar */}
              <div className='d-flex justify-content-between'>
                <h5 className='fw-bold'>UI/UX Design</h5>
                <h5 className='fw-bolder ab-num'>85%</h5>

              </div>
              <Progress
                animated
                className="my-3"
                color="warning"
                value={85}
              />

              {/* second bar */}
              <div className='d-flex justify-content-between'>
                <h5 className='fw-bold'>Web Design</h5>
                <h5 className='fw-bolder ab-num'>75%</h5>

              </div>
              <Progress
                animated
                className="my-3"
                color="warning"
                value={75}
              />

              {/* third bar */}

              <div className='d-flex justify-content-between'>
                <h5 className='fw-bold'>HTML/CSS</h5>
                <h5 className='fw-bolder ab-num'>90%</h5>

              </div>
              <Progress
                animated
                className="my-3"
                color="warning"
                value={90}
              />

              {/* four bar */}


              <div className='d-flex justify-content-between'>
                <h5 className='fw-bold'>Sketch</h5>
                <h5 className='fw-bolder ab-num'>65%</h5>

              </div>
              <Progress
                animated
                className="my-3"
                color="warning"
                value={65}
              />
            </div>
          </Col>

          <Col md={4}>

            <img className='h-auto w-100' src={skill} alt="" />
          </Col>


        </Row>
      </Container>

      {/* third */}
      <Container className='mt-5 pt-3 ab-bl'>
        <h1 className='text-center fw-bold spread-img-blog    '>Our Blog</h1>
        <Row className='mt-5 p-0'>
          <Col md={4}>
            <Card
              style={{
                width: '100%'
              }}
            >
              <img
                alt="Sample"
                src="https://picsum.photos/300/200"
              />
              <CardBody>
                <CardTitle tag="h5">
                  Card title
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
            <Card className='ab-card'
              style={{
                width: '100%'
              }}
            >
              <img
                alt="Sample"
                src="https://picsum.photos/300/200"
              />
              <CardBody>
                <CardTitle tag="h5">
                  Card title
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
            <Card className='ab-card'
              style={{
                width: '100%'
              }}
            >
              <img
                alt="Sample"
                src="https://picsum.photos/300/200"
              />
              <CardBody>
                <CardTitle tag="h5">
                  Card title
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

      {/* four */}
      <Container  className=' px-5 mt-5'>
        <Row className='mt-5 px-5'>
          <Col md={6} className='d-flex p-0 align-items-center '>
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

export default About

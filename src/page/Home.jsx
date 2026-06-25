import React, { useEffect, useState, createContext } from 'react';
import men from '../images/banner_1-CZKWZCWg (1).png';
import men2 from '../images/about-tdHAvNOC.png';
import icon1 from '../images/icon1.png';
import shape from '../images/shape.png';
import icon2 from '../images/icon2.png';
import { IoMdHappy } from "react-icons/io";
import { GiPodiumWinner } from "react-icons/gi";
import { AiOutlineThunderbolt } from "react-icons/ai";
import icon3 from '../images/icon3.png';
import { PiNotepadThin } from "react-icons/pi";
import { FaCaretRight } from "react-icons/fa";
import formen from '../images/contact-hiQDr1Sx.png';
import { Card, Form, CardText, CardTitle, Col, Container, FormGroup, Input, Label, Row, CardBody, CardSubtitle } from 'reactstrap';
import './Home.css';

const Home = () => {
  const [bgcolor, setBgcolor] = useState("white");

  useEffect(() => {
    document.body.style.backgroundColor = bgcolor;
  }, [bgcolor]); // Added dependency array to avoid unnecessary re-renders

  return (
    <div> 
      <Container fluid className='shape px-5'>
        <Row className='align-items-center mt-2 p-5'>
          <Col md={6}>
            <div className="content">
              <h1 className='fw-light txt'>We Are Creative</h1>
              <h1 className='fw-bolder color'>Deneb Agency</h1>
              <p>Aliquam sollicitudin consequat commodo. Cras bibendum ipsum eu augue egestas laciniaam eu ornare ipsum, quis tristique ligula.</p>
              <button onClick={() => setBgcolor("green")}>Know More</button>
            </div>
          </Col>
          <Col className="mt-5" md={6}>
            <img className='h-100 w-100' src={men} alt="" />
          </Col>
        </Row>
      </Container>


      {/* Second section */}

      <Container fluid>
        <Row>
          <Col md={12} className='mt-5'>
            <div className='text-center sh-row'>
              <h1 className='fw-bold spread-img-home'>Our Service</h1>
              <p>When unknow printer took a gallery of type and scramblted it to makea type specimen book</p>
            </div>

          </Col>
        </Row>
      </Container>



      {/* Third Section */}
      <Container fluid className='mt-5 px-5 pt-1'>
        <Row className='mt-3 mob-ser'>

          <Col className="mob-res" md={4}>
            <Card className='home-card p-3 px-5 '>
              <img className='home-icon  ' src={icon1} alt="" />
              <CardTitle className='text-center fw-bold mt-3' tag="h5">
                Web Solution
              </CardTitle>
              <CardText className='text-center'>
                Aliquam sollicitudin <consequ>  </consequ>at commodo. Cras bibendum ipsum eu augue egestas laciniaam eu ornare ipsum, quis tristique ligula.
              </CardText>
              <span className='rounded  text-center fs-7 h-100 w-100'><FaCaretRight className='btn-icon' />Read More</span>
              {/* <button className='w-50'>Click Me</button> */}
            </Card>
          </Col>

          <Col className="mob-res" md={4}>
            <Card className='home-card p-3 px-5 '>
              <img className='home-icon ' src={icon2} alt="" />
              <CardTitle className='text-center fw-bold mt-3' tag="h5">
                Web Solution
              </CardTitle>
              <CardText className='text-center'>
                Aliquam sollicitudin consequat commodo. Cras bibendum ipsum eu augue egestas laciniaam eu ornare ipsum, quis tristique ligula.
              </CardText>
              <span className='rounded  text-center fs-7 h-100 w-100'><FaCaretRight className='btn-icon' />Read More</span>
            </Card>
          </Col>

          <Col className="mob-res" md={4}>
            <Card className='home-card p-3 px-5 '
            >
              <img className='home-icon ' src={icon3} alt="" />
              <CardTitle className='text-center fw-bold mt-3' tag="h5">
                Web Solution
              </CardTitle>
              <CardText className='text-center'>
                Aliquam sollicitudin consequat commodo. Cras bibendum ipsum eu augue egestas laciniaam eu ornare ipsum, quis tristique ligula.
              </CardText>
              <span className='rounded  text-center fs-7 h-100 w-100'><FaCaretRight className='btn-icon' />Read More</span>
              {/* <button className='w-50'>Click Me</button> */}
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Fourth Section */}

      <Container fluid className='mt-5 px-3 shape-service'>
        <Row className='mt-5 p-5 sh-row align-items-center '>

          <Col md={6}>
            <img className='men-2 p-2' src={men2} alt="" />
          </Col>

          <Col md={6}>
            <div className="why-content mt-5">
              <h1 className='fw-bold spread-img-home'>Why You Hire Us?
              </h1>
              <p>Proin ipsum arcu, lobortis id ullamcorper nec, vehicula eget magna. Sed ut malesuada magna, eget lacinia sapien. Nam molestie non ex sit amet ornare. Nunc in pellentesque ipsum, vel vulputate sapien.
                Suspendisse potenti. Aliquam elementum felis purus, quis vulputate libero semper nec. Morbi tincidunt maximus nisl vel placerat. Curabitur at ligula ac diam elementum hendrerit. Suspendisse nec metus eu est laoreet hendrerit vitae non ipsum. Nam faucibus elementum arcu, eget eleifend tortor.
              </p>
              <button>Read More</button>

            </div>
          </Col>
        </Row>
      </Container>

      {/* Five Section */}

      <Container className='mt-5 pt-5 shape'>
        <Row className='align-items-center '>
          <Col md={6}>
            <div className="why-content mt-5">
              <h1 className='fw-bold spread-img-home'>Over 500+ Completed work & Still Counting

              </h1>
              <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus at orci non risus luctus commodo. Ut nibh tellus, faucibus nec gravida.<br />
              </p>
              <button>Read More</button>
            </div>

          </Col>

          <Col md={6} className='p-5 '>

            <Row>
              <Col md={6} >
                <div className="circle-1 text-center bg-light rounded-pill  shadow">
                  <span className='fs-1  p-2 rounded h-100 w-100'><PiNotepadThin /></span>

                  <h3 >300+</h3>
                  <p>Projects Done</p>
                </div>
              </Col>
              <Col md={6}>
                <div className="circle-1 text-center bg-light rounded-pill shadow">
                  <span className='fs-1  p-2 rounded h-100 w-100'><IoMdHappy /></span>

                  <h3>300+</h3>
                  <p>Projects Done</p>
                </div>
              </Col>
            </Row>
            <Row className='mt-3'>
              <Col md={6}>
                <div className="circle-1 text-center bg-light shadow rounded-pill">
                  <span className='fs-1  p-2 rounded h-100 w-100'><AiOutlineThunderbolt /></span>

                  <h3>300+</h3>
                  <p>Projects Done</p>
                </div>
              </Col>
              <Col md={6}>
                <div className="circle-1 text-center bg-light shadow rounded-pill">
                  <span className='fs-1  p-2 rounded h-100 w-100'><GiPodiumWinner /></span>
                  <h3>300+</h3>
                  <p>Projects Done</p>
                </div>
              </Col>
            </Row>


          </Col>
        </Row>

      </Container>


      {/*  Six Section */}
      <Container className='mt-5'>
        <h1 className='text-center fw-bold spread-img-home'>Our Blog</h1>
        <Row className='mt-5'>
          <Col md={4}>
            <Card className='ab-bl'

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
            <Card className='ab-bl'

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
            <Card className='ab-bl'

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

      {/*  Seven Section */}
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
              {/* <FormGroup check>
                <Input
                  id="exampleCheck"
                  name="check"
                  type="checkbox"
                />
                <Label
                  check
                  for="exampleCheck"
                >
                  Check me out
                </Label>
              </FormGroup> */}
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
const AppContext = createContext();
const AppProvider = ({ children }) => { // Fixed prop name from "Children" to "children"
  const userData = {
    name: "Rohan",
    age: 28,
  };
  return <AppContext.Provider value={userData}>{children}</AppContext.Provider>;
};


export default Home;
export { AppContext, AppProvider };

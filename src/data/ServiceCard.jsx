import React from 'react'
import { FaCaretRight } from '../assest/icon/icon'
import { Card, CardText, CardTitle, Col } from 'reactstrap'

const ServiceCard = ({service}) => {
  return (
    <>
      <Col md={4} className="mob-res mb-4">
        <Card className="home-card p-3 px-5 h-100">

          <img
            className="home-icon"
            src={service.image}
            alt={service.title}
          />

          <CardTitle className="text-center fw-bold mt-3" tag="h5">
            {service.title}
          </CardTitle>

          <CardText className="text-center">
            {service.description}
          </CardText>

          <span className="rounded text-center fs-7 h-100 w-100">
            <FaCaretRight className="btn-icon" />
            Read More
          </span>

        </Card>
      </Col>
    </>
  )
}

export default ServiceCard

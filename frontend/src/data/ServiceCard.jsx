import React from 'react'
import { FaCaretRight } from '../assest/icon/icon'
import { Card, CardText, CardTitle, Col } from 'reactstrap'

const ServiceCard = ({service}) => {
  return (
    <>
      <Col md={4} lg={4} className="mob-res mb-4">
        <Card className="home-card h-100">

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

          <span className="service-card-link">
            <FaCaretRight className="btn-icon" />
            <span>Read More</span>
          </span>

        </Card>
      </Col>
    </>
  )
}

export default ServiceCard

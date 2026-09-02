import { Container, Row } from "reactstrap";
import { services } from "../../data/services";
import ServiceCard from "../../data/ServiceCard";

function Services() {
  return (
    <Container fluid className="px-5 pt-1">

      <div className="text-center sh-row">
        <h1 className="fw-bold spread-img-home">
          Digital Marketing Services
        </h1>

        <p>
          Data-driven marketing across channels: SEO, paid media, social, content and analytics to help you reach the right audience and convert them into customers.
        </p>
      </div>

      <Row className="mt-3 mob-ser">

        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
          />
        ))}

      </Row>

    </Container>
  );
}

export default Services;
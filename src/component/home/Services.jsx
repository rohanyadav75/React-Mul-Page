import { Container, Row } from "reactstrap";
import { services } from "../../data/services";
import ServiceCard from "../../data/ServiceCard";

function Services() {
  return (
    <Container fluid className="px-5 pt-1">

      <div className="text-center sh-row">
        <h1 className="fw-bold spread-img-home">
          Our Service
        </h1>

        <p>
          When unknown printer took a gallery of type and scrambled it to
          make a type specimen book.
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
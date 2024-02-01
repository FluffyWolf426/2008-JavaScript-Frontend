import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import ComponentLibrariesList from "@/components/ComponentLibrariesList";
import Aliens from "@/components/Aliens";

export default function Home() {
  return (
    <main>
      <Container>
        <h1>Our Demo using bootstrap</h1>
        <Row>
          <Col>
            <h4>Available Component libraries</h4>
            <ComponentLibrariesList />
          </Col>
          <Col>
            <h4>Take a look at some other components</h4>
            <Aliens />
            <Button>Click here to proof the Earth is flat</Button>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

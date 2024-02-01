import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Container>
        <h1>Our Demo using bootstrap</h1>
        <Row>
          <Col>
            <h4>Available Component libraries</h4>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

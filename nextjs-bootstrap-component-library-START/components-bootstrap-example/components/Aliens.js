import Accordion from "react-bootstrap/Accordion";
import Badge from "react-bootstrap/Badge";

export default function Aliens() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          Why Alience are Real? <Badge bg="success">FACT</Badge>
        </Accordion.Header>
        <Accordion.Body>
          The belief that aliens are real is rooted in the vastness of the
          universe, with billions of galaxies and even more planets, making it
          statistically likely that Earth is not the only planet capable of
          supporting life. The discovery of thousands of exoplanets, some in
          habitable zones, and the existence of extremophiles on Earth, which
          can thrive in extreme conditions, suggest that life could exist
          elsewhere. Additionally, ongoing scientific efforts, such as the
          Search for Extraterrestrial Intelligence (SETI), actively seek
          evidence of extraterrestrial life. While anecdotal UFO sightings and
          encounters add to the intrigue, the absence of definitive proof leaves
          the existence of aliens as a compelling but unproven possibility.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Why Aliens are not Real?</Accordion.Header>
        <Accordion.Body>
          The belief that aliens are not real often stems from the lack of
          concrete scientific evidence supporting their existence. Despite
          decades of space exploration, the search for extraterrestrial
          intelligence (SETI), and the study of thousands of exoplanets,
          scientists have not found indisputable proof of alien life. The
          vastness of the universe makes it challenging to detect signs of life,
          especially intelligent life capable of communication or space travel.
          Furthermore, the conditions required for life as we understand it are
          specific and may not be widely prevalent in the cosmos. While the
          possibility of alien life cannot be completely ruled out, the absence
          of verifiable evidence leads many to remain skeptical about the
          existence of extraterrestrial beings.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

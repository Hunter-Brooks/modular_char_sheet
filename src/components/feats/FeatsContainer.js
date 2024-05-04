import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";

function FeatsContainer() {
  return (
    <Container>
      <Row>
        <Col>
          <Stack gap={0}>
            <div className="p-2">ancestry feats</div>
            <div className="p-2">skill feats</div>
            <div className="p-2">general feats</div>
          </Stack>
        </Col>
        <Col>
          <Stack gap={0}>
            <div className="p-2">class feats</div>
            <div className="p-2">bonus feats</div>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}

export default FeatsContainer;

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";

function FeatsContainer() {
  return (
    <div>
      <div className="card">
        <div className="card-body">
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
        </div>
      </div>
    </div>
  );
}

export default FeatsContainer;

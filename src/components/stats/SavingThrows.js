import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import ProfRadios from "../ProfRadios";

function SavingThrows() {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <Container>
            <Row>Saving Throws</Row>
            <Row>
              <Col>
                <Stack>
                  <div>Fortitude</div>
                  <div>
                    <Row>
                      <div>Con</div>
                      <div>Prof</div>
                    </Row>
                  </div>
                  <div>
                    <Row>
                      <div>Item</div>
                      <div>radios</div>
                    </Row>
                  </div>
                </Stack>
              </Col>
              <Col>
                <Stack>
                  <div>Reflex</div>
                  <div>
                    <Row>
                      <div>Dex</div>
                      <div>Prof</div>
                    </Row>
                  </div>
                  <div>
                    <Row>
                      <div>Item</div>
                      <div>radios</div>
                    </Row>
                  </div>
                </Stack>
              </Col>
              <Col>
                <Stack>
                  <div>Will</div>
                  <div>
                    <Row>
                      <div>Wis</div>
                      <div>Prof</div>
                    </Row>
                  </div>
                  <div>
                    <Row>
                      <div>Item</div>
                      <div>radios</div>
                    </Row>
                  </div>
                </Stack>
              </Col>
            </Row>
            <Row>notes</Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default SavingThrows;

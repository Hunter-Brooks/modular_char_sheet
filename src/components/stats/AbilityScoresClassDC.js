import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";

function AbilityScoresClassDC() {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <Container>
            <Col>
              <Row>
                <Col>Ability Scores</Col>
              </Row>
              <Row>
                <Col>
                  <Stack gap={0}>
                    <div className="p-2">STR mod</div>
                    <div className="p-2">DEX mod</div>
                    <div className="p-2">CON mod</div>
                    <div className="p-2">INT mod</div>
                    <div className="p-2">WIS mod</div>
                    <div className="p-2">CHA mod</div>
                  </Stack>
                </Col>
                <Col>
                  <Stack gap={0}>
                    <div className="p-2">Strength</div>
                    <div className="p-2">Dexterity</div>
                    <div className="p-2">Constitution</div>
                    <div className="p-2">Intellect</div>
                    <div className="p-2">Wisdom</div>
                    <div className="p-2">Charisma</div>
                  </Stack>
                </Col>
              </Row>
              <Row>
                <Col>Class DC</Col>
              </Row>
              <Row>
                <Col>DC</Col>
                <Col>
                  <label className="form-control">Key</label>
                  <input type="text" className="form-control"></input>
                </Col>
                <Col>
                  <label className="form-control">Prof</label>
                  <input type="text" className="form-control"></input>
                </Col>
                <Col>prof radios</Col>
                <Col>
                  <label className="form-control">Item</label>
                  <input type="text" className="form-control"></input>
                </Col>
              </Row>
            </Col>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default AbilityScoresClassDC;

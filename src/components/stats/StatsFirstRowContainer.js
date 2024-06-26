import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AbilityScoresClassDC from "./AbilityScoresClassDC";
import ACSaves from "./ACSaves";
import HPPerception from "./HPPerception";

function StatsFirstRowContainer() {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <Container>
            <Row>
              <Col>
                <AbilityScoresClassDC></AbilityScoresClassDC>
              </Col>
              <Col>
                <ACSaves></ACSaves>
              </Col>
              <Col>
                <HPPerception></HPPerception>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default StatsFirstRowContainer;

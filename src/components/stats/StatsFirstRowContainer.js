import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AbilityScores from "./AbilityScores";
import ClassDC from "./ClassDC";
import ArmorClass from "./ArmorClass";
import HitPoints from "./HitPoints";
import Perception from "./Perception";
import SavingThrows from "./SavingThrows";

function StatsFirstRowContainer() {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <Container>
            <Row>
              <Col>
                <AbilityScores></AbilityScores>
                <ClassDC></ClassDC>
              </Col>
              <Col>
                <ArmorClass></ArmorClass>
                <SavingThrows></SavingThrows>
              </Col>
              <Col>
                <HitPoints></HitPoints>
                <Perception></Perception>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default StatsFirstRowContainer;

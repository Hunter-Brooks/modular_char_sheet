import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function StatsSecondRowContainer() {
  return (
    <div>
      <div className="card section-card">
        <div className="card-body">
          <Container>
            <Row className="section-title">
              <Col>Combat & Skills</Col>
            </Row>
            <Row>
              <Col>speed/weapons</Col>
              <Col>skills</Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default StatsSecondRowContainer;

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function HitPoints() {
  return (
    <div>
      <div className="card section-card">
        <div className="card-body">
          <Container>
            <Row className="section-title">Hit Points</Row>
            <Row>
              <Row xs={3}>
                <div className="p-1">
                  <label className="field-label">HP Max</label>
                  <input type="text" className="form-control sheet-input"></input>
                </div>
                <div className="p-1">
                  <label className="field-label">Current</label>
                  <input type="text" className="form-control sheet-input"></input>
                </div>
                <div className="p-1">
                  <label className="field-label">HP Temp</label>
                  <input type="text" className="form-control sheet-input"></input>
                </div>
              </Row>
              <Row>
                <Col>
                  <div className="p-1">
                    <label className="field-label">Dying</label>
                    <input type="text" className="form-control sheet-input"></input>
                  </div>
                  <div className="p-1">
                    <label className="field-label">Wounded</label>
                    <input type="text" className="form-control sheet-input"></input>
                  </div>
                </Col>
                <Col>
                  <div className="p-1">
                    <label className="field-label">Resistances</label>
                    <input type="text" className="form-control sheet-input"></input>
                  </div>
                  <div className="p-1">
                    <label className="field-label">Conditions</label>
                    <input type="text" className="form-control sheet-input"></input>
                  </div>
                </Col>
              </Row>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default HitPoints;

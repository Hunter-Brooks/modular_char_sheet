import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";

function HitPoints() {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <Container>
            <Row>Hit Points</Row>
            <Row>
              <Row xs={3}>
                <div className="p-1">
                  <label className="form-control">HP Max</label>
                  <input type="text" className="form-control"></input>
                </div>
                <div className="p-1">
                  <label className="form-control">Current</label>
                  <input type="text" className="form-control"></input>
                </div>
                <div className="p-1">
                  <label className="form-control">HP Temp</label>
                  <input type="text" className="form-control"></input>
                </div>
              </Row>
              <Row>
                <Col>
                  <div className="p-1">
                    <label className="form-control">Dying</label>
                    <input type="text" className="form-control"></input>
                  </div>
                  <div className="p-1">
                    <label className="form-control">Wounded</label>
                    <input type="text" className="form-control"></input>
                  </div>
                </Col>
                <Col>
                  <div className="p-1">
                    <label className="form-control">Resistances</label>
                    <input type="text" className="form-control"></input>
                  </div>
                  <div className="p-1">
                    <label className="form-control">Conditions</label>
                    <input type="text" className="form-control"></input>
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

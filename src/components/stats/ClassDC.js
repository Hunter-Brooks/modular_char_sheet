import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProfRadios from "../ProfRadios";

function ClassDC() {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <Container>
            <Row>
              <Col xs={3}>Class DC</Col>
            </Row>
            <Row>
              <Col xs={3}>
                <div xs={3}>DC</div>
                <div xs={3}>
                  <ProfRadios></ProfRadios>
                </div>
              </Col>
              <Col xs={3}>
                <label className="form-control">Key</label>
                <input type="text" className="form-control"></input>
              </Col>
              <Col xs={3}>
                <label className="form-control">Prof</label>
                <input type="text" className="form-control"></input>
              </Col>
              <Col xs={3}>
                <label className="form-control">Item</label>
                <input type="text" className="form-control"></input>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default ClassDC;

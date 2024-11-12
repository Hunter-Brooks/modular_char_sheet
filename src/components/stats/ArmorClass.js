import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProfRadios from "../ProfRadios";

function ArmorClass() {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <Container>
            <Col>
              <Row>Armor Class</Row>
              <Row>
                <Col>AC</Col>
                <Col>
                  <label className="form-control">Dex</label>
                  <input type="text" className="form-control"></input>
                </Col>
                <Col>
                  <label className="form-control">Cap</label>
                  <input type="text" className="form-control"></input>
                </Col>
                <Col>
                  <label className="form-control">Prof</label>
                  <input type="text" className="form-control"></input>
                </Col>
                <Col>
                  <ProfRadios></ProfRadios>
                </Col>
                <Col xs={3}>
                  <label className="form-control">Item</label>
                  <input type="text" className="form-control"></input>
                </Col>
              </Row>
              <Row>
                <Row>
                  <Col>Unarmored</Col>
                  <Col>Lightight</Col>
                  <Col>Medium</Col>
                  <Col>Heavy</Col>
                </Row>
                <Row>
                  <Col>unarmored radios</Col>
                  <Col>light radios</Col>
                  <Col>medium radios</Col>
                  <Col>heavy radios</Col>
                </Row>
              </Row>
            </Col>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default ArmorClass;

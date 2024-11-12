import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";

function Perception() {
  return (
    <div className="card">
      <div className="card-body">
        <Container>
          <Row>Perception</Row>
          <Row>
            <Col>
              <div className="p-1">
                <label className="form-control">perception</label>
                <input type="text" className="form-control"></input>
              </div>
            </Col>
            <Col>
              <div className="p-1">
                <label className="form-control">wisdom</label>
                <input type="text" className="form-control"></input>
              </div>
            </Col>
            <Col>
              <div className="p-1">
                <label className="form-control">prof</label>
                <input type="text" className="form-control"></input>
              </div>
            </Col>
            <Col>prof redios</Col>
            <Col>item</Col>
          </Row>
          <Row>
            <div className="p-1">
              <label className="form-control">senses</label>
              <input type="text" className="form-control"></input>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Perception;

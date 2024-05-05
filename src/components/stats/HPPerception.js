import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";

function HPPerception() {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <Container>
            <Row>Hit Points</Row>
            <Row>
              <Col>
                <Stack gap={0}>
                  <div className="p-2">
                    <label className="form-control">HP Max</label>
                    <input type="text" className="form-control"></input>
                  </div>
                  <div className="p-2">
                    <label className="form-control">HP Current</label>
                    <input type="text" className="form-control"></input>
                  </div>
                </Stack>
              </Col>
              <Col>
                <Row>
                  <div className="p-2">
                    <label className="form-control">HP Temp</label>
                    <input type="text" className="form-control"></input>
                  </div>
                </Row>
                <Row>
                  <Col>
                    <div className="p-2">
                      <label className="form-control">Dying</label>
                      <input type="text" className="form-control"></input>
                    </div>
                  </Col>
                  <Col>
                    <div className="p-2">
                      <label className="form-control">Wounded</label>
                      <input type="text" className="form-control"></input>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <div className="p-2">
                <label className="form-control">Resistances</label>
                <input type="text" className="form-control"></input>
              </div>
            </Row>
            <Row>
              <div className="p-2">
                <label className="form-control">Contditions</label>
                <input type="text" className="form-control"></input>
              </div>
            </Row>
            <Row>Perception</Row>
            <Row>
              <Col>
                <div className="p-2">
                  <label className="form-control">perception</label>
                  <input type="text" className="form-control"></input>
                </div>
              </Col>
              <Col>
                <div className="p-2">
                  <label className="form-control">wisdom</label>
                  <input type="text" className="form-control"></input>
                </div>
              </Col>
              <Col>
                <div className="p-2">
                  <label className="form-control">prof</label>
                  <input type="text" className="form-control"></input>
                </div>
              </Col>
              <Col>prof redios</Col>
              <Col>item</Col>
            </Row>
            <Row>
              <div className="p-2">
                <label className="form-control">senses</label>
                <input type="text" className="form-control"></input>
              </div>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default HPPerception;

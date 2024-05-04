import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function StatsFirstRowContainer() {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <Container>
            <Row>
              <div className="card">
                <div className="card-body">
                  <Container>
                    <Row>
                      <Col>ability scores / class dc component</Col>
                      <Col>ac/saves component</Col>
                      <Col>hp/perception component</Col>
                    </Row>
                  </Container>
                </div>
              </div>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default StatsFirstRowContainer;

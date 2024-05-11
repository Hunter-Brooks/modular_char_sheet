import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";

function StatCard() {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <Container>
            <Row className="cardTitle">
              <Col>{propTypes.title}</Col>
            </Row>
            <Row className="cardBody">
              <Col></Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

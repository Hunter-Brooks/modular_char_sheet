import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function HeadingContainer() {
  return (
    <div className="mb-2">
      <div className="card section-card">
        <div className="card-body">
          <Container>
            <div className="section-title">Character Details</div>
            <Row>
              <Col>
                <div className="field-group">
                  <label className="field-label">name</label>
                  <input
                    type="text"
                    className="form-control sheet-input"
                    defaultValue="Hunter"
                  />
                </div>
              </Col>
              <Col>
                <div className="field-group">
                  <label className="field-label">player name</label>
                  <input type="text" className="form-control sheet-input" />
                </div>
              </Col>
              <Col />
            </Row>

            <Row>
              <Col>
                <div className="field-group">
                  <label className="field-label">ancestry/heritage</label>
                  <input type="text" className="form-control sheet-input" />
                </div>
              </Col>
              <Col>
                <div className="field-group">
                  <label className="field-label">background</label>
                  <input type="text" className="form-control sheet-input" />
                </div>
              </Col>
              <Col>
                <div className="field-group">
                  <label className="field-label">hero points</label>
                  <input type="text" className="form-control sheet-input" />
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                <div className="field-group">
                  <label className="field-label">EXP</label>
                  <input type="text" className="form-control sheet-input" />
                </div>
              </Col>
              <Col>
                <div className="field-group">
                  <label className="field-label">class</label>
                  <input type="text" className="form-control sheet-input" />
                </div>
              </Col>
              <Col>
                <Row>
                  <Col>
                    <div className="field-group">
                      <label className="field-label">size</label>
                      <input type="text" className="form-control sheet-input" />
                    </div>
                  </Col>
                  <Col>
                    <div className="field-group">
                      <label className="field-label">alignment</label>
                      <input type="text" className="form-control sheet-input" />
                    </div>
                  </Col>
                  <Col>
                    <div className="field-group">
                      <label className="field-label">traits</label>
                      <input type="text" className="form-control sheet-input" />
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default HeadingContainer;

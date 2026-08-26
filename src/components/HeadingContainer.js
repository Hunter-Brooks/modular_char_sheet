import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function HeadingContainer({ details, onChange }) {
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
                    value={details.name}
                    onChange={(event) => onChange("name", event.target.value)}
                  />
                </div>
              </Col>
              <Col>
                <div className="field-group">
                  <label className="field-label">player name</label>
                  <input
                    type="text"
                    className="form-control sheet-input"
                    value={details.playerName}
                    onChange={(event) =>
                      onChange("playerName", event.target.value)
                    }
                  />
                </div>
              </Col>
              <Col />
            </Row>

            <Row>
              <Col>
                <div className="field-group">
                  <label className="field-label">ancestry/heritage</label>
                  <input
                    type="text"
                    className="form-control sheet-input"
                    value={details.ancestryHeritage}
                    onChange={(event) =>
                      onChange("ancestryHeritage", event.target.value)
                    }
                  />
                </div>
              </Col>
              <Col>
                <div className="field-group">
                  <label className="field-label">background</label>
                  <input
                    type="text"
                    className="form-control sheet-input"
                    value={details.background}
                    onChange={(event) =>
                      onChange("background", event.target.value)
                    }
                  />
                </div>
              </Col>
              <Col>
                <div className="field-group">
                  <label className="field-label">hero points</label>
                  <input
                    type="text"
                    className="form-control sheet-input"
                    value={details.heroPoints}
                    onChange={(event) =>
                      onChange("heroPoints", event.target.value)
                    }
                  />
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                <div className="field-group">
                  <label className="field-label">EXP</label>
                  <input
                    type="text"
                    className="form-control sheet-input"
                    value={details.exp}
                    onChange={(event) => onChange("exp", event.target.value)}
                  />
                </div>
              </Col>
              <Col>
                <div className="field-group">
                  <label className="field-label">class</label>
                  <input
                    type="text"
                    className="form-control sheet-input"
                    value={details.className}
                    onChange={(event) =>
                      onChange("className", event.target.value)
                    }
                  />
                </div>
              </Col>
              <Col>
                <Row>
                  <Col>
                    <div className="field-group">
                      <label className="field-label">size</label>
                      <input
                        type="text"
                        className="form-control sheet-input"
                        value={details.size}
                        onChange={(event) =>
                          onChange("size", event.target.value)
                        }
                      />
                    </div>
                  </Col>
                  <Col>
                    <div className="field-group">
                      <label className="field-label">alignment</label>
                      <input
                        type="text"
                        className="form-control sheet-input"
                        value={details.alignment}
                        onChange={(event) =>
                          onChange("alignment", event.target.value)
                        }
                      />
                    </div>
                  </Col>
                  <Col>
                    <div className="field-group">
                      <label className="field-label">traits</label>
                      <input
                        type="text"
                        className="form-control sheet-input"
                        value={details.traits}
                        onChange={(event) =>
                          onChange("traits", event.target.value)
                        }
                      />
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

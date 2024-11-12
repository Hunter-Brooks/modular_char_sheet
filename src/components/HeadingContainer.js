import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import InputSM from "./InputSM";

function HeadingContainer() {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <Container>
            <Row>
              <Col>
                <Stack gap={0}>
                  <div className="p-2">
                    <label className="form-control">name</label>
                    <input
                      type="text"
                      className="form-control"
                      style={{ backgroundColor: "darksalmon" }}
                      defaultValue="Hunter"
                    ></input>
                  </div>
                  <div className="p-2">
                    <label className="form-control">player name</label>
                    <input
                      type="text"
                      className="form-control"
                      style={{ backgroundColor: "darksalmon" }}
                    ></input>
                  </div>
                  <div className="p-2">
                    <label className="form-control">EXP</label>
                    <input
                      type="text"
                      className="form-control"
                      style={{ backgroundColor: "darksalmon" }}
                    ></input>
                  </div>
                </Stack>
              </Col>
              <Col>
                <Stack gap={0}>
                  <div className="p-2">
                    <label className="form-control">ancestry/heritage</label>
                    <input
                      type="text"
                      className="form-control"
                      style={{ backgroundColor: "darksalmon" }}
                    ></input>
                  </div>
                  <div className="p-2">
                    <label className="form-control">background</label>
                    <input
                      type="text"
                      className="form-control"
                      style={{ backgroundColor: "darksalmon" }}
                    ></input>
                  </div>
                  <div className="p-2">
                    <label className="form-control">class</label>
                    <input
                      type="text"
                      className="form-control"
                      style={{ backgroundColor: "darksalmon" }}
                    ></input>
                  </div>
                </Stack>
              </Col>
              <Col>
                <Stack>
                  <div className="p-2">
                    <label className="form-control">level</label>
                    <input
                      type="text"
                      className="form-control"
                      style={{ backgroundColor: "darksalmon" }}
                    ></input>
                  </div>
                  {/* <InputSM label="level" /> */}
                  <div className="p-2">
                    <label className="form-control">hero points</label>
                    <input
                      type="text"
                      className="form-control"
                      style={{ backgroundColor: "darksalmon" }}
                    ></input>
                  </div>
                  <div>
                    <Row>
                      <Col>
                        <div className="p-2">
                          <label className="form-control">size</label>
                          <input
                            type="text"
                            className="form-control"
                            style={{ backgroundColor: "darksalmon" }}
                          ></input>
                        </div>
                      </Col>
                      <Col>
                        <div className="p-2">
                          <label className="form-control">alignment</label>
                          <input
                            type="text"
                            className="form-control"
                            style={{ backgroundColor: "darksalmon" }}
                          ></input>
                        </div>
                      </Col>
                      <Col>
                        <div className="p-2">
                          <label className="form-control">traits</label>
                          <input
                            type="text"
                            className="form-control"
                            style={{ backgroundColor: "darksalmon" }}
                          ></input>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Stack>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default HeadingContainer;

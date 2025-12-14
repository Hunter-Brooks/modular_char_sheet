import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";

function AbilityScores() {
  const [Strength, setStrength] = useState("10");
  const [Dexterity, setDexterity] = useState("10");
  const [Constitution, setConstitution] = useState("10");
  const [Intellect, setIntellect] = useState("10");
  const [Wisdom, setWisdom] = useState("10");
  const [Charisma, setCharisma] = useState("10");

  const abilityMod = (score) =>
    score == undefined ? 0 : Math.floor((score - 10) / 2);

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <Container>
            <Col>
              <Row>
                <Col>Ability Scores</Col>
              </Row>
              <Row>
                <Col>
                  <Stack gap={5}>
                    <div className="p-2">{(Strength - 10) / 2}</div>
                    <div className="p-2">{(Dexterity - 10) / 2}</div>
                    <div className="p-2">{(Constitution - 10) / 2}</div>
                    <div className="p-2">{(Intellect - 10) / 2}</div>
                    <div className="p-2">{(Wisdom - 10) / 2}</div>
                    <div className="p-2">{(Charisma - 10) / 2}</div>
                  </Stack>
                </Col>
                <Col>
                  <Stack gap={1}>
                    <label className="form-control">Strength</label>
                    <input
                      type="text"
                      defaultValue={10}
                      className="form-control"
                      onChange={(e) => setStrength(e.target.value)}
                      value={Strength}
                    ></input>
                    <label className="form-control">Dexterity</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => setDexterity(e.target.value)}
                      value={Dexterity}
                    ></input>
                    <label className="form-control">Constitution</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => setConstitution(e.target.value)}
                      value={Constitution}
                    ></input>
                    <label className="form-control">Intellect</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => setIntellect(e.target.value)}
                      value={Intellect}
                    ></input>
                    <label className="form-control">Wisdom</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => setWisdom(e.target.value)}
                      value={Wisdom}
                    ></input>
                    <label className="form-control">Charisma</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => setCharisma(e.target.value)}
                      value={Charisma}
                    ></input>
                  </Stack>
                </Col>
              </Row>
            </Col>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default AbilityScores;

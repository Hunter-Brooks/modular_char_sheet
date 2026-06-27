import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import { formatSigned } from "../../utils/pf2eMath";

function AbilityScores({ abilities, abilityModifiers, onAbilityChange }) {
  const abilityFields = [
    { key: "strength", label: "Strength" },
    { key: "dexterity", label: "Dexterity" },
    { key: "constitution", label: "Constitution" },
    { key: "intellect", label: "Intellect" },
    { key: "wisdom", label: "Wisdom" },
    { key: "charisma", label: "Charisma" },
  ];

  return (
    <div>
      <div className="card section-card">
        <div className="card-body">
          <Container>
            <Col>
              <Row className="section-title">
                <Col>Ability Scores</Col>
              </Row>
              <Row>
                <Col>
                  <Stack gap={1}>
                    {abilityFields.map((ability) => (
                      <div key={`${ability.key}-mod`} className="field-group">
                        <div className="field-label">Modifier</div>
                        <div className="form-control stat-mod">
                          {formatSigned(abilityModifiers[ability.key])}
                        </div>
                      </div>
                    ))}
                  </Stack>
                </Col>
                <Col>
                  <Stack gap={1}>
                    {abilityFields.map((ability) => (
                      <div key={ability.key} className="field-group">
                        <label className="field-label">{ability.label}</label>
                        <input
                          type="number"
                          min={1}
                          className="form-control sheet-input"
                          value={abilities[ability.key]}
                          onChange={(event) =>
                            onAbilityChange(
                              ability.key,
                              Number(event.target.value || 0),
                            )
                          }
                        />
                      </div>
                    ))}
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

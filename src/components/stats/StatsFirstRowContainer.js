import React, { useMemo, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AbilityScores from "./AbilityScores";
import ClassDC from "./ClassDC";
import ArmorClass from "./ArmorClass";
import HitPoints from "./HitPoints";
import Perception from "./Perception";
import SavingThrows from "./SavingThrows";
import { getAbilityModifier } from "../../utils/pf2eMath";

function StatsFirstRowContainer() {
  const [level, setLevel] = useState(1);
  const [abilities, setAbilities] = useState({
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intellect: 10,
    wisdom: 10,
    charisma: 10,
  });

  const abilityModifiers = useMemo(
    () => ({
      strength: getAbilityModifier(abilities.strength),
      dexterity: getAbilityModifier(abilities.dexterity),
      constitution: getAbilityModifier(abilities.constitution),
      intellect: getAbilityModifier(abilities.intellect),
      wisdom: getAbilityModifier(abilities.wisdom),
      charisma: getAbilityModifier(abilities.charisma),
    }),
    [abilities]
  );

  const handleAbilityChange = (abilityName, abilityScore) => {
    setAbilities((previous) => ({
      ...previous,
      [abilityName]: abilityScore,
    }));
  };

  return (
    <div>
      <div className="card section-card">
        <div className="card-body">
          <Container>
            <Row className="mb-2">
              <Col md={4}>
                <div className="field-group mb-1">
                  <label className="field-label">Character Level</label>
                  <input
                    type="number"
                    min={1}
                    className="form-control sheet-input"
                    value={level}
                    onChange={(event) => setLevel(Number(event.target.value || 1))}
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <AbilityScores
                  abilities={abilities}
                  abilityModifiers={abilityModifiers}
                  onAbilityChange={handleAbilityChange}
                />
                <ClassDC level={level} abilityModifiers={abilityModifiers} />
              </Col>
              <Col>
                <ArmorClass level={level} dexterityModifier={abilityModifiers.dexterity} />
                <SavingThrows level={level} abilityModifiers={abilityModifiers} />
              </Col>
              <Col>
                <HitPoints />
                <Perception level={level} wisdomModifier={abilityModifiers.wisdom} />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default StatsFirstRowContainer;

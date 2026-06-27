import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProfRadios from "../ProfRadios";
import { formatSigned, getProficiencyBonus } from "../../utils/pf2eMath";

function SavingThrows({ level, abilityModifiers }) {
  const [fortitudeProf, setFortitudeProf] = useState("");
  const [reflexProf, setReflexProf] = useState("");
  const [willProf, setWillProf] = useState("");
  const [fortitudeItem, setFortitudeItem] = useState(0);
  const [reflexItem, setReflexItem] = useState(0);
  const [willItem, setWillItem] = useState(0);
  const [notes, setNotes] = useState("");

  const fortitude =
    (abilityModifiers.constitution ?? 0) +
    getProficiencyBonus(fortitudeProf, level) +
    Number(fortitudeItem || 0);
  const reflex =
    (abilityModifiers.dexterity ?? 0) +
    getProficiencyBonus(reflexProf, level) +
    Number(reflexItem || 0);
  const will =
    (abilityModifiers.wisdom ?? 0) +
    getProficiencyBonus(willProf, level) +
    Number(willItem || 0);

  const throwCards = [
    {
      key: "fortitude",
      label: "Fortitude",
      abilityLabel: "Con",
      abilityModifier: abilityModifiers.constitution ?? 0,
      total: fortitude,
      prof: fortitudeProf,
      setProf: setFortitudeProf,
      item: fortitudeItem,
      setItem: setFortitudeItem,
    },
    {
      key: "reflex",
      label: "Reflex",
      abilityLabel: "Dex",
      abilityModifier: abilityModifiers.dexterity ?? 0,
      total: reflex,
      prof: reflexProf,
      setProf: setReflexProf,
      item: reflexItem,
      setItem: setReflexItem,
    },
    {
      key: "will",
      label: "Will",
      abilityLabel: "Wis",
      abilityModifier: abilityModifiers.wisdom ?? 0,
      total: will,
      prof: willProf,
      setProf: setWillProf,
      item: willItem,
      setItem: setWillItem,
    },
  ];

  return (
    <div>
      <div className="card section-card">
        <div className="card-body">
          <Container>
            <Row className="section-title">
              <Col>Saving Throws</Col>
            </Row>
            <Row className="g-2">
              {throwCards.map((throwCard) => (
                <Col md={4} key={throwCard.key}>
                  <div className="card h-100">
                    <div className="card-body p-2">
                      <div className="field-label mb-1">{throwCard.label}</div>
                      <div className="form-control stat-mod mb-2">
                        {formatSigned(throwCard.total)}
                      </div>

                      <div className="field-group mb-2">
                        <label className="field-label">
                          {throwCard.abilityLabel}
                        </label>
                        <div className="form-control stat-mod">
                          {formatSigned(throwCard.abilityModifier)}
                        </div>
                      </div>

                      <div className="field-group mb-2">
                        <label className="field-label">Proficiency</label>
                        <ProfRadios
                          value={throwCard.prof}
                          onChange={throwCard.setProf}
                          name={`${throwCard.key}-prof`}
                        />
                      </div>

                      <div className="field-group mb-0">
                        <label className="field-label">ITEM/OTHER</label>
                        <input
                          type="number"
                          className="form-control sheet-input"
                          value={throwCard.item}
                          onChange={(event) =>
                            throwCard.setItem(Number(event.target.value || 0))
                          }
                        />
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
            <Row className="mt-2">
              <Col>
                <label className="field-label">Notes</label>
                <input
                  type="text"
                  className="form-control sheet-input"
                  value={notes}
                  onChange={(event) => setNotes(event.target.value)}
                />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default SavingThrows;

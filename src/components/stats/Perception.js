import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProfRadios from "../ProfRadios";
import { formatSigned, getProficiencyBonus } from "../../utils/pf2eMath";

function Perception({ level, wisdomModifier }) {
  const [prof, setProf] = useState("");
  const [itemBonus, setItemBonus] = useState(0);
  const [senses, setSenses] = useState("");

  const proficiencyBonus = getProficiencyBonus(prof, level);
  const perceptionTotal =
    wisdomModifier + proficiencyBonus + Number(itemBonus || 0);

  return (
    <div className="card section-card">
      <div className="card-body">
        <Container>
          <Row className="section-title">
            <Col>Perception</Col>
          </Row>
          <Row className="g-2 align-items-end">
            <Col xs={12} md={4}>
              <div className="field-group mb-0">
                <label className="field-label">Total</label>
                <div className="form-control stat-mod">
                  {formatSigned(perceptionTotal)}
                </div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="field-group mb-0">
                <label className="field-label">Wisdom</label>
                <div className="form-control stat-mod">
                  {formatSigned(wisdomModifier)}
                </div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="field-group mb-0">
                <label className="field-label">ITEM/OTHER</label>
                <input
                  type="number"
                  className="form-control sheet-input"
                  value={itemBonus}
                  onChange={(event) =>
                    setItemBonus(Number(event.target.value || 0))
                  }
                />
              </div>
            </Col>
          </Row>

          <Row className="mt-2">
            <Col xs={12}>
              <div className="field-group mb-0">
                <label className="field-label">Proficiency</label>
                <ProfRadios
                  value={prof}
                  onChange={setProf}
                  name="perception-prof"
                />
              </div>
            </Col>
          </Row>

          <Row className="mt-2">
            <Col>
              <div className="field-group mb-0">
                <label className="field-label">Senses</label>
                <input
                  type="text"
                  className="form-control sheet-input"
                  value={senses}
                  onChange={(event) => setSenses(event.target.value)}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Perception;

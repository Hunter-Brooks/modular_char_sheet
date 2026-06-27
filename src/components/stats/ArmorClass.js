import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProfRadios from "../ProfRadios";
import { getProficiencyBonus } from "../../utils/pf2eMath";

function ArmorClass({ level, dexterityModifier }) {
  const [profRank, setProfRank] = useState("");
  const [itemBonus, setItemBonus] = useState(0);
  const [armor, setArmor] = useState("");

  const proficiencyBonus = getProficiencyBonus(profRank, level);
  const acTotal =
    10 +
    Number(dexterityModifier || 0) +
    proficiencyBonus +
    Number(itemBonus || 0);

  return (
    <div>
      <div className="card section-card">
        <div className="card-body">
          <Container>
            <Col>
              <Row className="section-title">Armor Class</Row>
              <Row className="g-2 align-items-end">
                <Col xs={12} md={4}>
                  <div className="field-group mb-0">
                    <label className="field-label">AC</label>
                    <div className="form-control stat-mod">{acTotal}</div>
                  </div>
                </Col>
                <Col xs={12} md={4}>
                  <div className="field-group mb-0">
                    <label className="field-label">Dex</label>
                    <div className="form-control stat-mod">{dexterityModifier ?? 0}</div>
                  </div>
                </Col>
                <Col xs={12} md={4}>
                  <div className="field-group mb-0">
                    <label className="field-label">ITEM/OTHER</label>
                    <input
                      type="number"
                      className="form-control sheet-input"
                      value={itemBonus}
                      onChange={(event) => setItemBonus(Number(event.target.value || 0))}
                    ></input>
                  </div>
                </Col>
              </Row>

              <Row className="g-2 mt-1">
                <Col xs={12}>
                  <label className="field-label">ARMOR</label>
                  <input
                    type="text"
                    className="form-control sheet-input"
                    value={armor}
                    onChange={(event) => setArmor(event.target.value)}
                  ></input>
                </Col>
              </Row>

              <Row className="g-2 mt-1">
                <Col xs={12}>
                  <label className="field-label">Proficiency Rank</label>
                  <ProfRadios value={profRank} onChange={setProfRank} name="ac-prof" />
                </Col>
              </Row>
            </Col>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default ArmorClass;

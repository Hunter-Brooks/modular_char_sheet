import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProfRadios from "../ProfRadios";
import { formatSigned, getProficiencyBonus } from "../../utils/pf2eMath";

// function ClassDC() {
//   return (
//     <div>
//       <div className="card">
//         <div className="card-body">
//           <Container>
//             <Row>
//               <Col xs={3}>Class DC</Col>
//             </Row>
//             <Row>
//               <Col xs={3}>
//                 <div xs={3}>DC</div>
//                 <div xs={3}>
//                   <ProfRadios></ProfRadios>
//                 </div>
//               </Col>
//               <Col xs={3}>
//                 <label className="form-control">Key</label>
//                 <input type="text" className="form-control"></input>
//               </Col>
//               <Col xs={3}>
//                 <label className="form-control">Prof</label>
//                 <input type="text" className="form-control"></input>
//               </Col>
//               <Col xs={3}>
//                 <label className="form-control">Item</label>
//                 <input type="text" className="form-control"></input>
//               </Col>
//             </Row>
//           </Container>
//         </div>
//       </div>
//     </div>
//   );
// }

function ClassDC({ level, abilityModifiers }) {
  const [prof, setProf] = useState("");
  const [keyAbility, setKeyAbility] = useState("intellect");
  const [itemBonus, setItemBonus] = useState(0);

  const proficiencyBonus = getProficiencyBonus(prof, level);
  const keyModifier = abilityModifiers[keyAbility] ?? 0;
  const classDc = 10 + keyModifier + proficiencyBonus + Number(itemBonus || 0);

  const keyAbilityOptions = [
    { label: "Strength", value: "strength" },
    { label: "Dexterity", value: "dexterity" },
    { label: "Constitution", value: "constitution" },
    { label: "Intellect", value: "intellect" },
    { label: "Wisdom", value: "wisdom" },
    { label: "Charisma", value: "charisma" },
  ];

  return (
    <div className="card section-card">
      <div className="card-body">
        <Container>
          <Row className="section-title">
            <Col>
              <div>Class DC</div>
            </Col>
          </Row>

          <Row className="align-items-end g-2">
            <Col xs={12} md={4}>
              <div className="field-group mb-0">
                <label className="field-label">DC</label>
                <div className="form-control stat-mod">{classDc}</div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="field-group mb-0">
                <label className="field-label">Key Mod</label>
                <select
                  className="form-select sheet-input"
                  value={keyAbility}
                  onChange={(event) => setKeyAbility(event.target.value)}
                >
                  {keyAbilityOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label} (
                      {formatSigned(abilityModifiers[option.value] ?? 0)})
                    </option>
                  ))}
                </select>
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
                  name="classdc-prof"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default ClassDC;

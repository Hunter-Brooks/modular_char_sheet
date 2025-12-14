import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProfRadios from "../ProfRadios";

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

function ClassDC() {
  const [DC, setDC] = useState("10");
  const [prof, setProf] = useState("");

  return (
    <div className="card">
      <div className="card-body">
        <Container>
          {/* Title Row */}
          <Row className="mb-3">
            <Col>
              <h5>Class DC</h5>
            </Col>
          </Row>

          {/* Inputs Row */}
          <Row className="align-items-center">
            {/* DC / ProfRadios */}
            <Col xs={3}>
              <Row className="align-items-center">
                <label className="form-label">DC</label>
              </Row>
              <Row className="align-items-center">
                <label className="form-label">{DC}</label>
              </Row>
            </Col>

            {/* Key */}
            <Col xs={3} className="d-flex flex-column">
              <label className="form-label">Key</label>
              <input type="text" className="form-control" />
            </Col>

            {/* Prof */}
            <Col xs={3} className="d-flex flex-column">
              <label className="form-label">Prof</label>
              <ProfRadios value={prof} onChange={setProf} />
            </Col>

            {/* Item */}
            <Col xs={3} className="d-flex flex-column">
              <label className="form-label">Item</label>
              <input type="text" className="form-control" />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default ClassDC;

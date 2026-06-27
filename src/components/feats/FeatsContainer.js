import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NewFeatForm from "./NewFeatForm";
import FeatTable from "./FeatTable";

function FeatsContainer() {
  const [showAddFeat, setShowAddFeat] = useState(false);

  const [feats, setFeats] = useState([]);

  const addFeat = (level, type, name, description) => {
    const rowNumber =
      feats.length > 0 ? feats[feats.length - 1].rowNumber + 1 : 1;

    const newFeat = {
      rowNumber,
      rowLevel: level,
      rowType: type,
      rowName: name,
      rowDescription: description,
    };

    setFeats((previousFeats) => [...previousFeats, newFeat]);
  };

  const deleteFeat = (deleteFeatRowNumber) => {
    let filtered = feats.filter(function (value) {
      return value.rowNumber !== deleteFeatRowNumber;
    });
    setFeats(filtered);
  };

  const leftColumnTypes = ["Ancestry", "Skill", "General"];
  const rightColumnTypes = ["Class", "Bonus"];

  return (
    <div className="container p-0">
      <div className="card section-card">
        <div className="card-header">FEATS</div>
        <div className="card-body">
          <Container fluid>
            <Row>
              <Col md={6}>
                {leftColumnTypes.map((type) => (
                  <FeatTable
                    key={type}
                    type={type}
                    feats={feats}
                    deleteFeat={deleteFeat}
                  />
                ))}
              </Col>
              <Col md={6}>
                {rightColumnTypes.map((type) => (
                  <FeatTable
                    key={type}
                    type={type}
                    feats={feats}
                    deleteFeat={deleteFeat}
                  />
                ))}
              </Col>
            </Row>
          </Container>
          <p className="mb-2 text-muted">Click a feat row to remove it.</p>
          <button
            className="btn btn-primary"
            onClick={() => setShowAddFeat(!showAddFeat)}
          >
            {showAddFeat ? "Close" : "Add Feat"}
          </button>
          {showAddFeat && <NewFeatForm addFeat={addFeat} />}
        </div>
      </div>
    </div>
  );
}

export default FeatsContainer;

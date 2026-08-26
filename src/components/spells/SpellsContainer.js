import React, { useState } from "react";
import NewSpellForm from "./NewSpellForm";
import SpellTable from "./SpellTable";

function SpellsContainer({ spells, onSpellsChange }) {
  const [showAddSpell, setShowAddSpell] = useState(false);

  const addSpell = (level, name, description) => {
    const rowNumber =
      spells.length > 0 ? spells[spells.length - 1].rowNumber + 1 : 1;

    const newSpell = {
      rowNumber,
      rowLevel: level,
      rowName: name,
      rowDescription: description,
    };

    onSpellsChange([...spells, newSpell]);
  };

  const deleteSpell = (deleteSpellRowNumber) => {
    let filtered = spells.filter(function (value) {
      return value.rowNumber !== deleteSpellRowNumber;
    });
    onSpellsChange(filtered);
  };

  return (
    <div className="container p-0">
      <div className="card section-card">
        <div className="card-header">SPELLS</div>
        <div className="card-body">
          <SpellTable spells={spells} deleteSpell={deleteSpell} />
          <p className="mb-2 text-muted">Click a spell row to remove it.</p>
          <button
            className="btn btn-primary"
            onClick={() => setShowAddSpell(!showAddSpell)}
          >
            {showAddSpell ? "Close" : "Add Spell"}
          </button>
          {showAddSpell && <NewSpellForm addSpell={addSpell} />}
        </div>
      </div>
    </div>
  );
}

export default SpellsContainer;

import React, { useState } from "react";
import NewSpellForm from "./NewSpellForm";
import SpellTable from "./SpellTable";

function SpellsContainer() {
  const [showAddSpell, setShowAddSpell] = useState(false);

  const [spells, setSpells] = useState([
    {
      rowNumber: 1,
      rowLevel: "1",
      rowName: "Fireball",
      rowDescription: "asdasdasd",
    },
    {
      rowNumber: 2,
      rowLevel: "1",
      rowName: "Message",
      rowDescription: "asdasdasd",
    },
    {
      rowNumber: 3,
      rowLevel: "2",
      rowName: "Fly",
      rowDescription: "asdasdasd",
    },
    {
      rowNumber: 4,
      rowLevel: "2",
      rowName: "Heal",
      rowDescription: "asdasdasd",
    },
  ]);

  const addSpell = (level, name, description) => {
    const rowNumber = spells.length > 0 ? spells[spells.length - 1].rowNumber + 1 : 1;

    const newSpell = {
      rowNumber,
      rowLevel: level,
      rowName: name,
      rowDescription: description,
    };

    setSpells((previousSpells) => [...previousSpells, newSpell]);
  };

  const deleteSpell = (deleteSpellRowNumber) => {
    let filtered = spells.filter(function (value) {
      return value.rowNumber !== deleteSpellRowNumber;
    });
    setSpells(filtered);
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

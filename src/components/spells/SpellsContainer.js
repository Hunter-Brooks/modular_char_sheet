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
    let rowNumber = 0;
    if (spells.length > 0) {
      rowNumber = spells[spells.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
    if (spells.length > 0) {
      const newSpell = {
        rowNumber: rowNumber,
        rowlevel: level,
        rowname: name,
        rowdescription: description,
      };
      setSpells((spells) => [...spells, newSpell]);
    }
  };

  const deleteSpell = (deleteSpellRowNumber) => {
    let filtered = spells.filter(function (value) {
      return value.rowNumber !== deleteSpellRowNumber;
    });
    setSpells(filtered);
  };

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">SPELLS</div>
        <div className="card-body">
          <SpellTable spells={spells} deleteSpell={deleteSpell} />
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

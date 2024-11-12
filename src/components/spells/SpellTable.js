import Spell from "./Spell.js";

function SpellTable(props) {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Level</th>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
        </tr>
      </thead>
      <tbody>
        {props.spells.map((spell) => (
          <Spell
            key={spell.rowNumber}
            rowNumber={spell.rowNumber}
            rowLevel={spell.rowLevel}
            rowName={spell.rowName}
            rowDescription={spell.rowDescription}
            deleteSpell={props.deleteSpell}
          />
        ))}
      </tbody>
    </table>
  );
}

export default SpellTable;

function Spell(props) {
  return (
    <tr onClick={() => props.deleteSpell(props.rowNumber)}>
      <th scope="row">{props.rowNumber}</th>
      <td>{props.rowLevel}</td>
      <td>{props.rowName}</td>
      <td>{props.rowDescription}</td>
    </tr>
  );
}

export default Spell;

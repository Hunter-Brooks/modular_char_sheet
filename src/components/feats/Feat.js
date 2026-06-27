function Feat(props) {
  return (
    <tr onClick={() => props.deleteFeat(props.rowNumber)}>
      <td>{props.rowLevel}</td>
      <td>{props.rowName}</td>
      <td>{props.rowDescription}</td>
    </tr>
  );
}

export default Feat;

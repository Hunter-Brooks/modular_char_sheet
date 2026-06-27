import Feat from "./Feat.js";

function FeatTable(props) {
  const featsByType = props.feats.filter((feat) => feat.rowType === props.type);

  return (
    <div className="mb-4">
      <h5 className="mb-3">{props.type} Feats</h5>
      {featsByType.length > 0 ? (
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Level</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            {featsByType.map((feat) => (
              <Feat
                key={feat.rowNumber}
                rowNumber={feat.rowNumber}
                rowLevel={feat.rowLevel}
                rowName={feat.rowName}
                rowDescription={feat.rowDescription}
                deleteFeat={props.deleteFeat}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-muted">No {props.type.toLowerCase()} feats added yet.</p>
      )}
    </div>
  );
}

export default FeatTable;

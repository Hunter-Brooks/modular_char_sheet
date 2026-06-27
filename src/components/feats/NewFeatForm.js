import React, { useState } from "react";

function NewFeatForm(props) {
  const [level, setLevel] = useState("");
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const featTypes = ["Ancestry", "Skill", "General", "Class", "Bonus"];

  const submitFeat = () => {
    if (level !== "" && type !== "" && name !== "" && description !== "") {
      props.addFeat(level, type, name, description);
      setLevel("");
      setType("");
      setName("");
      setDescription("");
    }
  };

  return (
    <div className="mt-5">
      <form>
        <div className="mb-3">
          <label className="field-label">Level</label>
          <input
            type="text"
            className="form-control sheet-input"
            required
            onChange={(e) => setLevel(e.target.value)}
            value={level}
          ></input>
        </div>
        <div className="mb-3">
          <label className="field-label">Type</label>
          <select
            className="form-control sheet-input"
            required
            onChange={(e) => setType(e.target.value)}
            value={type}
          >
            <option value="">-- Select a type --</option>
            {featTypes.map((featType) => (
              <option key={featType} value={featType}>
                {featType}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label className="field-label">Name</label>
          <textarea
            className="form-control sheet-input"
            rows={3}
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="field-label">Description</label>
          <textarea
            className="form-control sheet-input"
            rows={3}
            required
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary mt-3"
          onClick={submitFeat}
        >
          Add Feat
        </button>
      </form>
    </div>
  );
}

export default NewFeatForm;

import React, { useState } from "react";

function NewSpellForm(props) {
  const [level, setLevel] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  console.log(level, name, description);

  const submitSpell = () => {
    if (level !== "" && name !== "" && description !== "") {
      props.addSpell(level, name, description);
      setLevel("");
      setName("");
      setDescription("");
    }
  };

  return (
    <div className="mt-5">
      <form>
        <div className="mb=3">
          <label className="form-control">Level</label>
          <input
            type="text"
            className="form-control"
            required
            onChange={(e) => setLevel(e.target.value)}
            value={level}
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-control">Name</label>
          <textarea
            className="form-control"
            rows={3}
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-control">Description</label>
          <textarea
            className="form-control"
            rows={3}
            required
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary mt-3"
          onClick={submitSpell}
        >
          Add Spell
        </button>
      </form>
    </div>
  );
}

export default NewSpellForm;

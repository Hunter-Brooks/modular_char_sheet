// import React from "react";

// function ProfRadios() {
//   return (
//     <div
//       class="btn-group"
//       role="group"
//       aria-label="Basic radio toggle button group"
//     >
//       <input
//         type="radio"
//         class="btn-check"
//         name="btnradio"
//         id="btnradio1"
//         autocomplete="off"
//         checked
//       />
//       <label class="btn btn-outline-primary" for="btnradio1">
//         T
//       </label>

//       <input
//         type="radio"
//         class="btn-check"
//         name="btnradio"
//         id="btnradio2"
//         autocomplete="off"
//       />
//       <label class="btn btn-outline-primary" for="btnradio2">
//         E
//       </label>

//       <input
//         type="radio"
//         class="btn-check"
//         name="btnradio"
//         id="btnradio3"
//         autocomplete="off"
//       />
//       <label class="btn btn-outline-primary" for="btnradio3">
//         M
//       </label>

//       <input
//         type="radio"
//         class="btn-check"
//         name="btnradio"
//         id="btnradio3"
//         autocomplete="off"
//       />
//       <label class="btn btn-outline-primary" for="btnradio3">
//         L
//       </label>
//     </div>
//   );
// }

import React, { useId, useState } from "react";

function ProfRadios({ value, onChange, name }) {
  const generatedName = useId();
  const groupName = name || generatedName;
  const [internalValue, setInternalValue] = useState("");

  const isControlled = value !== undefined;
  const selectedValue = isControlled ? value : internalValue;

  const handleChange = (nextValue) => {
    if (isControlled) {
      onChange?.(nextValue);
      return;
    }

    setInternalValue(nextValue);
    onChange?.(nextValue);
  };

  const options = [
    { label: "T", val: "T" },
    { label: "E", val: "E" },
    { label: "M", val: "M" },
    { label: "L", val: "L" },
  ];

  return (
    <div className="btn-group btn-group-sm prof-radios" role="group" aria-label="Prof">
      {options.map((opt, idx) => (
        <React.Fragment key={opt.val}>
          <input
            type="radio"
            className="btn-check"
            name={groupName}
            id={`${groupName}-${idx}`}
            autoComplete="off"
            value={opt.val}
            checked={selectedValue === opt.val}
            onChange={() => handleChange(opt.val)}
          />
          <label
            className="btn btn-outline-primary"
            htmlFor={`${groupName}-${idx}`}
          >
            {opt.label}
          </label>
        </React.Fragment>
      ))}
    </div>
  );
}

export default ProfRadios;

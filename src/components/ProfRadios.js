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

import { useState } from "react";
import React from "react";

function ProfRadios({ value, onChange }) {
  const options = [
    { label: "T", val: "T" },
    { label: "E", val: "E" },
    { label: "M", val: "M" },
    { label: "L", val: "L" },
  ];

  return (
    <div className="btn-group btn-group-sm" role="group" aria-label="Prof">
      {options.map((opt, idx) => (
        <React.Fragment key={opt.val}>
          <input
            type="radio"
            className="btn-check"
            name="profRadios"
            id={`profRadio${idx}`}
            autoComplete="off"
            value={opt.val}
            checked={value === opt.val}
            onChange={() => onChange(opt.val)}
          />
          <label
            className="btn btn-outline-primary"
            htmlFor={`profRadio${idx}`}
          >
            {opt.label}
          </label>
        </React.Fragment>
      ))}
    </div>
  );
}

export default ProfRadios;

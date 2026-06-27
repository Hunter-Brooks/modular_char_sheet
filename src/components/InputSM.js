import React from "react";
import styled from "styled-components";

const InputSmall = styled.input`
  width: 10em;
`;

function InputSM(props) {
  return (
    <div>
      <label htmlFor="inputsm">{props.label}</label>
      <InputSmall className="form-control input-sm" id="inputsm" type="text" />
    </div>
  );
}

export default InputSM;

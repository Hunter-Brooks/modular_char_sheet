import React from "react";
import styled from "styled-components";

const inputSM = styled.input`
  width: 10em;
`;

function InputSM(props) {
  return (
    <div>
      <label for="inputsm">{props.label}</label>
      <inputSM class="form-control input-sm" id="inputsm" type="text" />
    </div>
  );
}

export default InputSM;

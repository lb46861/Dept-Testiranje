import React from "react";

const InputField = ({ onKeyUp }) => {
  return (
    <label>
      <h5>Input HEX: </h5>
      <input id="inputText" type="text" onKeyUp={onKeyUp} />
    </label>
  );
};

export default InputField;

import React from "react";

const InputField = ({ onKeyDown }) => {
  return (
    <form>
      <label>
        Input HEX color :
        <input id="inputText" type="text" onKeyDown={onKeyDown} />
      </label>
    </form>
  );
};

export default InputField;

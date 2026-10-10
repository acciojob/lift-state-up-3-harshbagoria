
import React from "react";

function ChildComponent1({ selectedOption, handleOptionChange }) {
  return (
    <div>
      <button onClick={() => handleOptionChange("Option 1")}>
        Select Option 1
      </button>
    </div>
  );
}

export default ChildComponent1;

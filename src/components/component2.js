
import React from "react";

function ChildComponent2({ selectedOption, handleOptionChange }) {
  return (
    <div>
      <button onClick={() => handleOptionChange("Option 2")}>
        Select Option 2
      </button>
    </div>
  );
}

export default ChildComponent2;
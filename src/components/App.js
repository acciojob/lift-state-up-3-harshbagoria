import React, { useState } from "react";
import "./App.css";
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";

function App() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="parent">
      <h1>Selected Option: {selectedOption || "None"}</h1>

      <ChildComponent1
        selectedOption={selectedOption}
        handleOptionChange={handleOptionChange}
      />

      <ChildComponent2
        selectedOption={selectedOption}
        handleOptionChange={handleOptionChange}
      />
    </div>
  );
}

export default App;
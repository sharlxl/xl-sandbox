import React, { useState } from "react";
import NumPad from "./NumPad";
import "../calculator.css";

const Calculator = () => {
  const [prevOperand, setPrevOperand] = useState("");
  const [currOperand, setCurrOperand] = useState("");

  return (
    <div className="calculator-container">
      <div className="calculator-display">
        <div className="calculator-prev-operand">{prevOperand}</div>
        <div className="calculator-curr-operand">{currOperand}</div>
      </div>
      <NumPad
        prevOperand={prevOperand}
        setPrevOperand={setPrevOperand}
        currOperand={currOperand}
        setCurrOperand={setCurrOperand}
      />
    </div>
  );
};

export default Calculator;

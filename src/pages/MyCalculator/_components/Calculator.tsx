import React, { useState } from "react";
import NumPad from "./NumPad";

const Calculator = () => {
  const [prevOperand, setPrevOperand] = useState("");
  const [currOperand, setCurrOperand] = useState("");

  return (
    <div className="calculator-container">
      <div>
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

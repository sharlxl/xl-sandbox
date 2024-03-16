import React from "react";
import "../calculator.css";

const NumPad = ({
  prevOperand,
  setPrevOperand,
  currOperand,
  setCurrOperand,
}: any) => {
  const onClickNumber = (e: any) => {
    setCurrOperand((prev: string) => prev + e.target.value);
  };

  const onClickAllClear = () => {
    setCurrOperand("");
    setPrevOperand("");
  };

  const onClickDel = () => {
    setCurrOperand((prev: string) => prev.substring(0, prev.length - 1));
  };

  const onClickOperation = (e: any) => {
    setPrevOperand(currOperand + " " + e.target.value);
    setCurrOperand("");
  };

  const onClickEqual = (e: any) => {
    const splitArr = prevOperand.split(" ");
    setPrevOperand("");
    if (splitArr[1] === "addition") {
      setCurrOperand("" + (Number(splitArr[0]) + Number(currOperand)));
    } else if (splitArr[1] === "subtract") {
      setCurrOperand("" + (Number(splitArr[0]) - Number(currOperand)));
    } else if (splitArr[1] === "mulitply") {
      setCurrOperand("" + Number(splitArr[0]) * Number(currOperand));
    } else if (splitArr[1] === "divide") {
      setCurrOperand("" + Number(splitArr[0]) / Number(currOperand));
    }
  };

  return (
    <div className="calculator-numpad">
      <button className="numpad-one" value={1} onClick={onClickNumber}>
        1
      </button>
      <button className="numpad-two" value={2} onClick={onClickNumber}>
        2
      </button>
      <button className="numpad-three " value={3} onClick={onClickNumber}>
        3
      </button>
      <button className="numpad-four" value={4} onClick={onClickNumber}>
        4
      </button>
      <button className="numpad-five" value={5} onClick={onClickNumber}>
        5
      </button>
      <button className="numpad-six" value={6} onClick={onClickNumber}>
        6
      </button>
      <button className="numpad-seven" value={7} onClick={onClickNumber}>
        7
      </button>
      <button className="numpad-eight" value={8} onClick={onClickNumber}>
        8
      </button>
      <button className="numpad-nine" value={9} onClick={onClickNumber}>
        9
      </button>
      <button className="numpad-zero" value={0} onClick={onClickNumber}>
        0
      </button>
      <button className="numpad-dot" value="." onClick={onClickNumber}>
        .
      </button>
      <button className="numpad-ac" onClick={onClickAllClear}>
        AC
      </button>
      <button className="numpad-del" onClick={onClickDel}>
        DEL
      </button>
      <button
        className="numpad-add"
        value="addition"
        onClick={onClickOperation}
      >
        +
      </button>
      <button
        className="numpad-subtrac"
        value="subtract"
        onClick={onClickOperation}
      >
        -
      </button>
      <button
        className="numpad-multiply"
        value="multiply"
        onClick={onClickOperation}
      >
        *
      </button>
      <button
        className="numpad-divide"
        value="divide"
        onClick={onClickOperation}
      >
        /
      </button>
      <button className="numpad-equal" value="equal" onClick={onClickEqual}>
        =
      </button>
    </div>
  );
};

export default NumPad;

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
      const mresult = Number(splitArr[0]) * Number(currOperand);
      setCurrOperand("" + mresult);
    } else if (splitArr[1] === "divide") {
      const dresult = Number(splitArr[0]) / Number(currOperand);
      setCurrOperand("" + dresult);
    }
  };

  return (
    <div className="calculator-numpad">
      <button
        className="numpad-button numpad-one"
        value={1}
        onClick={onClickNumber}
      >
        1
      </button>
      <button
        className="numpad-button numpad-two"
        value={2}
        onClick={onClickNumber}
      >
        2
      </button>
      <button
        className="numpad-button numpad-three "
        value={3}
        onClick={onClickNumber}
      >
        3
      </button>
      <button
        className="numpad-button numpad-four"
        value={4}
        onClick={onClickNumber}
      >
        4
      </button>
      <button
        className="numpad-button numpad-five"
        value={5}
        onClick={onClickNumber}
      >
        5
      </button>
      <button
        className="numpad-button numpad-six"
        value={6}
        onClick={onClickNumber}
      >
        6
      </button>
      <button
        className="numpad-button numpad-seven"
        value={7}
        onClick={onClickNumber}
      >
        7
      </button>
      <button
        className="numpad-button numpad-eight"
        value={8}
        onClick={onClickNumber}
      >
        8
      </button>
      <button
        className="numpad-button numpad-nine"
        value={9}
        onClick={onClickNumber}
      >
        9
      </button>
      <button
        className="numpad-button numpad-zero"
        value={0}
        onClick={onClickNumber}
      >
        0
      </button>
      <button
        className="numpad-button numpad-dot"
        value="."
        onClick={onClickNumber}
      >
        .
      </button>
      <button className="numpad-button numpad-ac" onClick={onClickAllClear}>
        AC
      </button>
      <button className="numpad-button numpad-del" onClick={onClickDel}>
        DEL
      </button>
      <button
        className="numpad-button numpad-add"
        value="addition"
        onClick={onClickOperation}
      >
        +
      </button>
      <button
        className="numpad-button numpad-subtrac"
        value="subtract"
        onClick={onClickOperation}
      >
        -
      </button>
      <button
        className="numpad-button numpad-multiply"
        value="mulitply"
        onClick={onClickOperation}
      >
        *
      </button>
      <button
        className="numpad-button numpad-divide"
        value="divide"
        onClick={onClickOperation}
      >
        /
      </button>
      <button
        className="numpad-button numpad-equal"
        value="equal"
        onClick={onClickEqual}
      >
        =
      </button>
    </div>
  );
};

export default NumPad;

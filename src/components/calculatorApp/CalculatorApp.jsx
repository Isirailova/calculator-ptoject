import React, { useState } from "react";
import CustomButton from "../customButton/CustomButton";
import "./calculatorApp.style.css";

const CalculatorApp = () => {
  const [input, setInput] = useState("");
  const [total, setTotal] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const getResult = () => {
    if (input) {
      const result = eval(input);
      setTotal(result);
      setInput(result);
      setIsClicked(true);
    }
  };

  const clickNumber = (number) => {
    setInput((prevInput) => prevInput + number);
    setIsClicked(false);
  };

  const clickClear = () => {
    setInput("");
    setIsClicked(false);
  };

  const backspace = () => {
    setInput(input.slice(0, -1));
  };

  return (
    <div className="container">
      <form>
        <input type="text" value={isClicked ? total : input}></input>
      </form>
      <div className="buttons">
        <CustomButton
          className="operator clear"
          onClickHandler={clickClear}
          text={"Clear"}
        />
        <CustomButton
          onClickHandler={backspace}
          text={"C"}
          className="operator"
        />
        <CustomButton
          onClickHandler={() => clickNumber("/")}
          text={"/"}
          className="operator"
        />
        <CustomButton onClickHandler={() => clickNumber("7")} text={"7"} />
        <CustomButton onClickHandler={() => clickNumber("8")} text={"8"} />
        <CustomButton onClickHandler={() => clickNumber("9")} text={"9"} />
        <CustomButton
          onClickHandler={() => clickNumber("*")}
          text={"*"}
          className="operator"
        />
        <CustomButton onClickHandler={() => clickNumber("4")} text={"4"} />
        <CustomButton onClickHandler={() => clickNumber("5")} text={"5"} />
        <CustomButton onClickHandler={() => clickNumber("6")} text={"6"} />
        <CustomButton
          onClickHandler={() => clickNumber("-")}
          text={"-"}
          className="operator"
        />
        <CustomButton onClickHandler={() => clickNumber("1")} text={"1"} />
        <CustomButton onClickHandler={() => clickNumber("2")} text={"2"} />
        <CustomButton onClickHandler={() => clickNumber("3")} text={"3"} />
        <CustomButton
          onClickHandler={() => clickNumber("+")}
          text={"+"}
          className="operator"
        />
        <CustomButton onClickHandler={() => clickNumber("0")} text={"0"} />
        <CustomButton onClickHandler={() => clickNumber(".")} text={"."} />
        <CustomButton
          onClickHandler={getResult}
          className="operator result"
          text={"="}
        />
      </div>
    </div>
  );
};

export default CalculatorApp;

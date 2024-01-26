import React from "react";
import "./customButton.style.css";

const CustomButton = ({ className, onClickHandler, text }) => {
  return (
    <button className={className} onClick={onClickHandler}>
      {text}
    </button>
  );
};

export default CustomButton;

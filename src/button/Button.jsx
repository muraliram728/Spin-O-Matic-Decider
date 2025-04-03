import React from "react";
import "./Button.css"; // Import CSS file for styling

const MyButton = ({ text, onClick, className }) => {
  return (
    <button className={`my-button ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default MyButton;

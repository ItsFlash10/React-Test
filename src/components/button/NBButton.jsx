import React from "react";

import "./NBButton.scss";

function NBButton(props) {
  const { buttonText, className } = props;
  const handleButtonAlert = () => {
    alert(`${buttonText} button is clicked`);
  }
  return (
    <button onClick={handleButtonAlert} className={`nb-button ${className}`}>
      {buttonText}
    </button>
  );
}

export default NBButton;

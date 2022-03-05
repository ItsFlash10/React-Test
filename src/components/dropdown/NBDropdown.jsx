import React from "react";

import "./NBDropdown.scss";

function NBDropdown() {
  const DROPDOWN_OPTIONS = ["Insights", "Locations"];

  const renderOptions = () =>
    DROPDOWN_OPTIONS.map((option) => {
      return <div className="option">{option}</div>;
    });
  return <div className="nb-dropdown">{renderOptions()}</div>;
}

export default NBDropdown;

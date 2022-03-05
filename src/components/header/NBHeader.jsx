import React, { useState } from "react";

import NBButton from "../button/NBButton";
import NBDropdown from "../dropdown/NBDropdown";

import { HEADER_OPTIONS, BUTTONS_INFO } from "./header.const";

import "./NBHeader.scss";

import logo from "../../assets/logo.svg";
import burgerMenu from "../../assets/burgerMenu.svg";
import closeBtn from "../../assets/closeBtn.svg";
import dotBtn from "../../assets/dotBtn.svg";

function NBHeader() {
  const [isDropdownActive, setDropdownActive] = useState(false);
  const [isThreeDotActive, setThreeDotActive] = useState(false);

  const handleIcon = isDropdownActive ? closeBtn : burgerMenu;
  const toggleClassForDropDown = isDropdownActive ? "" : "hidden";

  const handleClick = () => {
    setDropdownActive(!isDropdownActive);
  };

  const handleClickForThreeDot = () => {
    setThreeDotActive(!isThreeDotActive);
  };

  const renderHeaderOptions = () =>
    HEADER_OPTIONS.map((data) => {
      const { title, className } = data;
      return (
        <div key={title} className={className}>
          {title}
        </div>
      );
    });

  const renderLoginButtons = () =>
    BUTTONS_INFO.map((data) => {
      const { buttonText, className } = data;
      return (
        <NBButton
          key={buttonText}
          buttonText={buttonText}
          className={className}
        />
      );
    });

  return (
    <>
      <div className="header">
        <div className="header-title-holder">
          <img className="logo" src={logo} alt="logo" />
          <span className="title">Waterdrop</span>
        </div>
        <img
          onClick={handleClick}
          className={`burger-option`}
          src={handleIcon}
          alt="burger-menu"
        />
        <div className="tablet-options">
          {renderHeaderOptions()}
          <img
            onClick={handleClickForThreeDot}
            src={dotBtn}
            alt="dot-btn"
            className="dot-btn"
          />
        </div>
        <div className="tablet-login-buttons">{renderLoginButtons()}</div>
      </div>
      {/* For mobile */}
      <div className={`drop-down ${toggleClassForDropDown}`}>
        {renderHeaderOptions()}
        <div className="login-buttons">{renderLoginButtons()}</div>
      </div>
      {isThreeDotActive && <NBDropdown />}
    </>
  );
}

export default NBHeader;

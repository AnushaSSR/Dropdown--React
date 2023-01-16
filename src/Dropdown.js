import React from "react";
//useState imported from recat to set the states
import { useState } from "react";

//Dropwdon functional components with props from App.js as arguments
const Dropdown = ({ dropdownTitle, menuList }) => {
  //state componenet to set the state of the toggleMenu to make it open and close
  const [toggleMenu, setToggleMenu] = useState(true);
  //state componenet to set the option value selected from the menu
  const [option, setOption] = useState("Select");

  //handler to control menu list upon hovering on the dropdown
  const handleMenu = () => {
    //set the toggle menu flag to false(to open the menu)
    setToggleMenu(false);
  };

  //handler to set the value of the input and toggle menu upon selecting an option
  const menuSelected = (value) => {
    //set the state of the option/ value of input to value selected in the list
    setOption(value);
    //toggle the list menu flag to close- set value to true
    setToggleMenu(true);
  };

  return (
    <div className="main">
      <div className="dropdown-container">
        <h5 className="title"> Hover on Dropdown to select option:</h5>
        {/* title value fetched from props */}
        <h4 className="title"> {dropdownTitle}</h4>

        {/* dropdown button */}
        <button
          className="btn btn-secondary dropdown-toggle dropdown-button"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          onMouseEnter={() => handleMenu()}
        >
          {/* input to display the selected value */}
          <input id="menu-value" value={option} readOnly></input>
        </button>
      </div>
      {/* dropdown button */}

      {/* dropdown Menu */}
      <div className="menu">
        {/* Unordered list of menu */}
        <ul
          className="dropdown-menu-list btn btn-secondary"
          hidden={toggleMenu}
        >
          {/* data fetched dynamically form menuList sent as props by looping  */}
          {menuList.map((menuItem) => (
            // list item to display the menu list
            <li
              key={menuItem}
              className="dropdown-menu-item"
              onClick={() => menuSelected(menuItem)}
              value={menuItem}
            >
              {menuItem}
            </li>
          ))}
        </ul>
      </div>
      {/* dropdown Menu */}
    </div>
  );
};

export default Dropdown;

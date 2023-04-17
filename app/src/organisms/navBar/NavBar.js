import React from "react";
import './navBar.css';
import {Button} from '../../atoms'
const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="navbar-left">
          <p class="small">LBNB</p>
        </div>
        <div className="navbar-right">
          <p class="small">About</p>
          <Button/>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
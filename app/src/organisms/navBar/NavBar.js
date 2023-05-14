import { React, useState, useEffect } from "react";
import "./navBar.css";
import cookie from "cookie";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { Login } from "../../molecules";
import { logo } from "../../assets/images";
const url = "https://mockup-backend-128.herokuapp.com";

const NavBar = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [isAdmin, setAdmin] = useState(false);
  const [isOwner, setOwner] = useState(false);
  const [isUser, setUser] = useState(false);

  useEffect(() => {
    // Check if authToken exists in cookie
    if (cookie.parse(document.cookie)["authToken"]) {
      console.log("Log in detected!");
      setLoggedIn(true);
    } else {
      console.log("Log in not detected");
      setLoggedIn(false);
    }
  });

  const logout = () => {
    document.cookie =
      "authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.reload();
  };

  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="navbar-left">
          <p class="small">
            <a href="/">
              <img className="logo" src={logo} alt="logo" />
            </a>
          </p>
        </div>
        <div className="navbar-right">
          <p className="small">About</p>

          {isLoggedIn ? (
            <Button className="login-btn" onClick={logout}>
              Logout
            </Button>
          ) : (
            <Button className="login-btn" onClick={() => setModalShow(true)}>
              Login
            </Button>
          )}

          <Login show={modalShow} onHide={() => setModalShow(false)} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;

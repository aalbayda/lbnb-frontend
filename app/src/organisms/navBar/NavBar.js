import { React, useState, useEffect } from "react";
import "./navBar.css";
import config from "../../config";
import cookie from "cookie";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { Login } from "../../molecules";
import { logo } from "../../assets/images";
import { Link } from "react-router-dom";
import { isLoggedIn, getAuthType } from "../../auth";
const url = config.apiUrl;

const NavBar = () => {
  const [modalShow, setModalShow] = useState(false);
  const [ownerDetails, setOwnerDetails] = useState("");

  const logout = () => {
    document.cookie =
      "authCookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.reload();
  };

  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="navbar-left">
          <p className="small">
            <a href="/">
              <img className="logo" src={logo} alt="logo" />
            </a>
          </p>
        </div>
        <div className="navbar-right">
          {isLoggedIn && getAuthType() === "Student" ? (
            <p className="small">
              <a href={"/userprofile"}>Profile</a>
            </p>
          ) : (
            <p></p>
          )}

          {isLoggedIn && getAuthType() === "Owner" ? (
            <p className="small">
              <Link to="/landlordprofile" state={ownerDetails}>
                Profile
              </Link>
            </p>
          ) : (
            <p></p>
          )}

          {isLoggedIn && getAuthType() === "Admin" ? (
            <p className="small">
              <a href="/adminpage">Admin</a>
            </p>
          ) : (
            <p></p>
          )}

          {isLoggedIn() ? (
            <div>
              <Button className="login-btn" onClick={logout}>
                Logout
              </Button>
            </div>
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

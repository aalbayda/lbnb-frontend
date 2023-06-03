import { React, useState, useEffect } from "react";
import "./navBar.css";
import config from "../../config";
import cookie from "cookie";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { Login } from "../../molecules";
import { logo } from "../../assets/images";
import { Link } from "react-router-dom";
const url = config.apiUrl;

const NavBar = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [isAdmin, setAdmin] = useState(false);
  const [isOwner, setOwner] = useState(false);
  const [isUser, setUser] = useState(false);
  const [ownerDetails, setOwnerDetails] = useState("");

  useEffect(() => {
    // Check if authToken exists in cookie
    if (cookie.parse(document.cookie)["authToken"]) {
      let authToken = cookie.parse(document.cookie)["authToken"];
      let type = authToken.split("|")[1];
      console.log("Log in detected!");
      setLoggedIn(true);

      axios
        .post(url + "/get-user-by-id", {
          userId: authToken.split("|")[4],
        })
        .then((res) => {
          console.log(`Your user id ${authToken.split("|")[4]}...`);
          console.log(res.data);
          setOwnerDetails(res.data.user);
        })
        .catch((err) => console.log(err));

      if (type === "Student") {
        setUser(true);
        setOwner(false);
      } else if (type === "Owner") {
        setOwner(true);
        setUser(false);
      } else if (type === "Admin") {
        setOwner(false);
        setUser(false);
        setAdmin(true);
      }
    } else {
      console.log("Log in not detected");
      setLoggedIn(false);
    }
  }, []);

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
          {/* <p className="small">About</p> */}

          {isUser ? (
            <p className="small">
              <a href={"/userprofile"}>Profile</a>
            </p>
          ) : (
            <p></p>
          )}

          {isOwner ? (
            <p className="small">
              <Link to="/landlordprofile" state={ownerDetails}>
                Profile
              </Link>
              {/* <a href={isUser ? "/userprofile" : "/landlordprofile"}>Profile</a> */}
            </p>
          ) : (
            <p></p>
          )}

          {isAdmin ? (
            <p className="small">
              <a href="/adminpage">Admin</a>
            </p>
          ) : (
            <p></p>
          )}

          {isLoggedIn ? (
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

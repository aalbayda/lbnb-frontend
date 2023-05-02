import React from "react";
import './navBar.css';
import Button from 'react-bootstrap/Button';
import {Login} from "../../molecules";
import {logo} from "../../assets/images";

const NavBar = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="navbar-left">
          <p class="small">
            <a
              href="/"
            >
              <img
                className="logo"
                src={logo}
                alt="logo"
              />
            </a>
          </p>
        </div>
        <div className="navbar-right">
          <p class="small">About</p>
            <Button className="login-btn" onClick={() => setModalShow(true)}>
            Login
            </Button>
            <Login
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
        </div>
      </div>
    </div>
  );
};

export default NavBar;

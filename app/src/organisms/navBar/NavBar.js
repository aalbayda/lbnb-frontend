import React from "react";
import './navBar.css';
// import {Button} from '../../atoms';
import Button from 'react-bootstrap/Button';
import {Login} from "../../molecules";

const NavBar = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="navbar-left">
          <p class="small">
            <a
              href="/"
              style={{
                textDecoration: "none",
                fontSize: "32px",
              }}
            >
              🌱
            </a>
          </p>
        </div>
        <div className="navbar-right">
          <p class="small">About</p>
          {/* <Button/> */}
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

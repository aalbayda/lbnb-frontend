import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './login.css';
import {Signup} from '../../molecules';

function Login (props) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="login-container">
          <p className="large-bold">User Login</p>
          <div className="login-container-createAccount">
            <p className="italic">Don't have an account?</p>
            <Button  className="small-bold createButton" 
              onClick={() => setModalShow(true) }
            >CREATE AN ACCOUNT</Button>
          </div>
          <input className="tiny" placeholder='Email Address' type="text"/>
          <input className="tiny" placeholder='Password' type="text"/>
          <Button className="login-btn"
          >SIGN IN</Button>
          
          <Signup
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default Login;
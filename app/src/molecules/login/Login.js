import {React, useState} from "react";
import axios from "axios";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './login.css';
import {Signup} from '../../molecules';
const url = "https://mockup-backend-128.herokuapp.com";

function Login (props) {
  const [modalShow, setModalShow] = useState(false);
  const [invalidLogin, setInvalidLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "" || password === "") {
      setInvalidLogin(true);
      return;
    }

    axios.post(url+'/login', {
      email: email,
      password: password
    })
    .then(function (response) {
      if (!response.data) {
        setInvalidLogin(true);
      }
      else {
        console.log(response.data)
        document.cookie = `authToken=${response.data.authToken}; path=/;`;
        // window.location.reload(); 
      }
    })
    .catch(function (error) {
      console.log("Error!!!");
      console.log(error);
    });
  }

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
          <input required className="tiny" placeholder='Email Address' type="text" onChange={e=>setEmail(e.target.value)}/>
          <input required className="tiny" placeholder='Password' type="password" onChange={e=>setPassword(e.target.value)}/>
          <Button className="login-btn" onClick={handleLogin}
          >SIGN IN</Button>
          
          <Signup
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
          {invalidLogin ? <div className="tiny text-center" style={{fontStyle: 'italic', color: 'red'}}>At least one field is invalid!</div> : <div></div>}
          
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default Login;
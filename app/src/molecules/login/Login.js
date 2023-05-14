import {React, useState} from "react";
import axios from "axios";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './login.css';
import Form from 'react-bootstrap/Form';
const url = "https://mockup-backend-128.herokuapp.com";

function Login (props) {
  const [toggleState, setToggleState] = useState(1);
  const [invalidLogin, setInvalidLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [isBusinessAccount, setIsBusinessAccount] = useState(false);
  // const [modalShow, setModalShow] = useState(false);
  // const [modalShow, setModalShow] = useState(false);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [invalidLogin, setInvalidLogin] = useState(false);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const handleSignUp = () => {
    if (email === "" || password === "" || fname === "" || lname === "") {
      setInvalidLogin(true);
      return;
    }

    axios.post(url+'/signUp', {
      email: email,
      password: password,
      username: email,
      firstName: fname,
      lastName: lname,
      contactNum: 0,
      isBusinessAccount: isBusinessAccount,
      isPersonalAccount: !isBusinessAccount
    })
    .then(function (response) {
      console.log(response)
      window.location.reload();
    })
    .catch(function (error) {
      console.log("Error!!!");
      console.log(error);
    });
  }

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
        {/* Log-in */}
        <div className={toggleState === 1 ? "content" : "inactive-content"}>
          <div className="login-container">
            <p className="large-bold">User Login</p>
            <div className="login-container-createAccount">
              <p className="italic">Don't have an account?</p>
              <Button  className="small-bold createButton" 
                onClick={() => toggleTab(2) }
              >CREATE AN ACCOUNT</Button>
            </div>
            <input required className="tiny" placeholder='Email Address' type="text" onChange={e=>setEmail(e.target.value)}/>
            <input required className="tiny" placeholder='Password' type="password" onChange={e=>setPassword(e.target.value)}/>
            <Button className="login-btn" onClick={handleLogin}>SIGN IN</Button>
            {invalidLogin ? <div className="tiny text-center" style={{fontStyle: 'italic', color: 'red'}}>At least one field is invalid!</div> : <div></div>}
          </div>
        </div>
        <div className={toggleState === 2 ? "content" : "inactive-content"}>
          <div className="signup-container">
            <p className="large-bold center">CREATE ACCOUNT</p>
            <div className="fullname-container">
            <input required className="tiny" placeholder='First Name' type="text" onChange={e => setFname(e.target.value)}/>
            <input required className="tiny" placeholder='Surname' type="text" onChange={e => setLname(e.target.value)}/>
            </div>
            <input required className="tiny" placeholder='Email Address' type="text" onChange={e => setEmail(e.target.value)}/>
            <input required className="tiny" placeholder='Password' type="password" onChange={e => setPassword(e.target.value)}/>
            {/* <input required className="tiny" placeholder='Retype Password' type="password"/> */}
          
          <Form>
          {['radio'].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                  className="tiny"
                  inline
                  label="Personal Account"
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                  onClick={e => setIsBusinessAccount(false)}
              />
              <Form.Check
                  className="tiny"
                  inline
                  label="Business Account"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                  onChange={e =>  setIsBusinessAccount(true)}
              />
              </div>
          ))}
          </Form>
            <Button className="signup-btn" onClick={handleSignUp}>SIGN UP</Button>
            {invalidLogin ? <div className="tiny text-center" style={{fontStyle: 'italic', color: 'red'}}>At least one field is invalid!</div> : <div></div>}
            <Button  className="tiny italic signinButton" onClick={() => toggleTab(1)}>Already have an account?</Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default Login;
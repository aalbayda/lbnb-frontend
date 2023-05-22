import { React, useState, useEffect } from "react";
import axios from "axios";
import cookie from "cookie";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./login.css";
import Form from "react-bootstrap/Form";
const url = "https://mockup-backend-128.herokuapp.com";

function Login(props) {
  const [toggleState, setToggleState] = useState(1);
  const [missingLogin, setMissingLogin] = useState(false);
  const [wrongLogin, setWrongLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [isBusinessAccount, setIsBusinessAccount] = useState(false);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  useEffect(() => {
    toggleTab(1);
  }, []);

  const handleSignUp = () => {
    if (email === "" || password === "" || fname === "" || lname === "") {
      setMissingLogin(true);
      return;
    }

    axios
      .post(url + "/signUp", {
        email: email,
        password: password,
        username: email,
        firstName: fname,
        lastName: lname,
        contactNum: 0,
        isBusinessAccount: isBusinessAccount,
        isPersonalAccount: !isBusinessAccount,
      })
      .then(function (response) {
        console.log(response);
        window.location.reload();
      })
      .catch(function (error) {
        console.log("Error!!!");
        console.log(error);
      });
  };

  const handleLogin = () => {
    if (email === "" || password === "") {
      setMissingLogin(true);
      return;
    }

    axios
      .post(url + "/login", {
        email: email,
        password: password,
      })
      .then(function (response) {
        if (!response.data) {
          setMissingLogin(true);
        } else if (response.data.success) {
          // console.log(response.data);
          console.log(response.data);
          let date = new Date();
          date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
          document.cookie = `authToken=${
            response.data.authToken +
            "|" +
            response.data.userType +
            "|" +
            response.data.username +
            "|" +
            response.data.fname +
            " " +
            response.data.lname +
            "|" +
            response.data.userId
          }; path=/; expires=${date.toUTCString()}`;
          console.log(document.cookie);
          // set whether personal or business

          window.location.reload();
        } else if (!response.data.success) {
          console.log("not a success");
          console.log(response.data);
          setMissingLogin(true);
          console.log(wrongLogin);
        } else {
          console.log(response.data);
        }
      })
      .catch(function (error) {
        console.log("Error!!!");
        console.log(error);
      });
  };

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body>
        {/* Log-in */}
        <div className={toggleState === 1 ? "content" : "inactive-content"}>
          <div className="login-container">
            <p className="large-bold">User Login</p>
            <div className="login-container-createAccount">
              <p className="italic">Don't have an account?</p>
              <Button
                className="small-bold createButton"
                onClick={() => toggleTab(2)}
              >
                CREATE AN ACCOUNT
              </Button>
            </div>
            <input
              required
              className="tiny"
              placeholder="Email Address"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              required
              className="tiny"
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button className="login-btn" onClick={handleLogin}>
              SIGN IN
            </Button>
            {missingLogin ? (
              <div
                className="tiny text-center"
                style={{ fontStyle: "italic", color: "red" }}
              >
                At least one field is invalid!
              </div>
            ) : (
              <div></div>
            )}
            {wrongLogin ? (
              <div
                className="tiny text-center"
                style={{ fontStyle: "italic", color: "red" }}
              >
                Incorrect credentials!
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
        <div className={toggleState === 2 ? "content" : "inactive-content"}>
          <div className="signup-container">
            <p className="large-bold center">CREATE ACCOUNT</p>
            <div className="fullname-container">
              <input
                required
                className="tiny"
                placeholder="First Name"
                type="text"
                onChange={(e) => setFname(e.target.value)}
              />
              <input
                required
                className="tiny"
                placeholder="Surname"
                type="text"
                onChange={(e) => setLname(e.target.value)}
              />
            </div>
            <input
              required
              className="tiny"
              placeholder="Email Address"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              required
              className="tiny"
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* <input required className="tiny" placeholder='Retype Password' type="password"/> */}

            <Form>
              {["radio"].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    className="tiny"
                    inline
                    label="Personal Account"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                    onClick={(e) => setIsBusinessAccount(false)}
                  />
                  <Form.Check
                    className="tiny"
                    inline
                    label="Business Account"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                    onChange={(e) => setIsBusinessAccount(true)}
                  />
                </div>
              ))}
            </Form>
            <Button className="signup-btn" onClick={handleSignUp}>
              SIGN UP
            </Button>
            {missingLogin ? (
              <div
                className="tiny text-center"
                style={{ fontStyle: "italic", color: "red" }}
              >
                At least one field is invalid!
              </div>
            ) : (
              <div></div>
            )}
            <Button
              className="tiny italic signinButton"
              onClick={() => toggleTab(1)}
            >
              Already have an account?
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default Login;

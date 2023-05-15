import {React, useState} from "react";
import './navBar.css';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import {Login} from "../../molecules";
import {logo} from "../../assets/images";
const url = 'https://mockup-backend-128.herokuapp.com';

const NavBar = () => {
  const [signedIn, setSignedIn] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  // const checkCookie = () => {
  //   const authToken = document.cookie.split(" ")[1].split("=")[1];
  //   // console.log(tokens)
  //   // for (let token in tokens) {
  //   //   console.log(token)
  //   //   let newToken = token.split("=");
  //   //   console.log(newToken);
  //   //   if (newToken[0] === "authToken") authToken = newToken[1];
  //   // }

  //   console.log(authToken)

  //   axios.post(url+'/login', {
  //     authToken: authToken
  //   })
  //   .then(function (response) {
  //     console.log(response.data);
  //     // if (!response.data) {
  //     //   setInvalidLogin(true);
  //     // }
  //     // else {
  //     //   console.log(response.data)
  //     //   document.cookie = `authToken=${response.data.authToken}; path=/;`;
  //     //   window.location.reload(); 
  //     // }
  //     return true;
  //   })
  //   .catch(function (error) {
  //     console.log("Error!!!");
  //     console.log(error);
  //     return false;
  //   });
  // }

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
          <p className="small">About</p>
               <Button className="login-btn" onClick={() => setModalShow(true)}>
                Login
              </Button> 

            {/* {
              checkCookie() ?
               <Button className="login-btn">Logout</Button> 
               :  */}

              {/* <Button onClick={checkCookie}>test</Button> */}
            

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

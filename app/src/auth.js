import cookie from "cookie";

const decryptToken = () => {
  return JSON.parse(atob(cookie.parse(document.cookie["authCookie"])));
};

// Takes in response object from /login
export function encryptToken(data) {
  return btoa(JSON.stringify(data));
}

export function isLoggedIn() {
  return decryptToken["authToken"].length > 0;
}

export function getAuthUsername() {
  return decryptToken()["username"];
}

export function getAuthName() {
  return decryptToken()["fname"] + " " + decryptToken()["lname"];
}

export function getAuthEmail() {
  return decryptToken()["email"];
}

export function getAuthMobile() {
  return decryptToken()["contactNum"];
}

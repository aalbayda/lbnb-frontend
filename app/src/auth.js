import cookie from "cookie";

const decryptToken = () => {
  if (document.cookie)
    return JSON.parse(atob(cookie.parse(document.cookie)["authCookie"]));
  return false;
};

// Takes in response object from /login
export function encryptToken(data) {
  return btoa(JSON.stringify(data));
}

export function isLoggedIn() {
  if (decryptToken()) return true;
  return false;
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

export function getAuthType() {
  return decryptToken()["userType"];
}

export function getAuthId() {
  return decryptToken()["userId"];
}

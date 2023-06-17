import cookie from "cookie";
import CryptoJS from "crypto-js";
import config from "./config";

const decryptToken = () => {
	if (document.cookie)
		return CryptoJS.AES.decrypt(
			cookie.parse(document.cookie)["authCookie"],
			config.key
		);
	return false;
};

// Takes in response object from /login
export function encryptToken(data) {
	return CryptoJS.AES.encrypt(JSON.stringify(data, config.key));
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

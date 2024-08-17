import axios from "axios";
import config from "../config";

export async function SearchPropertyMethod(term, termData) {
  var url = `${config.url}/search/${term}/${termData}`;
  const response = await axios.get(url);
  return response.data;
}

export async function registerUser(
  firstName,
  lastName,
  userName,
  email,
  password,
  dob,
  phoneNumber,
  city,
  state
) {
  let body = {
    firstName: firstName,
    lastName: lastName,
    userName: userName,
    email: email,
    password: password,
    dob: dob,
    phoneNumber: phoneNumber,
    city: city,
    state: state,
  };

  const url = process.env.REACT_APP_API_URL;
  const response = await axios.post(`${url}/user/register`, body);
  return response;
}

export async function loginUser(email, password) {
  let body = { username: email, password: password };
  const response = await axios.post(
    `${process.env.REACT_APP_API_URL}/user/login`,
    body
  );
  return response;
}

export async function changePassword(oldPassword, newPassword) {
  let body = {
    token: getCookie("token"),
    oldPassword: oldPassword,
    newPassword: newPassword,
  };
  console.log(getCookie("token"));
  const response = await axios.post(
    `${process.env.REACT_APP_API_URL}/user/changePassword`,
    body,
    {
      headers: { Authorization: `Bearer ${getCookie("token")}` },
    }
  );
  return response;
}

export async function getUserDetails() {
  const response = await axios.get(
    `${process.env.REACT_APP_API_URL}/user/data`,
    {
      headers: { Authorization: `Bearer ${getCookie("token")}` },
    }
  );
  return response;
}

export async function loginAdmin(email, password) {
  let body = { username: email, password: password };
  const response = await axios.post(
    `${process.env.REACT_APP_API_URL}/admin/login`,
    body
  );
  return response;
}

export function getCookie(key) {
  var b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
  return b ? b.pop() : "";
}

export function deleteCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

export async function getUserDetailsById(userId) {
  const response = await axios.get(
    `${process.env.REACT_APP_API_URL}/user/get/${userId}`,
    {
      headers: { Authorization: `Bearer ${getCookie("token")}` },
    }
  );
  return response;
}

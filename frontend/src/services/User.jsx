import axios from "axios";
import { getCookie } from "./methods";
import config from "../config";

export async function uploadImage(imageFile) {
  const formData = new FormData();
  formData.append("file", imageFile);

  try {
    const header = {
      Authorization: `Bearer ${getCookie("token")}`,
    };
    const response = await axios.put(
      `${config.url}/user/profile-picture`,
      formData,
      { headers: { Authorization: `Bearer ${getCookie("token")}` } }
    );
    console.log(response);
    return response.data; // Return the data from the response
  } catch (error) {
    console.error("Error uploading image:", error);
    return error;
  }
}

export async function updateUser(
  firstName,
  lastName,
  dob,
  phoneNumber,
  city,
  state
) {
  let body = {
    firstName: firstName,
    lastName: lastName,
    dob: dob,
    phoneNumber: phoneNumber,
    city: city,
    state: state,
  };

  const url = process.env.REACT_APP_API_URL;
  const response = await axios.put(`${url}/user/update`, body, {
    headers: { Authorization: `Bearer ${getCookie("token")}` },
  });
  return response;
}

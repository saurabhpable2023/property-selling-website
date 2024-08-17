import axios from "axios";
import { getCookie } from "./methods";
import config from "../config";

export async function DeleteSpecficUserId(userId) {
    // make API call
    try {
        const response = await axios.delete(`${config.url}/admin/delete/${userId}`, {
            headers: { Authorization: `Bearer ${getCookie("token")}` },
        });
        console.log(response)
        return response;
    } catch (error) {
        console.log("Fetch Error:")
        console.log(error)
        return error.response
    }
}
export async function GetAllUsers() {
    // Make API Call
    try {
        const response = await axios.get(`${config.url}/admin/list`, {
            headers: { Authorization: `Bearer ${getCookie("token")}` },
        });
        // Reading JSON data
        console.log(response)
        return response;
    } catch (error) {
        console.log("Fetch Error:")
        console.log(error)
        return error.response
    }
}
export async function getUserDetails() {
    const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/admin/data`,
        {
            headers: { Authorization: `Bearer ${getCookie("token")}` },
        }
    );
    return response;
}

export async function DeleteProperty(propertyID) {
    // make API call
    try {
        const response = await axios.delete(`${config.url}/admin/${propertyID}`,
            {
                headers: { Authorization: `Bearer ${getCookie("token")}` },
            })
        // read JSON data (response)
        console.log(response)
        return response;
    } catch (error) {
        console.log(error)
        return error.response
    }
}

export async function GetAllProperty(page, itemsPerPage) {
    // Make API Call
    try {
      const response = await axios.get(`${config.url}/Property/list`, {
        params: {
          page: page - 1,
          size: itemsPerPage,
        },
      });
      // Reading JSON data
      return response;
    } catch (error) {
      console.log(error.response.data.message);
      return error.response;
    }
  }
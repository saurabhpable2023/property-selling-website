import axios from "axios";
import config from "../config";

export async function GetAllProperty() {
  // Make API Call
  const response = await axios.get(`${config.url}/property/view`);
  // Reading JSON data
  return response.data;
}
export async function GetSpecficProperty(title) {
  // body parameters
  const body = {
    title,
  };
  // make API call
  const response = await axios.post(`${config.url}/property/search`, body);
  // read JSON data (response)
  return response.data;
}
export async function GetSpecficPropertyUser(userID) {
  // body parameters
  const body = {
    userID,
  };

  // make API call
  const response = await axios.post(`${config.url}/property/user`, body);

  // read JSON data (response)
  return response.data;
}
export async function GetSpecficPropertyId(propertyID) {
  // body parameters
  const body = {
    propertyID,
  };

  // make API call
  const response = await axios.post(`${config.url}/property/id`, body);

  // read JSON data (response)
  return response.data;
}
export async function EditSpecficPropertyId(propertyID, title, address, city, state, district, pincode, propertyType, price, PropertyArea, bedrooms, bathrooms, description) {
  // body parameters
  const body = { propertyID, title, address, city, state, district, pincode, propertyType, price, PropertyArea, bedrooms, bathrooms, description };

  // make API call
  const response = await axios.put(`${config.url}/property/edit`, body);

  // read JSON data (response)
  return response.data;
}

export async function addProperty(title, address, city, state, district, pincode, propertyType, price, PropertyArea, bedrooms, bathrooms, description, userID) {
  // body parameters
  const body = { title, address, city, state, district, pincode, propertyType, price, PropertyArea, bedrooms, bathrooms, description, userID };

  // make API call
  const response = await axios.post(`${config.url}/property/create`, body);

  // read JSON data (response)
  return response.data;
}
export async function addImages(Images) {
  // body parameters
  const body={Images};

  // make API call
  const response=await axios.post(`${config.url}/property/upload`, body);

  // read JSON data (response)
  return response.data;
}

export async function DeleteProperty(propertyID) {
  // body parameters
  const body = {
    propertyID,
  };

  // make API call
  const response = await axios.delete(`${config.url}/property/delete`, {
    data: body,
  });

  // read JSON data (response)
  return response.data;
}

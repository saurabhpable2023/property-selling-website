import axios from "axios";
import config from "../config";
import { getCookie } from "./methods";

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

export async function GetSpecficProperty(title) {
  // body parameters
  const body = {
    title,
  };
  // make API call
  try {
    const response = await axios.post(`${config.url}/Property/search`, body, {
      headers: { Authorization: `Bearer ${getCookie("token")}` },
    });
    // read JSON data (response)
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.response.data.message);
    return error.response;
  }
}

export async function GetSpecficPropertyUser(userID) {
  // body parameters
  // make API call
  try {
    const response = await axios.get(`${config.url}/Property/user`, {
      headers: { Authorization: `Bearer ${getCookie("token")}` },
    });
    // read JSON data (response)
    return response;
  } catch (error) {
    console.log(error.response.data.message);
    return error.response;
  }
}

export async function GetSpecficPropertyId(propertyID) {
  // make API call
  try {
    const response = await axios.get(`${config.url}/Property/${propertyID}`, {
      headers: { Authorization: `Bearer ${getCookie("token")}` },
    });
    // read JSON data (response)
    return response;
  } catch (error) {
    return error.response;
  }
}

export async function EditSpecficPropertyId(body, PropId) {
  // make API call
  try {
    const response = await axios.put(
      `${config.url}/Property/update/${PropId}`,
      body,
      {
        headers: { Authorization: `Bearer ${getCookie("token")}` },
      }
    );
    // read JSON data (response)
    return response.data;
  } catch (error) {
    return error.response;
  }
}

export async function addProperty(body) {
  // make API call
  try {
    const response = await axios.post(`${config.url}/Property/add`, body, {
      headers: { Authorization: `Bearer ${getCookie("token")}` },
    });
    // read JSON data (response)
    response.data.status = 200;
    return response;
  } catch (error) {
    return error.response.data;
  }
}

export async function addPropertyImages(Images, propertyID) {
  // body parameters
  var data = new FormData();
  Images.map((image) => {
    data.append("imageLink", image, image.name);
  });
  // make API call
  console.log("Image Data Sent:" + data);
  try {
    const response = await axios.post(
      `${config.url}/Image/add/${propertyID}`,
      data,
      {
        headers: { Authorization: `Bearer ${getCookie("token")}` },
      }
    );

    // read JSON data (response)
    return response;
  } catch (error) {
    console.log(error.response.data.message);
    return error.response;
  }
}

export async function DeleteProperty(propertyID) {
  // make API call
  try {
    const response = await axios.delete(
      `${config.url}/property/${propertyID}`,
      {
        headers: { Authorization: `Bearer ${getCookie("token")}` },
      }
    );
    // read JSON data (response)
    return response.data;
  } catch (error) {
    console.log(error.response.data.message);
    return error.response;
  }
}

//------------Image Related-----

export async function getPropertyImages(propertyID) {
  // make API call
  try {
    const response = await axios.get(`${config.url}/Image/list/${propertyID}`, {
      headers: { Authorization: `Bearer ${getCookie("token")}` },
    });
    // /list/{propertyId}

    // read JSON data (response)
    return response;
  } catch (error) {
    console.log(error.response.data.message);
    return error.response;
  }
}

export async function DeletePropertyImage(imageId) {
  // body parameters
  // make API call
  try {
    const response = await axios.delete(`${config.url}/Image/${imageId}`, {
      headers: { Authorization: `Bearer ${getCookie("token")}` },
    });
    // read JSON data (response)
    return response;
  } catch (error) {
    console.log(error.response.data.message);
    return error.response;
  }
}

//----Tags Related---

export async function GetAllTags() {
  // Make API Call
  try {
    const response = await axios.get(`${config.url}/Tags/list`, {
      headers: { Authorization: `Bearer ${getCookie("token")}` },
    });
    // Reading JSON data
    return response.data;
  } catch (error) {
    console.log(error.response.data.message);
    return error.response;
  }
}

//----------WishList Related----------------------
export async function GetAllUserWishlist(userID) {
  // Make API Call
  try {
    const response = await axios.get(`${config.url}/wishlist/list`, {
      headers: { Authorization: `Bearer ${getCookie("token")}` },
    });
    // Reading JSON data
    return response;
  } catch (error) {
    console.log(error.response.data.message);
    return error.response;
  }
}

export async function addPropertyWishlist(propertyID) {
  // body parameters
  const body = {
    propertyid: parseInt(propertyID),
  };
  // make API call
  try {
    const response = await axios.post(`${config.url}/wishlist/add`, body, {
      headers: { Authorization: `Bearer ${getCookie("token")}` },
    });
    return response;
  } catch (error) {
    return error.response;
  }
  // read JSON data (response)
}

//----------Email Functionality----------------------
export async function sendEmail(emailBody) {
  // body parameters
  const body = emailBody;
  // make API call
  try {
    const response = await axios.post(`${config.url}/email/send`, body, {
      headers: { Authorization: `Bearer ${getCookie("token")}` },
    });
    return response;
  } catch (error) {
    return error.response;
  }
  // read JSON data (response)
}

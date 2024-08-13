import axios from 'axios'
import config from '../config'

export async function register(firstName, lastName, email,username, phoneNumber,city, state, password) {
    // body parameters
    const body = {
      firstName,
      lastName,
      email,
      username,
      phoneNumber,
      city,
      state,
      password,
    }
     // make API call
  const response = await axios.post(`${config.url}/user/signup`, body)

  // read JSON data (response)
  return response.data
}

export async function login(email, password) {
  // body parameters
  const body = {
    email,
    password,
  }

  // make API call
  const response = await axios.post(`${config.url}/user/signin`, body)

  // read JSON data (response)
  return response.data
}

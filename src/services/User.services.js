import axios from "axios"
import { URL_BACKEND } from "../environments/environments"

export const logIn = async (objUser) => {
  const result = await axios.post(
    `${URL_BACKEND}/auth/login`,
    JSON.stringify(objUser),
    {
      headers: {
        "Content-type": "application/json",
      },
    }
  )
  return result.data
}

export const postUsers = async (objUser) => {
  const result = await axios.post(
    `${URL_BACKEND}/auth/signup`,
    JSON.stringify(objUser),
    {
      headers: {
        "Content-type": "application/json",
      },
    }
  )
  return result.data
}

export const updateUsers = async (objUser) => {
  const response = await axios.put(
    `${URL_BACKEND}/user`,
    JSON.stringify(objUser),
    {
      headers: {
        "Content-type": "Application/json",
        "Authorization": "Bearer " + localStorage.getItem("token"),
      },
    }
  )
  return response.data
}

export const showUsers = async () => {
  const response = await axios.get(`${URL_BACKEND}/user`, {
    headers: {
      "Content-type": "Application/json",
      "Authorization": "Bearer " + localStorage.getItem("token"),
    },
  })
  return response.data
}

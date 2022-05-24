import axios from "axios"
import { URL_BACKEND } from "../environments/environments"

export const allPhotos = async () => {
  const result = await axios.get(`${URL_BACKEND}/photos`, {
    headers: {
      "Content-type": "application/json",
    },
  })
  return result.data
}

export const getPhoto = async ({ idPhoto }) => {
  const result = await axios.get(`${URL_BACKEND}/photos/${idPhoto}`, {
    headers: {
      "Content-type": "application/json",
    },
  })
  return result.data
}

export const getMyPhoto = async () => {
  const result = await axios.get(`${URL_BACKEND}/photos/mylist`, {
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  })
  return result.data
}

export const createPhoto = async (objPhoto) => {
  const result = await axios.post(`${URL_BACKEND}/photos/`, objPhoto, {
    headers: {
      "Content-type": "multipart/form-data",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  })
  return result.data
}

export const deletePhoto = async (idPhoto) => {
  const result = await axios.delete(`${URL_BACKEND}/photos/${idPhoto}`, {
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  })
  return result.data
}

export const updatePhoto = async (idPhoto, objPhoto) => {
  const result = await axios.put(
    `${URL_BACKEND}/photos/${idPhoto}`,
    JSON.stringify(objPhoto),
    {
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }
  )
  return result.data
}

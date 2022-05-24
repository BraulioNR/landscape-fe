import axios from "axios"
import { URL_BACKEND } from "../environments/environments"

export const TopRegions = async () => {
  const result = await axios.get(`${URL_BACKEND}/regions/top`, {
    headers: {
      "Content-type": "application/json",
    },
  })
  return result.data
}

export const GetRegion = async ({ idRegion }) => {
  const result = await axios.get(`${URL_BACKEND}/regions/${idRegion}`, {
    headers: {
      "Content-type": "application/json",
    },
  })
  return result.data
}

export const AllRegions = async () => {
  const result = await axios.get(`${URL_BACKEND}/regions`, {
    headers: {
      "Content-type": "application/json",
    },
  })
  return result.data
}

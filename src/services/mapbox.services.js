import axios from "axios"
import { URL_MAPBOX } from "../environments/environments"

export const getAddress = async (lng, lat) => {
  const result = await axios.get(`${URL_MAPBOX}/${lng},${lat}.json`, {
    headers: {
      "Content-type": "application/json",
    },
    params: {
      types: "poi",
      access_token: process.env.REACT_APP_MAP_TOKEN,
    },
  })
  return result.data
}

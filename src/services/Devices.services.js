import axios from "axios"
import { URL_BACKEND } from "../environments/environments"

export const allDevices = async () => {
  const result = await axios.get(`${URL_BACKEND}/devices`, {
    headers: {
      "Content-type": "application/json",
    },
  })
  return result.data
}

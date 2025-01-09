import axios from "axios";

export const API = axios.create({
  baseURL: "https://restcountries.com/",
})

export default {
  fetchGet<T = any>(url: string) {
    return API.get<T>(url, {
      headers: {
        "Content-Type": "application/json",
      },
    })
  },
}
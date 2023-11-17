import axios from "axios"

const api = axios.create({
  baseURL: "https://tasks-backend-omega.vercel.app/"
})

export default api


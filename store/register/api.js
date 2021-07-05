import axios from "axios"
import { REGISTER_USERNAME, REGISTER_PASSWORD } from "react-native-dotenv"
const register = axios.create({
  baseURL: "https://app3.jackrabbitclass.com/regv2.asp?id=540191",
  auth: { username: REGISTER_USERNAME, password: REGISTER_PASSWORD },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}

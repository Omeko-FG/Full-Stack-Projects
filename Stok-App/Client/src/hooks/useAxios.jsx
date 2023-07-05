import axios from "axios"
import { useSelector } from "react-redux"

const useAxios = () => {
  const { token } = useSelector((state) => state.auth)

  const axiosPublic = axios.create({
    baseURL: "https://12155.fullstack.clarusway.com/"/*"http://127.0.0.1:8000/"*/,
  })

  const axiosWithToken = axios.create({
    baseURL: "https://12155.fullstack.clarusway.com/"/*"http://127.0.0.1:8000/"*/,
    headers: { Authorization: `Token ${token}` },
  })

  return { axiosWithToken, axiosPublic }
}

export default useAxios

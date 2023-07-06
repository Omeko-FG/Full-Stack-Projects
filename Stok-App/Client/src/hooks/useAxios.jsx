import axios from "axios"
import { useSelector } from "react-redux"

const useAxios = () => {
  const { token } = useSelector((state) => state.auth)

  const axiosPublic = axios.create({
    baseURL: "http://127.0.0.1:8000/"/*"https://12155.fullstack.clarusway.com/"*/
    ,
  })

  const axiosWithToken = axios.create({
    baseURL: "http://127.0.0.1:8000/"/*"https://12155.fullstack.clarusway.com/"*/
    ,
    headers: { Authorization: `Token ${token}` },
  })

  return { axiosWithToken, axiosPublic }
}

export default useAxios

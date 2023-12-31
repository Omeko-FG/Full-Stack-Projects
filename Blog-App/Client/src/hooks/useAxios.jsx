import axios from "axios";
import { useSelector } from "react-redux";

const useAxios = () => {
  const { token } = useSelector((state) => state.auth);
  const axiosWithToken = axios.create({
    baseURL: "http://127.0.0.1:8000/blog/",
    headers: { Authorization: `Token ${token}` },
  });

  return { axiosWithToken };
};

export default useAxios;
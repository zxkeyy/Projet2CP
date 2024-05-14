import axios from "axios";
import { useQuery } from "react-query";

const  fetchUserData = async () => {
  const response = await axios.get("http://localhost:5000/user/pro", {
    withCredentials: true,
  });
  return response.data;
}

const useUserData = () => {
  return useQuery("userData", fetchUserData);
};
export default useUserData;
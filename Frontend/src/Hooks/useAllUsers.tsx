import axios from "axios";
import { useQuery } from "react-query";

const fetchUsers = async () => {
  const response = await axios.get("http://localhost:5000/user/getAllUsers/", {
    withCredentials: true,
  });
  return response.data;
};

const useAllUsers = () => {
  return useQuery("user", () => {
    return fetchUsers();
  });
};
export default useAllUsers;

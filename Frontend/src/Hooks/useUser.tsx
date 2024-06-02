import axios from "axios";
import { useQuery } from "react-query";

const fetchUser = async (id: String) => {
  const response = await axios.get(
    "http://localhost:5000/user/getUserById/" + id,
    {
      withCredentials: true,
    }
  );
  return response.data;
};

const useUser = (id: String) => {
  return useQuery("user" + id, () => {
    return fetchUser(id);
  });
};
export default useUser;

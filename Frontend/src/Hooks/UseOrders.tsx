import axios from "axios";
import { useQuery } from "react-query";

const fetchOrders = async () => {
  const response = await axios.get("http://localhost:5000/orders/getAllOrder", {
    withCredentials: true,
  });
  return response.data;
};

const useOrders = () => {
  return useQuery("orders", fetchOrders);
};

export default useOrders;

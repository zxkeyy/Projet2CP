import { useQuery } from "react-query";
import APIClient from "../services/api-client";

interface Data {
  Product: Product;
}

const apiClient = new APIClient<Data>("/products/");

const useProducts = (id: number | string, enabled?: boolean) => {
  return useQuery<Data, Error>(["product", id], () => apiClient.get(id), {
    enabled: enabled,
  });
};

export default useProducts;

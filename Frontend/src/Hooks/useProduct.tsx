import { useQuery } from "react-query";
import APIClient from "../services/api-client";

interface Data {
  Product: Product;
}

const apiClient = new APIClient<Data>("/api/products");

const useProduct = (id: number | string, enabled?: boolean) => {
  return useQuery<Data, Error>(["product", id], () => apiClient.get(id), {
    enabled: enabled,
  });
};

export const postProduct = async (product: any) => {
  return await apiClient.post(product);
};


export default useProduct;

import APIClient from "../services/api-client";
import { useQuery } from "react-query";

interface ProductsQuery {
  search?: string;
  category?: string;
  numericFilters?: string;
  sort?: string;
  fields?: string;
  limit?: number;
  page?: number;
}

interface Data {
  Products: Product[];
}
const apiClient = new APIClient<Data>("/api/products/");

const useProducts = (query?: ProductsQuery, enabled?: boolean) => {
  return useQuery<Data, Error>(
    ["products", query],
    () => apiClient.getAll({ params: query }),
    {
      enabled: enabled,
    }
  );
};

export default useProducts;

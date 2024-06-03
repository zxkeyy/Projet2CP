import APIClient from "../services/api-client";
import { useQuery } from "react-query";

interface Category {
  _id: number;
  name: string;
}

interface Data {
  allCategories: Category[];
}
const apiClient = new APIClient<Data>("/api/products/categories/");

const useCategories = (enabled?: boolean) => {
  return useQuery<Data, Error>(["categories"], () => apiClient.getAll({}), {
    enabled: enabled,
  });
};

export default useCategories;

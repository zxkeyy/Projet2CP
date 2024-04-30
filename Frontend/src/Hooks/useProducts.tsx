import { useEffect, useState } from "react";

const url = "http://localhost:5000/api/products/";

interface ProductsQuery {
  name?: string;
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

const useProducts = (query?: ProductsQuery) => {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchUrl =
      url +
      "?" +
      (query?.category ? "&category=" + query?.category : "") +
      (query?.limit ? "&limit=" + query?.limit : "") +
      (query?.numericFilters
        ? "&numericFilters=" + query?.numericFilters
        : "") +
      (query?.sort ? "&sort=" + query?.sort : "") +
      (query?.fields ? "&fields=" + query?.fields : "") +
      (query?.page ? "&page=" + query?.page : "") +
      (query?.name ? "&name=" + query?.name : "") +
      (query?.fields ? "&fields=" + query?.fields : "");

    fetch(fetchUrl)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw response;
        }
      })
      .then((data: Data) => setData(data))
      .catch((error: Error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
};

export default useProducts;

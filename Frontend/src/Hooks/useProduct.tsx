import { useEffect, useState } from "react";

const url = "http://localhost:5000/api/products/";

interface Data {
  Product: Product;
}

const useProducts = (id: String) => {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchUrl = url + id;

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

import axios from "axios";
import { useEffect, useState } from "react";

export function name(params: string) {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const { data } = await axios.get(params);
        setData(data);
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, [params]);

  return { data, loading, error };
}

export const getLocations = async (q: string) => {
  const locationsRes = await axios.get(
    `https://api.geoapify.com/v1/geocode/autocomplete?text=${q}&apiKey=${process.env.NEXT_PUBLIC_GRP_API_KEY}`
  );

  return locationsRes.data;
};

export const getCategories = async () => {
  const categoriesRes = await axios.get("http://localhost:3000/api/categories");
  return categoriesRes.data;
};

export const getTypes = async () => {
  const typesRes = await axios.get("http://localhost:3000/api/types");

  return typesRes.data;
};

export const getCurrentLocation = async () => {
  const res = await axios.get(
    `https://api.geoapify.com/v1/ipinfo?apiKey=${process.env.NEXT_PUBLIC_GRP_API_KEY}`
  );
  return res.data;
};

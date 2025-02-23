import {useEffect, useState} from "react";
import axios from "axios";
import {useLoading} from "../context/LoadingContext";

const useApi = (endpoint) => {
  const [data, setData] = useState([]);
  const {setLoading} = useLoading();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const url = `${import.meta.env.VITE_API_URL}${endpoint}`;
        const response = await axios.get(url);
        console.log(response.data); // Log the response data

        if (endpoint === "member") {
          setData(response.data.members ? response.data.members.member : []);
        } else if (endpoint === "schedule") {
          setData(response.data); // Assuming response.data is the array of schedules
        } else if (endpoint === "news") {
          setData(response.data ? response.data.berita : []); // Assuming response.data is the array of schedules
        } else {
          setData(response.data); // For other endpoints, save data directly
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint, setLoading]);

  return {data, error};
};

export default useApi;

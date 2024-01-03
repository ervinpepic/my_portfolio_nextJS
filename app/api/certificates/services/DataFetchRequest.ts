import { School } from "@/app/certificates/Models/School";
import axios from "axios";
import { useCallback, useState } from "react";

export const useDataFetching = () => {
  const [fetchLoading, setLoading] = useState(false);
  const fetchData = useCallback(async () => {
    try {
      setLoading(true)
      const response = await axios.get("/api/certificates");
      if (response.status === 200) {
        return response.data as School[];
      } else {
        console.error("Error while fetching data:", response.data);
        return [];
      }
    } catch (error) {
      console.error("Error during data fetch:", error);
      return [];
    }finally {
      setLoading(false);
    }
  }, []);
  return { fetchData, fetchLoading }
};

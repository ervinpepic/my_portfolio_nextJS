import { Certificate } from "@/app/certificates/Types/Certificate";
import axios from "axios";
import { useCallback, useState } from "react";

export const useDataFetching = () => {
  const [fetchLoading, setFetchLoading] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      setFetchLoading(true);
      const response = await axios.get("/api/certificates");

      if (response.status === 200) {
        const certificatesBySchool: Record<string, Certificate[]> =
          response.data;
        return certificatesBySchool;
      } else {
        console.error("Error while fetching data:", response.data);
        return {};
      }
    } catch (error) {
      console.error("Error during data fetch:", error);
      return {};
    } finally {
      setFetchLoading(false);
    }
  }, []);

  return { fetchData, fetchLoading };
};

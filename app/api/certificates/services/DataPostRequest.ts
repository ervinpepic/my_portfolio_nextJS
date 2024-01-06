import { Certificate } from "@/app/certificates/Models/Certificate";
import { validationSchema } from "@/app/certificates/validators/YupValidationSchema";
import axios from "axios";
import { useState } from "react";
import * as Yup from "yup";
export const useDataPosting = () => {
  const API_ENDPOINT = "/api/certificates";
  const [isCreatePostloading, setIsCreatePostloading] = useState(false);
  const [isCreatePostSuccess, setIsCreatePostSuccess] = useState(false);

  const addCertificate = async (newCertificate: Certificate): Promise<void> => {
    try {
      setIsCreatePostloading(true);

      // Validate the newCertificate against the Yup validationSchema
      await validationSchema.validate(newCertificate, { abortEarly: false });

      // Proceed with the axios request
      const response = await axios.post(API_ENDPOINT, newCertificate);

      if (response.status === 200 || response.status === 201) {
        console.log(
          `Certificate added successfully: ${newCertificate.schoolName}`
        );
        setIsCreatePostSuccess(true);
        // Reset errors state if needed
      } else {
        console.error(
          `Error adding certificate: ${response.status} - ${response.statusText}`
        );
        // Handle different HTTP status codes appropriately
      }
    } catch (error) {
      // Handle errors
    } finally {
      setIsCreatePostloading(false);
    }
  };

  return { addCertificate, isCreatePostloading, isCreatePostSuccess };
};

import { Certificate } from "@/app/certificates/Models/Certificate";
import { validationSchema } from "@/app/certificates/validators/YupValidationSchema";
import axios from "axios";
import { useState } from "react";

export const useDataPosting = () => {
  const API_ENDPOINT = "/api/certificates";

  const [isCreatePostloading, setIsCreatePostloading] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);

  const addCertificate = async (newCertificate: Certificate): Promise<void> => {
    try {
      setIsCreatePostloading(true);
      await validationSchema.validate(newCertificate, { abortEarly: false });
      const response = await axios.post(API_ENDPOINT, newCertificate);

      if (response.status === 200 || response.status === 201) {
        console.log(
          `Certificate added successfully: ${newCertificate.schoolName}`
        );
        setShowSuccessToast(true);
        setTimeout(() => {
          setShowSuccessToast(false);
        }, 4000);
      } else {
        console.error(
          `Error adding certificate: ${response.status} - ${response.statusText}`
        );
        setTimeout(() => {
          setShowErrorToast(true);
        }, 4000);
      }
    } catch (error) {
      console.error("Error during certificate addition", error);
      setShowErrorToast(true);
    } finally {
      setIsCreatePostloading(false);
    }
  };

  return {
    addCertificate,
    isCreatePostloading,
    showSuccessToast,
    setShowSuccessToast,
    showErrorToast,
    setShowErrorToast
  };
};

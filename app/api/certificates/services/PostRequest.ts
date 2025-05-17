import { validationSchema } from "@/app/certificates/components/forms/validators/YupValidationSchema";
import { Certificate } from "@/app/certificates/types/Certificate";
import axios from "axios";
import { useState } from "react";

export const useDataPosting = () => {
  const API_ENDPOINT = "/api/certificates";

  const [isCreatePostLoading, setIsCreatePostLoading] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);

  const addCertificate = async (newCertificate: Certificate): Promise<void> => {
    setIsCreatePostLoading(true);

    try {
      // Validate input
      await validationSchema.validate(newCertificate, { abortEarly: false });

      // Post to API
      const { status } = await axios.post(API_ENDPOINT, newCertificate);

      if (status === 200 || status === 201) {
        console.log(`Certificate added: ${newCertificate.schoolName}`);
        setShowSuccessToast(true);
      } else {
        console.error(`Unexpected status code: ${status}`);
        setShowErrorToast(true);
      }
    } catch (error: any) {
      if (error.name === "ValidationError") {
        console.error("Validation failed:", error.errors);
      } else {
        console.error("Post error:", error);
      }
      setShowErrorToast(true);
    } finally {
      // Toasts auto-hide
      setTimeout(() => {
        setShowSuccessToast(false);
        setShowErrorToast(false);
      }, 4000);
      setIsCreatePostLoading(false);
    }
  };

  return {
    addCertificate,
    isCreatePostLoading,
    showSuccessToast,
    setShowSuccessToast,
    showErrorToast,
    setShowErrorToast,
  };
};

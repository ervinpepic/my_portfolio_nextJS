import { useState, useCallback } from "react";
import axios from "axios";

export const useDataDeleting = () => {
  const [forceRefetch, setForceRefetch] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);

  const resetToast = (setToastFn: (value: boolean) => void) => {
    setToastFn(true);
    setTimeout(() => setToastFn(false), 4000);
  };

  const handleDelete = useCallback(async (schoolName: string, certificateTitle: string) => {
    const API_ENDPOINT = `/api/certificates/${encodeURIComponent(schoolName)}/${encodeURIComponent(certificateTitle)}`;

    try {
      setDeleteLoading(true);
      const response = await axios.delete(API_ENDPOINT);

      if (response.status === 200) {
        console.log("Delete successful");
        resetToast(setShowSuccessToast);
        setForceRefetch((prev) => !prev);
      } else {
        console.error("Delete failed", response.data);
        resetToast(setShowErrorToast);
      }
    } catch (error) {
      console.error("Error during delete operation", error);
      resetToast(setShowErrorToast);
    } finally {
      setDeleteLoading(false);
    }
  }, []);

  return {
    handleDelete,
    forceRefetch,
    showSuccessToast,
    setShowSuccessToast,
    deleteLoading,
    showErrorToast,
    setShowErrorToast,
  };
};

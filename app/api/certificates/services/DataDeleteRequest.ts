import axios from "axios";
import { useState } from "react";

export const useDataDeleting = () => {
  const [forceUpdate, setForceUpdate] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);

  const handleDelete = async (schoolName: string, certificateTitle: string) => {
    const API_ENDPOINT = `/api/certificates/${encodeURIComponent(
      schoolName
    )}/${encodeURIComponent(certificateTitle)}`;

    try {
      setDeleteLoading(true);
      const response = await axios.delete(API_ENDPOINT);

      if (response.status === 200) {
        console.log("Delete successful");
        setShowSuccessToast(true);
        setTimeout(() => {
          setShowSuccessToast(false);
        }, 4000);
        setForceUpdate((prev) => !prev);
      } else {
        console.error("Delete failed", response.data);
        setShowErrorToast(true);
        setTimeout(() => {
          setShowErrorToast(false);
        }, 4000);
      }
    } catch (error) {
      console.error("Error during delete operation", error);
      setShowErrorToast(true);
      setTimeout(() => {
        setShowErrorToast(false);
      }, 4000);
    } finally {
      setDeleteLoading(false);
    }
  };

  return {
    handleDelete,
    forceUpdate,
    showSuccessToast,
    setShowSuccessToast,
    deleteLoading,
    showErrorToast,
    setShowErrorToast
  };
};

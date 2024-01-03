import axios from "axios";
import { useState } from "react";

export const useDataDeleting = () => {
  const [forceUpdate, setForceUpdate] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  const handleDelete = async (schoolName: string, certificateTitle: string) => {
    try {
      setDeleteLoading(true);
      const response = await axios.delete(
        `/api/certificates/${encodeURIComponent(
          schoolName
        )}/${encodeURIComponent(certificateTitle)}`
      );

      if (response.status === 200) {
        console.log("Delete successful");
        setShowSuccessToast(true);
        setTimeout(() => {
          setShowSuccessToast(false);
        }, 4000);
        setForceUpdate((prev) => !prev);
      } else {
        console.error("Delete failed", response.data);
      }
    } catch (error) {
      console.error("Error during delete operation", error);
    } finally {
      setDeleteLoading(false);
    }
  };

  return { handleDelete, forceUpdate, showSuccessToast, deleteLoading };
};

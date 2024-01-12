"use client";
import { useDataDeleting } from "@/app/api/certificates/services/DeleteRequest";
import { useDataFetching } from "@/app/api/certificates/services/FetchRequest";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Certificate } from "../Types/Certificate";
import BaseCardLayout from "./CardTemplates/BaseCardLayout";
import LoadingSkeleton from "./CardTemplates/LoadingSkeleton";
import ToastMessage from "./Forms/ToastMessage";

const Card = () => {
  const { status } = useSession();
  const { fetchData, fetchLoading } = useDataFetching();
  const {
    handleDelete,
    forceRefetch,
    showSuccessToast,
    deleteLoading,
    setShowSuccessToast,
    showErrorToast,
    setShowErrorToast,
  } = useDataDeleting();
  const [certificatesBySchool, setCertificatesBySchool] = useState<
    Record<string, Certificate[]>
  >({});
  useEffect(() => {
    const getCertificates = async () => {
      try {
        const fetchedCertificatesBySchool = await fetchData();
        setCertificatesBySchool(fetchedCertificatesBySchool);
      } catch (error) {}
    };
    getCertificates();
  }, [fetchData, forceRefetch]);

  return (
    <>
      {fetchLoading && <LoadingSkeleton skeletonCount={3} />}

      {showSuccessToast && (
        <ToastMessage
          formName="delete"
          messageType="success"
          successMessage="Certificate deleted successfully."
          onClose={() => setShowSuccessToast(false)}
        />
      )}
      {showErrorToast && (
        <ToastMessage
          formName="delete"
          messageType="danger"
          errorMessage="There is an error while deleting certificate."
          onClose={() => setShowErrorToast(false)}
        />
      )}

      <BaseCardLayout
        certificatesBySchool={certificatesBySchool}
        handleDelete={handleDelete}
        deleteLoading={deleteLoading}
        sessionStatus={status}
      />
    </>
  );
};

export default Card;

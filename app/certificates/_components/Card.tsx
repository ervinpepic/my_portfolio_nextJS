"use client";
import { useDataDeleting } from "@/app/api/certificates/services/DataDeleteRequest";
import { useDataFetching } from "@/app/api/certificates/services/DataFetchRequest";
import { useEffect, useState } from "react";
import LoadingSkeleton from "./LoadingSkeleton";
import DeleteBtn from "./_form/DeleteBtn";
import ToastMessage from "./_form/ToastMessage";
import { useSession } from "next-auth/react";
import { Certificate } from "../Interfaces/Certificate";

const Card = () => {
  const { fetchData, fetchLoading } = useDataFetching();
  const {
    handleDelete,
    forceRefetch,
    showSuccessToast,
    deleteLoading,
    setShowSuccessToast,
    showErrorToast,
    setShowErrorToast
  } = useDataDeleting();
  const [certificatesBySchool, setCertificatesBySchool] = useState<
    Record<string, Certificate[]>
  >({});
  const { status } = useSession();
  useEffect(() => {
    const getCertificates = async () => {
      try {
        const fetchedCertificatesBySchool = await fetchData();
        setCertificatesBySchool(fetchedCertificatesBySchool);
      } catch (error) {
      }
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
          onClose={()=> setShowSuccessToast(false)}
        />
      )}
      {showErrorToast && (
        <ToastMessage
          formName="delete"
          messageType="danger"
          errorMessage="There is an error while deleting certificate."
          onClose={()=> setShowErrorToast(false)}
        />
      )}

      {Object.entries(certificatesBySchool).map(
        ([schoolName, certificates]) => (
          <div key={schoolName}>
            <h1
              className="text-center md:text-start text-2xl font-semibold 
              text-gray-700 dark:text-slate-200 md:mt-10 mt-6 mb-3"
            >
              {schoolName}
            </h1>
            <div className="grid xl:grid-cols-3 xl:gap-4 md:grid-cols-2 md:gap-3">
              {certificates.map((certficaite, index) => (
                <div
                  key={index}
                  className="bg-slate-200 dark:bg-gray-700 rounded-md p-1 mb-4"
                >
                  <div className="flex justify-end">
                    {status === "authenticated" && (
                      <DeleteBtn
                        deleteFunction={() =>
                          handleDelete(schoolName, certficaite.title)
                        }
                        loading={deleteLoading}
                      />
                    )}
                  </div>
                  <h3
                    className="text-lg font-medium text-slate-700 dark:text-slate-200
                      pt-2 mt-2 mx-2 px-2 "
                  >
                    {certficaite.title}
                  </h3>
                  <h4
                    className="text-normal font-light text-slate-700 dark:text-slate-200 
                    mx-2 px-2"
                  >
                    {certficaite.subtitle}
                  </h4>
                  <p
                    className="text-base text-gray-700 dark:text-slate-200 
                    pt-2 px-2 mt-2 mx-2"
                  >
                    {certficaite.description}
                  </p>
                  <div className="p-2 m-2">
                    <a
                      className="text-slate-700 dark:text-slate-200 
                        hover:text-black hover:underline dark:hover:text-white"
                      href={certficaite.url!}
                    >
                      View Certificate
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      )}
    </>
  );
};

export default Card;

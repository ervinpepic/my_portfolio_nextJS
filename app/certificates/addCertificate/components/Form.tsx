"use client";
import { firestoreDB } from "@/app/firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { School } from "../../Models/School";
import CreateForm from "./CreteForm";

const Form = () => {
  const addCertificate = async (certificateData: School) => {
    try {
      await addDoc(collection(firestoreDB, "certificates"), certificateData);
      console.log("Certificate added successfully!");
    } catch (error) {
      console.error("Error adding certificate: ", error);
    }
  };
  return (
    <>
      <div className="flex flex-col mt-4 md:mt-10 mb-16">
        <div className="mt-16 lg:mt-20">
          <h1 className="text-center text-3xl font-semibold tracking-wide text-gray-700 dark:text-slate-200">
            Create a new certificate
          </h1>
          <CreateForm onSubmit={addCertificate}></CreateForm>
        </div>
      </div>
    </>
  );
};

export default Form;

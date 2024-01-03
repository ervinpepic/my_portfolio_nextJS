"use client";
import { useDataPosting } from "@/app/api/certificates/services/DataPostRequest";
import { useState } from "react";
import { School } from "../../Models/School";
import SubmitBtn from "./SubmitBtn";
import CreateForm from "./CreateForm";
import ToastMessage from "./ToastMessage";

const Form = () => {
  const { addCertificate, validateForm, errors } = useDataPosting();
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [formValues, setFormValues] = useState({
    schoolName: "",
    title: "",
    subtitle: "",
    description: "",
    url: "",
  });
  const handleInputChange = (fieldName: string, value: string) => {
    setFormValues((prevValues) => ({ ...prevValues, [fieldName]: value }));
    const updatedValues = {
      ...formValues,
      [fieldName]: value,
    };

    validateForm({
      schoolName: updatedValues.schoolName,
      certificates: [
        {
          title: updatedValues.title,
          subtitle: updatedValues.subtitle,
          description: updatedValues.description,
          url: updatedValues.url,
        },
      ],
    });
  };

  const createCertificate = async () => {
    setIsLoading(true);
    try {
      const { schoolName, title, subtitle, description, url } = formValues;
      if (
        validateForm({
          schoolName,
          certificates: [{ title, subtitle, description, url }],
        })
      ) {
        const newCertificate: School = {
          schoolName: schoolName,
          certificates: [
            {
              title: title,
              subtitle: subtitle,
              description: description,
              url: url,
            },
          ],
        };
        await addCertificate(newCertificate);
        setShowSuccessToast(true);
        setTimeout(() => {
          setShowSuccessToast(false);
        }, 4000);
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      {showSuccessToast && <ToastMessage formName="create" />}
      <CreateForm
        value={formValues}
        onChange={handleInputChange}
        errors={errors}
      />
      <div className="md:col-span-2 mt-6">
        <SubmitBtn
          onClick={createCertificate}
          label={isLoading ? "" : "Add a certificate"}
          loading={isLoading}
          errors={errors}
        />
      </div>
    </>
  );
};

export default Form;

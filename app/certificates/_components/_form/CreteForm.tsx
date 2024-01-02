"use client";
import { useState } from "react";
import { School } from "../../Models/School";
import ButtonSubmit from "./ButtonSubmit";
import Form from "./Form";
import HandleAPIRequest from "./HandleAPIRequest";
import ToastMessage from "./ToastMessage";

const CreateForm = () => {
  const { addCertificate, validateForm, errors } = HandleAPIRequest();
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
      {showSuccessToast && <ToastMessage />}
      <Form value={formValues} onChange={handleInputChange} errors={errors} />
      <div className="md:col-span-2 mt-6">
        <ButtonSubmit
          onClick={createCertificate}
          label={isLoading ? "" : "Add a certificate"}
          disabled={Object.keys(errors).length > 0}
          loading={isLoading}
        />
      </div>
    </>
  );
};

export default CreateForm;

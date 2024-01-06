"use client";
import { useDataPosting } from "@/app/api/certificates/services/DataPostRequest";
import { useFormik } from "formik";
import { validationSchema } from "./validators/YupValidationSchema";
import { formClassNames } from "./FormClasses";
import { formFields } from "./FormFields";
import SubmitBtn from "./SubmitBtn";
import ToastMessage from "./ToastMessage";

const CreateForm = () => {

  const {
    addCertificate,
    isCreatePostloading,
    showSuccessToast,
    setShowSuccessToast,
    showErrorToast,
    setShowErrorToast
  } = useDataPosting();

  const formik = useFormik({
    initialValues: { schoolName: "", title: "", subtitle: "", description: "", url: "" },
    validationSchema: validationSchema,

    onSubmit: async (values) => {
      try {
        await addCertificate(values);
        formik.resetForm();
      } catch (error) {
        console.error("Submission failed:", error);
      }
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <form onSubmit={handleSubmit} method="POST">
      {showSuccessToast && (
        <ToastMessage
          formName="create"
          messageType="success"
          successMessage="Post created successfully."
          onClose={() => setShowSuccessToast(false)}
        />
      )}
      {showErrorToast && (
        <ToastMessage
          formName="create"
          messageType="danger"
          errorMessage="There is an error during post creation."
          onClose={() => setShowErrorToast(false)}
        />
      )}
      <div className="mt-10 grid gap-6 mb-6 md:grid-cols-2">
        {formFields.map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name}>{field.label}</label>
            <div className="mt-2" key={field.name}>
              <input
                id={field.name}
                type={field.type}
                name={field.name}
                value={values[field.name as keyof typeof values]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className={`${formClassNames.initClass} ${
                  errors[field.name as keyof typeof errors] &&
                  touched[field.name as keyof typeof errors]
                    ? formClassNames.errorClass
                    : ""
                }`}
              />
              {errors[field.name as keyof typeof errors] &&
                touched[field.name as keyof typeof errors] && (
                  <span className="text-red-700">
                    {errors[field.name as keyof typeof errors]}
                  </span>
                )}
            </div>
          </div>
        ))}
        <div className="md:col-span-2 mt-6">
          <SubmitBtn
            loading={isCreatePostloading}
            errors={errors}
            touched={touched}
          />
        </div>
      </div>
    </form>
  );
};
export default CreateForm;

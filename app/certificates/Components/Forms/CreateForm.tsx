"use client";
import { useDataPosting } from "@/app/api/certificates/services/PostRequest";
import { useFormik } from "formik";
import SubmitBtn from "./Buttons/SubmitBtn";
import ToastMessage from "./ToastMessage";
import { formFields } from "./styles/FormFields";
import { formClass } from "./styles/FormSyles";
import { validationSchema } from "./validators/YupValidationSchema";

const CreateForm = () => {
  const {
    addCertificate,
    isCreatePostloading,
    showSuccessToast,
    setShowSuccessToast,
    showErrorToast,
    setShowErrorToast,
  } = useDataPosting();

  const formik = useFormik({
    initialValues: {
      schoolName: "",
      title: "",
      subtitle: "",
      description: "",
      url: "",
    },
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
  const {labelClass, initClass, errorClass} = formClass;
  return (
    <>
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
      <form
        onSubmit={handleSubmit}
        method="POST"
        className="grid gap-6 md:grid-cols-2 mt-10 mb-6"
      >
        {formFields.map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name} className={labelClass}>{field.label}</label>
            <div className="mt-2" key={field.name}>
              <input
                id={field.name}
                type={field.type}
                name={field.name}
                value={values[field.name as keyof typeof values]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className={`${initClass} ${
                  errors[field.name as keyof typeof errors] &&
                  touched[field.name as keyof typeof errors]
                    ? errorClass
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
        <div className="md:col-span-2 mt-4">
          <SubmitBtn
            loading={isCreatePostloading}
            errors={errors}
            touched={touched}
          />
        </div>
      </form>
    </>
  );
};
export default CreateForm;

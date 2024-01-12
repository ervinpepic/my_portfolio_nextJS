import { FormikErrors, FormikTouched } from "formik";
import { Certificate } from "../../../types/Certificate";
import { btnClassNames } from "../styles/FormSyles";
const { btnDisabled, btnEnabled} = btnClassNames;
const SubmitBtn = ({
  loading,
  errors,
  touched,
}: {
  loading: boolean;
  errors: FormikErrors<Certificate>;
  touched: FormikTouched<Certificate>;
}) => {
  const hasErrors =
    Object.keys(touched).length > 0 && Object.values(errors).some(Boolean);
  return (
    <button
      className={ hasErrors ? btnDisabled : btnEnabled }
      type="submit"
      disabled={hasErrors} // Disable the button if there are errors
    >
      {loading ? "Creating..." : "Add a certificate"}
    </button>
  );
};

export default SubmitBtn;

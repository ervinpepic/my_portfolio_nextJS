const classNames = {
  btnDisabled:
    "text-gray-400 bg-gray-700 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-slate-600 cursor-not-allowed",
  btnEnabled:
    "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
};

const SubmitBtn = ({
  onClick,
  label,
  loading,
  errors
}: {
  onClick: () => void;
  label: string;
  loading: boolean;
  errors: Record<string, string>;
}) => {
  const isDisabled = loading || Object.keys(errors).length > 0;
  return (
    <button
      className={isDisabled ? classNames.btnDisabled : classNames.btnEnabled}
      type="submit"
      onClick={onClick}
      disabled={isDisabled}
    >
      {loading ? "Loading.." : label}
    </button>
  );
};

export default SubmitBtn;

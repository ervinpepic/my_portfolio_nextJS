interface ButtonSubmitProps {
  onClick: () => void;
  label: string;
  loading: boolean;
  disabled: boolean;
}
const classNames = {
  btnDisabled:
    "text-gray-400 bg-gray-700 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-slate-600 cursor-not-allowed",
  btnEnabled:
    "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
};

const ButtonSubmit = ({
  onClick,
  label,
  loading,
  disabled,
}: ButtonSubmitProps) => {
  return (
    <button
      className={disabled ? classNames.btnDisabled : classNames.btnEnabled}
      type="submit"
      onClick={onClick}
      disabled={disabled}
    >
      {loading ? "Loading.." : label}
    </button>
  );
};

export default ButtonSubmit;

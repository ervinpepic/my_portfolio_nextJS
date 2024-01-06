const ToastMessage = ({
  formName,
  messageType,
  successMessage = "Operation successful.",
  errorMessage = "Operation failed.",
  onClose
}: {
  formName: string;
  messageType: "success" | "danger";
  successMessage?: string;
  errorMessage?: string;
  onClose: () => void;
}) => {
  const getMessage = () => {
    switch (formName) {
      case "create":
        return messageType === "success" ? successMessage : errorMessage;
      case "delete":
        return messageType === "success" ? successMessage : errorMessage;
      default:
        return "";
    }
  };

  const getClassName = () => {
    switch (messageType) {
      case "success":
        return "bg-teal-100 border-t-4 border-teal-500 text-teal-900";
      case "danger":
        return "bg-red-100 border-t-4 border-red-500 text-red-900";
      default:
        return "";
    }
  };

  return (
    <div
      className={`absolute right-5 top-5 ${getClassName()} rounded-b px-4 py-3 shadow-md`}
      role="alert"
    >
      <div className="flex">
        <div className="py-1">
          <svg
            className={`fill-current h-6 w-6 ${
              messageType === "success" ? "text-teal-500" : "text-red-500"
            } mr-4`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
          </svg>
        </div>
        <div>
          <p className="font-bold">Notification Center</p>
          <p className="text-sm">{getMessage()}</p>
        </div>
        <button
          type="button"
          className="absolute top-0 right-0 mt-1 mr-2 text-xl font-semibold cursor-pointer focus:outline-none"
          onClick={onClose}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default ToastMessage;

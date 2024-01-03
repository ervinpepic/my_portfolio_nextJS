import React from "react";

const ToastMessage = ({ formName }: { formName: string }) => {
  const getFormName = () => {
    switch (formName) {
      case "create":
        return "Certificate added successfully.";
      case "delete":
        return "Certificate deleted successfully.";
      default:
        return "";
    }
  };
  return (
    <div className="toast toast-center toast-middle">
      <div className="alert alert-success">
        <span>{getFormName()}</span>
      </div>
    </div>
  );
};

export default ToastMessage;

import React from "react";

const ButtonSubmit = ({ label, onClick }: {label: string, onClick: () => void}) => {
  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded"
      type="submit"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ButtonSubmit;

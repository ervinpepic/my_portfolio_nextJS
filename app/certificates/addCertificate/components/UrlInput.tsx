import React from "react";
import FormInputProps from "../Model/InputFIeldsInterface";

const UrlInput = ({
  label,
  name,
  id,
  autoComplete,
  value,
  onChange,
}: FormInputProps) => {
  return (
    <>
      <label
        htmlFor="title"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          type="text"
          name={name}
          id={id}
          autoComplete={autoComplete}
          value={value}
          onChange={onChange}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </>
  );
};

export default UrlInput;

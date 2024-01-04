"use client";
import { FormInputProps } from "../../Models/FormProps";
import { classNames } from "./FormClassNames";

const Form = ({ value, onChange, errors }: FormInputProps) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="mt-10 grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label htmlFor="schoolName" className={classNames.labelClass}>
            School name
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="schoolName"
              id="schoolName"
              autoComplete="true"
              value={value.schoolName}
              onChange={(e) => onChange("schoolName", e.target.value)}
              placeholder="Enter school name"
              className={`
                ${classNames.initClass} ${
                errors && errors["schoolName"]
                  ? classNames.errorClass
                  : classNames.noErrorClass
              }`}
            />
            {errors && (
              <p className="text-red-500 text-xs mt-1">
                {errors["schoolName"]}
              </p>
            )}
          </div>
        </div>
        <div>
          <label htmlFor="title" className={classNames.labelClass}>
            Title
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="title"
              id="title"
              autoComplete="true"
              value={value.title}
              onChange={(e) => onChange("title", e.target.value)}
              placeholder="Title of certificate"
              className={`
                ${classNames.initClass} ${
                errors && errors["certificates.0.title"]
                  ? classNames.errorClass
                  : classNames.noErrorClass
              }`}
            />
            {errors && (
              <p className="text-red-500 text-xs mt-1">
                {errors["certificates.0.title"]}
              </p>
            )}
          </div>
        </div>
        <div>
          <label htmlFor="subtitle" className={classNames.labelClass}>
            Subtitle
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="subtitle"
              id="subtitle"
              autoComplete="true"
              value={value.subtitle}
              placeholder="Enter subtitle or addition name for school"
              onChange={(e) => onChange("subtitle", e.target.value)}
              className={`
                ${classNames.initClass} ${
                errors && errors["certificates.0.subtitle"]
                  ? classNames.errorClass
                  : classNames.noErrorClass
              }`}
            />
            {errors && (
              <p className="text-red-500 text-xs mt-1">
                {errors["certificates.0.subtitle"]}
              </p>
            )}
          </div>
        </div>
        <div>
          <label htmlFor="description" className={classNames.labelClass}>
            Description
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="description"
              id="description"
              autoComplete="true"
              value={value.description}
              onChange={(e) => onChange("description", e.target.value)}
              placeholder="Describe what you have learned"
              className={`
                ${classNames.initClass} ${
                errors && errors["certificates.0.description"]
                  ? classNames.errorClass
                  : classNames.noErrorClass
              }`}
            />
            {errors && (
              <p className="text-red-500 text-xs mt-1">
                {errors["certificates.0.description"]}
              </p>
            )}
          </div>
        </div>
        <div>
          <label htmlFor="url" className={classNames.labelClass}>
            URL
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="url"
              id="url"
              autoComplete="true"
              value={value.url}
              onChange={(e) => onChange("url", e.target.value)}
              placeholder="URL to image or school evidence"
              className={`
                ${classNames.initClass} ${
                errors && errors["certificates.0.url"]
                  ? classNames.errorClass
                  : classNames.noErrorClass
              }`}
            />
            {errors && (
              <p className="text-red-500 text-xs mt-1">
                {errors["certificates.0.url"]}
              </p>
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;

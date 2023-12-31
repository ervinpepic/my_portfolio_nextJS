"use client";
import React, { useState } from "react";
import { School } from "../../Models/School";
import SchoolInput from "./SchoolInput";
import TitleInput from "./TitleInput";
import SubTitleInput from "./SubTitleInput";
import DescriptionInput from "./DescriptionInput";
import UrlInput from "./UrlInput";
import ButtonSubmit from "./ButtonSubmit";

const CreateForm = ({
  onSubmit, //this is used to pass the method for adding certitifacates to the parent component
}: {
  onSubmit: (certificateData: School) => void;
}) => {
  const [schoolName, setSchoolName] = useState("");
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");

  const preparetoAddCertificate = () => {
    const newCertificate: School = {
      schoolName: schoolName,
      certificates: [
        {
          title: title,
          subtitle: subtitle,
          description: description,
          url: url,
        },
      ],
    };

    // Use the onSubmit prop to pass the certificate data to the parent component
    onSubmit(newCertificate);
  };
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <SchoolInput
            label="School Name"
            name="schoolName"
            id="schoolName"
            autoComplete="schoolName"
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)}
          ></SchoolInput>
        </div>

        <div className="sm:col-span-3">
          <TitleInput
            label="Title"
            name="title"
            id="title"
            autoComplete="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></TitleInput>
        </div>

        <div className="sm:col-span-3">
          <SubTitleInput
            label="Subtitle"
            name="subtitle"
            id="subtitle"
            autoComplete="subtitle"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
          ></SubTitleInput>
        </div>
        <div className="sm:col-span-3">
          <DescriptionInput
            label="Description"
            name="description"
            id="description"
            autoComplete="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></DescriptionInput>
        </div>
        <div className="sm:col-span-3">
          <UrlInput
            label="Url"
            name="url"
            id="url"
            autoComplete="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          ></UrlInput>
        </div>
        <ButtonSubmit
          onClick={preparetoAddCertificate}
          label="Add Certificate"
        ></ButtonSubmit>
      </div>
    </form>
  );
};

export default CreateForm;

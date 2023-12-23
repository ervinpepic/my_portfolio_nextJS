import Link from "next/link";
import React from "react";
import { PiCertificateThin, PiFileTextThin, PiFilesThin } from "react-icons/pi";

const QualificationExperience = () => {
  const IconClassNames = ["text-5xl mb-2"];
  const Links = [
    {
      link: (
        <a href="/static/images/pdf/cv.pdf">
          <PiFileTextThin className={`${IconClassNames[0]} ml-2`} />
          Resume
        </a>
      ),
    },
    {
      link: (
        <a href="/static/images/pdf/cl.pdf">
          <PiFilesThin className={`${IconClassNames[0]} ml-6`} />
          Cover Letter
        </a>
      ),
    },
    {
      link: (
        <Link href={"/certificates"}>
          <PiCertificateThin className={`${IconClassNames[0]} ml-5`} />
          Certificates
        </Link>
      ),
    },
  ];

  return (
    <>
      {Links.map((htmlElement, index) => (
        <div
          key={index}
          className="text-gray-700 dark:text-slate-200 hover:text-opacity-70  dark:hover:text-opacity-70 hover:scale-110 dark:hover:scale-110 
          duration-300 dark:duration-300 mx-4"
        >
          {htmlElement.link}
        </div>
      ))}
    </>
  );
};

export default QualificationExperience;

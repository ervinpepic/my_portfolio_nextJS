import Link from "next/link";
import React from "react";
import { PiCertificateThin, PiFileTextThin, PiFilesThin } from "react-icons/pi";

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

const QualificationExperience = () => {
  return (
    <>
      <div className="flex flex-col px-2">
        <h6
          className="text-center mt-4 font-medium 
            text-xl tracking-wider text-gray-700 
            dark:text-slate-200"
        >
          Explore my qualifications, skills, and experience
        </h6>
      </div>
      <div className="flex justify-center mt-5">
        {Links.map((htmlElement, index) => (
          <div
            key={index}
            className="text-gray-700 dark:text-slate-200 
              hover:text-opacity-70  dark:hover:text-opacity-70 
              hover:scale-110 dark:hover:scale-110 
              duration-300 dark:duration-300 mx-4"
          >
            {htmlElement.link}
          </div>
        ))}
      </div>
    </>
  );
};

export default QualificationExperience;

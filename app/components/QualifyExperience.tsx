import Link from "next/link";
import React from "react";
import { PiCertificateThin, PiFileTextThin, PiFilesThin } from "react-icons/pi";

const QualificationExperience = () => {
  const IconClassNames = ["text-5xl mb-2"];
  const Links = [
    {
      title: "Resume",
      icon: <PiFilesThin className={`${IconClassNames[0]} ml-2`} />,
      href: "/static/images/pdf/cv.pdf",
    },
    {
      title: "Cover Letter",
      icon: <PiFileTextThin className={`${IconClassNames[0]} ml-6`} />,
      href: "/static/images/pdf/cl.pdf",
    },
  ];

  return (
    <>
      {Links.map((link, index) => (
        <div
          key={index}
          className="text-gray-700 hover:scale-110 duration-300 
            dark:text-slate-200 dark:hover:scale-110 
            dark:duration-300 mx-4"
        >
          <a href={link.href}>
            {link.icon}
            {link.title}
          </a>
        </div>
      ))}
      <div
        className="text-gray-700 hover:scale-110 duration-300 
            dark:text-slate-200 dark:hover:scale-110 
            dark:duration-300 mx-4"
      >
        <Link href={"/certificates"}>
          <PiCertificateThin className={`${IconClassNames[0]} ml-5`} />
          Certificates
        </Link>
      </div>
    </>
  );
};

export default QualificationExperience;

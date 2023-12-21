import Link from "next/link";
import React from "react";
import { PiCertificateThin, PiFileTextThin, PiFilesThin } from "react-icons/pi";

const QualificationExperience = () => {
  const IconClassNames = ["text-5xl mb-2"];
  const Links = [
    {
      title: "Resume",
      href: "/media/uploads/pdf/CV_web_app.pdf",
      icon: <PiFilesThin className={`${IconClassNames[0]} ml-2`} />,
    },
    {
      title: "Cover Letter",
      href: "/media/uploads/pdf/cover_letter.pdf",
      icon: <PiFileTextThin className={`${IconClassNames[0]} ml-6`} />,
    },
    {
      title: "Certificates",
      href: "/certificates",
      icon: <PiCertificateThin className={`${IconClassNames[0]} ml-5`} />,
    },
  ];

  return (
    <>
      {Links.map((link, index) => (
          <div key={index}
            className="text-gray-700 hover:scale-110 duration-300 
            dark:text-slate-200 dark:hover:scale-110 
            dark:duration-300 mx-4"
          >
            <Link href={link.href}>
              {link.icon}
              {link.title}
            </Link>
          </div>
      ))}
    </>
  );
};

export default QualificationExperience;

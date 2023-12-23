import React from "react";

const descriptions = [
  {
    language: "Python",
    framework: "Django, Flask",
  },
  {
    language: "PHP",
    framework: "Laravel, Drupal, Wordpress",
  },
  {
    language: "Typescrypt | Javascript",
    framework: "Angular, React, Next.js",
  },
  {
    language: "Clasic programming",
    framework: "C, C++, Java, GoLang",
  },
  {
    language: "Database",
    framework: "MySQL, Postgres, MongoDB, Firebase",
  },
];
const QualificationDescription = () => {
  return (
    <>
      {descriptions.map((programming, index) => (
        <div key={index}>
          <p className="mt-3 text-base text-gray-700 dark:text-slate-200">
            <span className="font-semibold">{programming.language}: </span>
            <span className="font-light">{programming.framework}</span>
          </p>
        </div>
      ))}
      <h6 className="mt-4 font-medium text-xl text-gray-700 dark:text-slate-200">
        Explore my qualifications, skills, and experience
      </h6>
    </>
  );
};

export default QualificationDescription;

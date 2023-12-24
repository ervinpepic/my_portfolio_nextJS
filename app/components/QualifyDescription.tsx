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
    language: "System programming",
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
      <div className="flex flex-col text-center px-2">
        {descriptions.map((programming, index) => (
          <div key={index}>
            <p className="mt-3 text-base text-gray-700 dark:text-slate-200">
              <span className="font-semibold text-lg">
                {programming.language}:{" "}
              </span>
              <span className="font-normal text-lg">
                {programming.framework}
              </span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default QualificationDescription;

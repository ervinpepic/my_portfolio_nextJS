import React from "react";

const CertificateHeader = () => {
  return (
    <div className="flex flex-col mt-4 md:mt-10 mb-16">
      <div className="mt-16 lg:mt-20">
        <h1 className="text-center md:text-start text-3xl font-semibold tracking-wide text-gray-700 dark:text-slate-200">
          Certificates & Awards
        </h1>
        <p className="lg:w-11/12 w-full md:text-start text-center text-lg font-medium text-gray-700 dark:text-slate-200 mt-5">
          This page showcases my achievements in the field of programming
          through certificates and awards. Each recognition represents a
          milestone in my journey, reflecting my dedication to mastering various
          programming languages and skills.
        </p>
      </div>
    </div>
  );
};

export default CertificateHeader;

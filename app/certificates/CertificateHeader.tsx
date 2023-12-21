import React from "react";

const CertificateHeader = () => {
  return (
    <div className="grid xl:mt-10 lg:mt-10 md:mt-10 mt-2 mb-16">
      <div className="xl:mt-20 lg:mt-20 md:mt-14 mt-16 xl:ml-14 lg:ml-14 md:ml-14">
        <h1
          className="xl:text-start lg:text-start md:text-start text-center 
                text-3xl font-semibold text-gray-700 dark:text-slate-200"
        >
          Certificates & Awards
        </h1>
        <p
          className="xl:w-11/12 lg:w-11/12 w-full xl:text-start md:text-start 
                lg:text-start text-center text-lg font-light text-gray-700 
                dark:text-slate-200 mt-5"
        >
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

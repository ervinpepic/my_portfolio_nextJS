import Link from "next/link";
import React from "react";
import { School } from "./Scool";

// imported from School Interface ts file
interface Props {
  schools: School[];
}

const Card = ({ schools }: Props) => {
  return (
    <>
      {schools.map((school) => (
        <div key={school.school_id}>
          <h1
            className="xl:text-start lg:text-start md:text-start text-center 
                text-2xl font-semibold text-gray-700 dark:text-slate-200 
                xl:mt-14 lg:mt-14 md:mt-8 mt-6 mb-3"
          >
            {school.school_name}
          </h1>
          <div
            className="grid xl:grid-cols-3 xl:gap-4 lg:grid-cols-3 
                lg:gap-4 md:grid-cols-2 md:gap-4"
          >
            {school.certificates.map((certficaite) => (
              <div
                key={certficaite.certificate_id}
                className="bg-slate-200 dark:bg-gray-700 rounded-md p-1 mb-4"
              >
                <h3
                  className="pt-2 mt-2 mx-2 px-2 text-lg font-medium 
                      text-slate-700 dark:text-slate-200"
                >
                  {certficaite.title}
                </h3>
                <h4
                  className="mx-2 px-2 text-normal font-light 
                      text-slate-700 dark:text-slate-200"
                >
                  {certficaite.subtitle}
                </h4>
                <p
                  className="text-base text-gray-700 dark:text-slate-200 
                    pt-2 mt-2 mx-2 px-2"
                >
                  {certficaite.description}
                </p>
                <div className="p-2 m-2">
                  <Link
                    className="text-slate-700 dark:text-slate-200 
                        hover:text-black hover:underline dark:hover:text-white"
                    href={certficaite.url!}
                  >
                    View Certificate
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;

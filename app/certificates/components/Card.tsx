'use client';
import { firestoreDB } from "@/app/firebase/config";
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { School } from "../Models/School";
import LoadingSkeleton from "./LoadingSkeleton";


const Card = () => {
  const [schools, setSchools] = useState<School[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestoreDB, 'certificates'));
        const schoolsData = querySnapshot.docs.map(school => school.data() as School);
        setSchools(schoolsData);
        setLoading(false);
      } catch (error) {
        console.error("Error while fetching data from firebase: ", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs once on component mount  
  return (

    <>
    {loading && <LoadingSkeleton skeletonCount={3}/>}
      {schools.map((school, schoolIndex) => (
        <div key={schoolIndex}>
          <h1
            className="text-center md:text-start text-2xl font-semibold 
              text-gray-700 dark:text-slate-200 md:mt-10 mt-6 mb-3"
          >
            {school.schoolName}
          </h1>
          <div className="grid xl:grid-cols-3 xl:gap-4 md:grid-cols-2 md:gap-3">
            {school.certificates.map((certficaite, index) => (
              <div
                key={index}
                className="bg-slate-200 dark:bg-gray-700 rounded-md p-1 mb-4"
              >
                <h3
                  className="text-lg font-medium text-slate-700 dark:text-slate-200 ]
                    pt-2 mt-2 mx-2 px-2 "
                >
                  {certficaite.title}
                </h3>
                <h4
                  className="text-normal font-light text-slate-700 dark:text-slate-200 
                    mx-2 px-2"
                >
                  {certficaite.subtitle}
                </h4>
                <p
                  className="text-base text-gray-700 dark:text-slate-200 
                    pt-2 px-2 mt-2 mx-2"
                >
                  {certficaite.description}
                </p>
                <div className="p-2 m-2">
                  <a
                    className="text-slate-700 dark:text-slate-200 
                        hover:text-black hover:underline dark:hover:text-white"
                    href={certficaite.url!}
                  >
                    View Certificate
                  </a>
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

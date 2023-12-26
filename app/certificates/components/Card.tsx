import prisma from "@/prisma/client";


const Card = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const schools = await prisma.school.findMany({
    include: {
      certificates: true,
    }
  });
  return (
    <>
    
      {schools.map((school) => (
        <div key={school.school_id}>
          <h1
            className="text-center md:text-start text-2xl font-semibold 
              text-gray-700 dark:text-slate-200 md:mt-10 mt-6 mb-3"
          >
            {school.school_name}
          </h1>
          <div className="grid xl:grid-cols-3 xl:gap-4 md:grid-cols-2 md:gap-3">
            {school.certificates.map((certficaite) => (
              <div
                key={certficaite.certificate_id}
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

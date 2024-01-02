import React from "react";

const LoadingSkeleton = ({ skeletonCount }: { skeletonCount: number }) => {
  const placeholderArray = Array.from({ length: skeletonCount });

  return (
    <React.Fragment>
      <button
        className="
        w-10 h-10 fixed bottom-10 right-5 px-2 rounded-full 
        bg-gray-700 dark:bg-slate-200 animate-pulse"
      ></button>

      {placeholderArray.map((_, rowIndex) => (
        <div key={rowIndex} className="animate-pulse">
          <h1
            className="
                  md:mt-10 mt-6 mb-3 
                  w-48 h-5 bg-slate-700 dark:bg-slate-200 rounded-sm"
          ></h1>
          <div className="grid xl:grid-cols-3 xl:gap-4 md:grid-cols-2 md:gap-3">
            {placeholderArray.map((_, certIndex) => (
              <div
                key={certIndex}
                className="
                    w-full h-52
                    bg-slate-200 dark:bg-gray-700 rounded-md p-1 mb-4"
              >
                <h3
                  className="
                      pt-2 mt-6 mx-2 px-2
                      w-48 h-3 bg-slate-700 dark:bg-slate-200 rounded-sm"
                ></h3>
                <h4
                  className="
                    mx-2 px-2 pt-2 mt-2
                    w-32 h-2 bg-slate-500 dark:bg-slate-200 rounded-sm"
                ></h4>
                <p
                  className="
                        w-3/3 h-2 pt-2 px-2 mt-8 mx-2 
                        bg-slate-700 dark:bg-slate-50 rounded-sm"
                ></p>
                <p
                  className="
                        w-1/3 h-2
                        pt-2 px-2 mt-2 mx-2 
                        bg-slate-700 dark:bg-slate-200 rounded-sm"
                ></p>
                <div className="pt-2 mt-12 mx-2">
                  <p
                    className="
                        w-1/3 h-2
                        bg-slate-700 dark:bg-slate-200 rounded-sm"
                  ></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default LoadingSkeleton;

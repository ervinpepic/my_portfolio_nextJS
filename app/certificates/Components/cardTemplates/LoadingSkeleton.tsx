import React from "react";
import { cardStyle } from "./CardStyle";

const LoadingSkeleton = ({ skeletonCount }: { skeletonCount: number }) => {
  const placeholderArray = Array.from({ length: skeletonCount });
  const {
    skeletonSchoolNameClass,
    skeletonCardClass,
    skeletonTitleClass,
    skeletonSubtitleClass,
    skeletonParagraphClass,
    skeletonParagraphClass2,
    skeletonLinkClass,
  } = cardStyle;
  return (
    <React.Fragment>
      {placeholderArray.map((_, rowIndex) => (
        <div key={rowIndex} className="animate-pulse">
          <h1 className={skeletonSchoolNameClass}></h1>
          <div className="grid xl:grid-cols-3 xl:gap-4 md:grid-cols-2 md:gap-3">
            {placeholderArray.map((_, certIndex) => (
              <div key={certIndex} className={skeletonCardClass}>
                <h3 className={skeletonTitleClass}></h3>
                <h4 className={skeletonSubtitleClass}></h4>
                <p className={skeletonParagraphClass}></p>
                <p className={skeletonParagraphClass2}></p>
                <div className="pt-2 mt-12 mx-2">
                  <p className={skeletonLinkClass}></p>
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

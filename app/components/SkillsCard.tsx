import React from "react";

const SkillsCard = ({
  title,
  programmingLanguagesSubtitle,
  otherSkillsSubtitle,
  programmingLang,
  otherSkills,
  icons,
}: {
  title: string;
  programmingLanguagesSubtitle: string;
  otherSkillsSubtitle: string;
  programmingLang: { name: string; framework: string }[];
  otherSkills: { name: string; framework: string }[];
  icons: React.ComponentType<{}>[];
}) => {
  return (
    <div className="bg-slate-200 dark:bg-gray-700 rounded-md p-1 mb-4 w-auto h-auto">
      <h3
        className="text-center text-lg font-medium text-slate-700 
          dark:text-slate-200 pt-2 mt-2 mx-2 px-2"
      >
        {title}
      </h3>
      <h4
        className="
    text-center text-normal font-medium text-slate-700 dark:text-slate-200 
    mx-2 px-2 mt-6"
      >
        {programmingLanguagesSubtitle}
      </h4>
      {programmingLang.map((language, index) => (
        <p
          key={index}
          className="
              flex text-base text-gray-700 dark:text-slate-200 pt-2 px-2 mt-2 mx-2"
        >
          <span className="font-medium">{language.name} : </span>{" "}
          {language.framework}
        </p>
      ))}
      <h4
        className="
    text-center text-normal font-medium text-slate-700 dark:text-slate-200 
    mx-2 px-2 mt-6"
      >
        {otherSkillsSubtitle}
      </h4>
      {otherSkills.map((language, index) => (
        <p
          key={index}
          className="
              flex text-base text-gray-700 dark:text-slate-200 pt-2 px-2 mt-2 mx-2"
        >
          <span className="font-medium">{language.name} : </span>{" "}
          {language.framework}
        </p>
      ))}
      <div
        className="flex justify-center text-xl text-gray-700 
      dark:text-slate-200 pt-2 px-2 mt-2 mx-2 mb-4"
      >
        {icons.map((Icon, index) => (
          <span key={index} className="mx-0.5">
            <Icon />
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;

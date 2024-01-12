import { homeCardClasses } from "./HomeCardClasses";

const BaseCardLayout = ({
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
  const {cardClass, titelClass, subtitlessClass, paragraphClass, iconClass} = homeCardClasses;
  return (
    <div className={cardClass}>
      <h3 className={titelClass}>{title}</h3>
      <h4 className={subtitlessClass}>
        {programmingLanguagesSubtitle}
      </h4>
      {programmingLang.map((language, index) => (
        <p key={index} className={paragraphClass}>
          <span className="font-medium">{language.name}:&nbsp;</span>
          {language.framework}
        </p>
      ))}
      <h4 className={subtitlessClass}>{otherSkillsSubtitle}</h4>
      {otherSkills.map((language, index) => (
        <p key={index} className={paragraphClass}>
          <span className="font-medium">{language.name}:&nbsp;</span>
          {language.framework}
        </p>
      ))}
      <div className={iconClass}>
        {icons.map((Icon, index) => (
          <span key={index} className="mx-0.5"><Icon /></span>
        ))}
      </div>
    </div>
  );
};

export default BaseCardLayout;

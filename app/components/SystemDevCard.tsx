import { systemDevCardData } from "../Models/SysDevData";
import BaseCardLayout from "./CardTemplates/CardBaseLayout";

const SystemDevCard = () => {
  const { title, subtitles, programmingLang, otherSkills, icons } = systemDevCardData;
  return (
    <BaseCardLayout
      title={title}
      programmingLanguagesSubtitle={subtitles.first}
      programmingLang={programmingLang}
      otherSkillsSubtitle={subtitles.second}
      otherSkills={otherSkills}
      icons={icons}
    />
  );
};

export default SystemDevCard;

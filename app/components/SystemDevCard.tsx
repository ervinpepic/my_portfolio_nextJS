import { systemDevCardData } from "../Models/SystemDevCardData";
import SklissCard from "./SkillsCard";

const SystemDevCard = () => {
  const { title, subtitles, programmingLang, otherSkills, icons } = systemDevCardData;
  return (
    <SklissCard
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

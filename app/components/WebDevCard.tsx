import { webDevCardData } from "../Models/WebDevCardData";
import SkillsCard from "./SkillsCard";

const WebDevCard = () => {
  const { title, subtitles, programmingLang, otherSkills, icons } = webDevCardData;
  return (
    <SkillsCard
      title={title}
      programmingLanguagesSubtitle={subtitles.first}
      programmingLang={programmingLang}
      otherSkillsSubtitle={subtitles.second}
      otherSkills={otherSkills}
      icons={icons}
    />
  );
};

export default WebDevCard;

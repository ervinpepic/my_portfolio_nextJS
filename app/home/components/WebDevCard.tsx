import { webDevCardData } from "../models/WebDevData";
import BaseCardLayout from "./cardTemplates/BaseCardLayout";

const WebDevCard = () => {
  const { title, subtitles, programmingLang, otherSkills, icons } = webDevCardData;
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

export default WebDevCard;

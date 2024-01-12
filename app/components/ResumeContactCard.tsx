import { SocialLinks, contactData } from "../Models/ContactData";
import ContactCard from "./CardTemplates/ContactCardBaseLayout";

const ResumeContactCard = () => {
  const { title, subtitles, links, description } = contactData;
  return (
    <ContactCard
      title={title}
      subtitleFirst={subtitles.first}
      cvLinks={links}
      subtitleSecond={subtitles.second}
      description={description}
      contactLinks={SocialLinks}
    />
  );
};

export default ResumeContactCard;

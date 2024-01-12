import { SocialLinks, contactData } from "../data/ContactData";
import ContactCardBaseLayout from "./cardTemplates/ContactCardBaseLayout";

const ContactCard = () => {
  const { title, subtitles, links, description } = contactData;
  return (
    <ContactCardBaseLayout
      title={title}
      subtitleFirst={subtitles.first}
      cvLinks={links}
      subtitleSecond={subtitles.second}
      description={description}
      contactLinks={SocialLinks}
    />
  );
};

export default ContactCard;

import { SocialLinks, contactData } from "../Models/ContactDevData";
import { PiCertificateThin } from "react-icons/pi";
import Link from "next/link";
import ContactCard from "./ContactCard";

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

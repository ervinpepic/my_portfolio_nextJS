import Link from "next/link";
import { PiCertificateThin } from "react-icons/pi";
import { Links } from "../../types/Contact";
import { cardStyle } from "./CardStyle";

const ContactCardBaseLayout = ({
  title,
  subtitleFirst,
  subtitleSecond,
  description,
  cvLinks,
  contactLinks,
}: {
  title: string;
  subtitleFirst: string;
  subtitleSecond: string;
  description: string;
  cvLinks: Links[];
  contactLinks: Links[];
}) => {
  const {
    cardClass,
    titelClass,
    subtitlessClass,
    paragraphClass,
    iconClass,
    linkClass,
    linkIconSize,
    socLinkIconSize,
  } = cardStyle;
  return (
    <div className={cardClass}>
      <h3 className={titelClass}>{title}</h3>
      <h4 className={subtitlessClass}>{subtitleFirst}</h4>
      <div className={iconClass}>
        {cvLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className={`${linkClass} ${linkIconSize}`}
          >
            {<link.Icon />}
          </a>
        ))}
        <Link href={"/certificates"} className={`${linkClass} ${linkIconSize}`}>
          <PiCertificateThin />
        </Link>
      </div>
      <h4 className={subtitlessClass}>{subtitleSecond}</h4>
      <p className={paragraphClass}>{description}</p>
      <div className={iconClass}>
        {contactLinks.map((socLink, index) => (
          <a
            key={index}
            href={socLink.url}
            className={`${linkClass} ${socLinkIconSize}`}
          >
            {<socLink.Icon />}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactCardBaseLayout;

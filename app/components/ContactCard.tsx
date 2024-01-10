import Link from "next/link";
import React from "react";
import { PiCertificateThin } from "react-icons/pi";
import { Links } from "../interfaces/Contact";
import { tailWindClasses } from "./CardTailwindClasses";

const ContactCard = ({
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
    socialLinkclass,
  } = tailWindClasses;
  return (
    <div className={cardClass}>
      <h3 className={titelClass}>{title}</h3>
      <h4 className={subtitlessClass}>{subtitleFirst}</h4>
      <div className={iconClass}>
        {cvLinks.map((link, index) => (
          <a key={index} href={link.url} className={linkClass}>
            {<link.Icon />}
          </a>
        ))}
        <Link href={"/certificates"} className={linkClass}>
          <PiCertificateThin />
        </Link>
      </div>
      <h4 className={subtitlessClass}>{subtitleSecond}</h4>
      <p className={paragraphClass}>{description}</p>
      <div className={iconClass}>
        {contactLinks.map((socLink, index) => (
          <a key={index} href={socLink.url} className={socialLinkclass}>
            {<socLink.Icon />}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactCard;

import Link from "next/link";
import { CiMail } from "react-icons/ci";
import {
  PiGithubLogoThin,
  PiInstagramLogoThin,
  PiLinkedinLogoThin,
  PiStackOverflowLogoThin,
  PiTwitterLogoThin
} from "react-icons/pi";

const ContactSection = () => {
  const SocialLinks = [
    {
      href: "mailto:dev@ervinpepic.com",
      icon: <CiMail className="text-3xl" />,
    },
    {
      href: "https://github.com/ervinpepic",
      icon: <PiGithubLogoThin className="text-3xl" />,
    },
    {
      href: "https://linkedin.com/in/ervinpepic",
      icon: <PiLinkedinLogoThin className="text-3xl" />,
    },
    {
      href: "https://stackoverflow.com/users/6247087/ervin-pepic",
      icon: <PiStackOverflowLogoThin className="text-3xl" />,
    },
    {
      href: "https://twitter.com/pepic__ervin?lang=en",
      icon: <PiTwitterLogoThin className="text-3xl" />,
    },
    {
      href: "https://instagram.com/pepic__ervin",
      icon: <PiInstagramLogoThin className="text-3xl" />,
    },
  ];
  return (
    <>
      {SocialLinks.map((socLink, index) => (
        <Link
          key={index}
          href={socLink.href}
          className="text-gray-700 hover:scale-125 duration-300 
            dark:text-slate-200 dark:hover:scale-125 dark:duration-300 m-2"
        >
          {socLink.icon}
        </Link>
      ))}
    </>
  );
};

export default ContactSection;

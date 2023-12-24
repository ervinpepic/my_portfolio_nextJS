import { CiMail } from "react-icons/ci";
import {
  PiGithubLogoThin,
  PiInstagramLogoThin,
  PiLinkedinLogoThin,
  PiStackOverflowLogoThin,
  PiTwitterLogoThin,
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
      <div className="flex flex-col text-center">
        <h6 className="font-medium text-xl text-gray-700 
          dark:text-slate-200 mt-4 tracking-wide">
          You may contact / reach me via:
        </h6>
      </div>
      <div className="flex justify-center mt-5 mb-12">
        {SocialLinks.map((socLink, index) => (
          <a
            key={index}
            href={socLink.href}
            className="text-gray-700 hover:text-opacity-70 hover:scale-125 duration-300 
            dark:text-slate-200 dark:hover:text-opacity-70 dark:hover:scale-125 dark:duration-300 m-2"
          >
            {socLink.icon}
          </a>
        ))}
      </div>
    </>
  );
};

export default ContactSection;

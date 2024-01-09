import { SocialLinks, contactData } from "../Models/ContactDevData";
import { PiCertificateThin } from "react-icons/pi";
import Link from "next/link";

const ResumeContactCard = () => {
  return (
    <div
      className="
      bg-slate-200 dark:bg-gray-700 rounded-md p-1 mb-4 w-auto h-auto"
    >
      <h3
        className="
          text-center text-lg font-medium text-slate-700 dark:text-slate-200
          pt-2 mt-2 mx-2 px-2 "
      >
        {contactData.title}
      </h3>
      <h4
        className="
          text-center text-normal font-medium text-slate-700 dark:text-slate-200 
          mx-2 px-2 mt-6"
      >
        {contactData.subtitles.first}
      </h4>

      <div
        className="
        justify-center flex text-xl text-gray-700 dark:text-slate-200 
        pt-2 px-2 mt-2 mx-2 mb-4"
      >
        {contactData.links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className="
              text-gray-700 dark:text-slate-200 
              hover:text-opacity-70 dark:hover:text-opacity-70 
              hover:scale-110 dark:hover:scale-110 
              duration-300 dark:duration-300 mx-4 text-5xl"
          >
            {<link.Icon />}
          </a>
        ))}
        <Link
          href={"/certificates"}
          className="
          text-gray-700 dark:text-slate-200 
          hover:text-opacity-70 dark:hover:text-opacity-70 
          hover:scale-110 dark:hover:scale-110 
          duration-300 dark:duration-300 mx-4 text-5xl"
        >
          <PiCertificateThin />
        </Link>
      </div>

      <h4
        className="
          text-center text-normal font-medium text-slate-700 dark:text-slate-200 
          mx-2 px-2 mt-6"
      >
        {contactData.subtitles.second}
      </h4>
      <p className="
          text-center text-normal font-light text-slate-700 dark:text-slate-200 
          mx-2 px-2 mt-6"
      >
        {contactData.description}
      </p>
      <div 
        className="
          justify-center flex text-xl text-gray-700 dark:text-slate-200 
          pt-2 px-2 mt-2 mx-2 mb-4"
      >
        {SocialLinks.map((socLink, index) => (
          <a
            key={index}
            href={socLink.url}
            className="
              text-gray-700 hover:text-opacity-70 hover:scale-125 duration-300 
              dark:text-slate-200 dark:hover:text-opacity-70 dark:hover:scale-125 
              dark:duration-300 m-2 text-4xl"
          >
            {<socLink.Icon />}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ResumeContactCard;

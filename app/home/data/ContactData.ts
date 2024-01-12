import { CiMail } from "react-icons/ci";
import {
  PiFileTextThin, PiFilesThin, PiGithubLogoThin,
  PiInstagramLogoThin,
  PiLinkedinLogoThin,
  PiStackOverflowLogoThin,
  PiTwitterLogoThin
} from "react-icons/pi";
import { Contact, Links } from "../types/Contact";

const CV_URL = "/static/images/pdf/cv.pdf";
const CL_URL = "/static/images/pdf/cl.pdf";
const MAILTO_URL = "mailto:pepic_ervin@hotmail.com";
const GITHUB_URL = "https://github.com/ervinpepic";
const LINKEDIN = "https://linkedin.com/in/ervinpepic";
const STACKOWERFLOW = "https://stackoverflow.com/users/6247087/ervin-pepic";
const X = "https://twitter.com/pepic__ervin?lang=en";
const INSTAGRAM = "https://instagram.com/pepic__ervin";

export const contactData: Contact = {
  title: "Contact",
  subtitles: {
    first: "Explore my qualifications, skills, and experience in detail.",
    second: "Social networks",
  },
  description:
    "You can get in touch with me throug one of these social networks.",
  links: [
    {
      url: CV_URL,
      Icon: PiFileTextThin,
    },
    {
      url: CL_URL,
      Icon: PiFilesThin,
    },
  ],
};

export const SocialLinks: Links[] = [
  {
    url: MAILTO_URL,
    Icon: CiMail,
  },
  {
    url: GITHUB_URL,
    Icon: PiGithubLogoThin,
  },
  {
    url: LINKEDIN,
    Icon: PiLinkedinLogoThin,
  },
  {
    url: STACKOWERFLOW,
    Icon: PiStackOverflowLogoThin,
  },
  {
    url: X,
    Icon: PiTwitterLogoThin,
  },
  {
    url: INSTAGRAM,
    Icon: PiInstagramLogoThin,
  },
];

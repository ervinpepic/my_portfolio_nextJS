import { CiMail } from "react-icons/ci";
import {
  PiFileTextThin,
  PiFilesThin,
  PiGithubLogoThin,
  PiLinkedinLogoThin,
} from "react-icons/pi";
import { Contact, Links } from "../types/Contact";

const CV_URL = "/static/images/pdf/cv.pdf";
const CL_URL = "/static/images/pdf/cl.pdf";
const MAILTO_URL = "mailto:dev.ervinpepic@gmail.com";
const GITHUB_URL = "https://github.com/ervinpepic";
const LINKEDIN = "https://linkedin.com/in/ervinpepic";

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

export const ContactLinks: Links[] = [
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
];

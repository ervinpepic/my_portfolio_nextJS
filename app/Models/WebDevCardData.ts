import { BiLogoDjango, BiLogoFlask } from "react-icons/bi";
import { DiPostgresql } from "react-icons/di";
import { FaLaravel, FaPhp, FaReact, FaWordpressSimple } from "react-icons/fa";
import { LiaDrupal } from "react-icons/lia";
import { PiAngularLogoLight } from "react-icons/pi";
import { RiJavascriptLine } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import {
  TbBrandFirebase,
  TbBrandMongodb,
  TbBrandNextjs,
  TbBrandPython,
  TbBrandTypescript,
} from "react-icons/tb";
import { Skills } from "../interfaces/WebDevDataInterface";

export const webDevCardData: Skills = {
  title: "Web Development",
  subtitles: {
    first: "Programming languages and frameworks",
    second: "Databases",
  },
  programmingLang: [
    {
      name: "TypeScript | JavaScript",
      framework: "Angular, React, Next.js",
    },
    {
      name: "PHP",
      framework: "Laravel, Drupal, Wordpress",
    },
    {
      name: "Python",
      framework: "Django, Flask",
    },
  ],
  otherSkills: [
    {
      name: "SQL",
      framework: "Mysql, Postgres",
    },
    {
      name: "NoSQL",
      framework: "MongoDB, Firebase",
    },
  ],
  icons: [
    TbBrandTypescript,
    RiJavascriptLine,
    PiAngularLogoLight,
    FaReact,
    TbBrandNextjs,
    FaPhp,
    LiaDrupal,
    FaWordpressSimple,
    FaLaravel,
    TbBrandPython,
    BiLogoDjango,
    BiLogoFlask,
    SiMysql,
    DiPostgresql,
    TbBrandMongodb,
    TbBrandFirebase,
  ],
};


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
import { CardDataStructureInterface } from "../interfaces/WebDevDataInterface";

export const webDevCardData: CardDataStructureInterface = {
  title: "Web Development",
  subtitles: {
    first: "Programming languages and frameworks",
    second: "Dadabases",
  },
  programmingLang: [
    {
      name: "Typescrypt | Javascript",
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
  other: [
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
    TbBrandFirebase
  ],
};

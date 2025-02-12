import { AiOutlineApple } from "react-icons/ai";
import { FaGolang } from "react-icons/fa6";
import { PiAndroidLogoThin } from "react-icons/pi";
import { SiJetbrains } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { TbBrandCpp, TbBrandKotlin, TbBrandSwift } from "react-icons/tb";
import { Skills } from "../types/Skills";

export const systemDevCardData: Skills = {
  title: "System programming",
  subtitles: {
    first: "Programming language and frameworks",
    second: "Mobile Development",
  },
  programmingLang: [
    {
      name: "C | C++",
      framework: "Visual Studio Basic, Code Blocks",
    },
    {
      name: "GoLang",
      framework: "Visual Studio Code, GoLand",
    },
    {
      name: "Java",
      framework: "Eclipse, NetBeans",
    },
  ],
  otherSkills: [
    {
      name: "Kotlin | Java",
      framework: "Android Studio",
    },
    {
      name: "Swift",
      framework: "Xcode",
    },
  ],
  icons: [
    TbBrandKotlin,
    TbBrandCpp,
    PiAndroidLogoThin,
    TbBrandSwift,
    FaGolang,
    AiOutlineApple,
    DiVisualstudio,
    SiJetbrains,
  ],
};

import { AiOutlineApple } from "react-icons/ai";
import { FaGolang } from "react-icons/fa6";
import { PiAndroidLogoThin } from "react-icons/pi";
import { SiJetbrains, SiVisualstudio } from "react-icons/si";
import { TbBrandCpp, TbBrandKotlin, TbBrandSwift } from "react-icons/tb";
import { CardDataStructureInterface } from "../interfaces/WebDevDataInterface";

export const sysDevCardData: CardDataStructureInterface = {
  title: "System programming",
  subtitles: {
    first: "Programming language and frameworks",
    second: "Mobile Development"
  },
  programmingLang: [
    {
      name: "C | C++", framework: "Visual Studio Basic, Code Blocks"
    },
    {
      name: "GoLang", framework: "VisualStudioCode, GoLand"
    },
    {
      name: "Java", framework: "Eclipse, NetBeans"
    }
  ],
  other: [
    {
      name: "Kotlin | Java", framework: "AndroidStudio"
    },
    {
      name: "Swift", framework: "Xcode"
    }
  ],
  icons: [
    TbBrandKotlin,
    TbBrandCpp,
    PiAndroidLogoThin,
    TbBrandSwift,
    FaGolang,
    AiOutlineApple,
    SiVisualstudio,
    SiJetbrains
  ]
}
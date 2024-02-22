import { Metadata } from "next";
import ScrollToTopButton from "./components/ScrollToTopBtn";
import Card from "./components/Card";
import Headings from "./components/Headings";

const Certificates = () => {
  return (
    <div className="container mx-auto lg:px-24 px-4 h-dvh">
      <Headings />
      <Card />
      <ScrollToTopButton />
    </div>
  );
};

export const metadata: Metadata = {
  title: "Ervin Portfolio | Certificates",
  description: "Ervin Pepic software developers achivement, certificates.",
};

export default Certificates;

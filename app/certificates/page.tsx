import { Metadata } from "next";
import Card from "./Components/Card";
import Headings from "./Components/Headings";
import ScrollToTopButton from "./Components/ScrollToTopBtn";

const Certificates = () => {
  return (
    <div className="container mx-auto lg:px-24 px-4">
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

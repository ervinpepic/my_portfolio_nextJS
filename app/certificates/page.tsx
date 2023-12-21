import prisma from "@/prisma/client";
import Card from "./Card";
import CertificateHeader from "./CertificateHeader";
import ScrollToTopButton from "./ScrollToTopButton";
import delay from "delay";
import { Metadata } from "next";

const Certificates = async () => {
  const schools = await prisma.school.findMany({
    include: {
      certificates: true,
    },
  });
  return (
    <div className="container mx-auto xl:px-24 lg:px-6 px-4">
      {/* imported components from the same directory */}
      <CertificateHeader />
      
      {/* imported components from the same directory with props*/}
      <Card schools={schools} />
      <ScrollToTopButton/>
    </div>
  );
};
export const metadata: Metadata = {
  title: "Ervin Portfolio | Certificates",
  description: "Ervin Pepic software developers achivement, certificates.",
};
export default Certificates;

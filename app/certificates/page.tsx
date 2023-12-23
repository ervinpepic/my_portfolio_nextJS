import prisma from "@/prisma/client";
import Card from "./components/Card";
import CertificateHeader from "./components/Header";
import ScrollToTopButton from "./components/ScrollToTopBtn";
import { Metadata } from "next";

const Certificates = async () => {
  const schools = await prisma.school.findMany({
    include: {
      certificates: true,
    },
  });
  return (
    <div className="container mx-auto lg:px-24 px-4">
      {/* External component */}
      <CertificateHeader />
      {/* External component */}
      <Card schools={schools} />
      {/* External component */}
      <ScrollToTopButton />
    </div>
  );
};

export const metadata: Metadata = {
  title: "Ervin Portfolio | Certificates",
  description: "Ervin Pepic software developers achivement, certificates.",
};

export default Certificates;

import ContactCard from "./home/components/ContactCard";
import HeadinsAndSubheadings from "./home/components/Headings";
import ImageComponent from "./home/components/Image";
import SystemDevCard from "./home/components/SystemDevCard";
import WebDevCard from "./home/components/WebDevCard";

export default function Home() {
  return (
    <>
      <div className="flex justify-center">
        <ImageComponent />
      </div>
      <div className="flex flex-col items-center">
        <HeadinsAndSubheadings />
      </div>
      <div className="container mx-auto lg:px-24 px-2 h-dvh">
        <div className="grid grid-cols-1 xl:grid-cols-3 xl:gap-4 md:grid-cols-2 md:gap-3 mt-6">
          <WebDevCard />
          <SystemDevCard />
          <ContactCard />
        </div>
      </div>
    </>
  );
}

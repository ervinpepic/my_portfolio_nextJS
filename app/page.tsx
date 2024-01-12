import HeadinsAndSubheadings from "./Components/Headings";
import ImageComponent from "./Components/Image";
import ResumeContactCard from "./Components/ResumeContactCard";
import SystemDevCard from "./Components/SystemDevCard";
import WebDevCard from "./Components/WebDevCard";

export default function Home() {
  return (
    <>
    <div className="flex justify-center">
      <ImageComponent />
    </div>
    <div className="flex flex-col items-center">
      <HeadinsAndSubheadings />
      </div>
      <div className="container mx-auto lg:px-24 px-2">
        <div className="grid grid-cols-1 xl:grid-cols-3 xl:gap-4 md:grid-cols-2 md:gap-3 mt-6">
          <WebDevCard />
          <SystemDevCard />
          <ResumeContactCard />
        </div>
      </div>
    </>
  );
}

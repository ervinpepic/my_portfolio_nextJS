import HeadinsAndSubheadings from "./components/Headings";
import ImageComponent from "./components/Image";
import ResumeContactCard from "./components/ResumeContactCard";
import SystemDevCard from "./components/SystemDevCard";
import WebDevCard from "./components/WebDevCard";

export default function Home() {
  return (
    <>
      <ImageComponent />

      <HeadinsAndSubheadings />
      <div className="container mx-auto lg:px-24 px-4">
        <div className="grid xl:grid-cols-3 xl:gap-4 md:grid-cols-2 md:gap-3 mt-6">
          <WebDevCard />
          <SystemDevCard />
          <ResumeContactCard />
        </div>
      </div>
    </>
  );
}

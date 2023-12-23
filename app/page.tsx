import ContactSection from "./components/ContactSection";
import HeadinsAndSubheadings from "./components/Headings";
import ImageComponent from "./components/Image";
import QualificationDescription from "./components/QualifyDescription";
import QualificationExperience from "./components/QualifyExperience";

export default function Home() {
  
  return (
    <>
      <div className="flex flex-col items-center">
        <ImageComponent />
      </div>
      <div className="flex flex-col text-center">
        <HeadinsAndSubheadings />
      </div>
      <div className="flex flex-col text-center px-2">
        <QualificationDescription />
      </div>

      <div className="flex justify-center mt-5">
        <QualificationExperience />
      </div>
      <div className="flex flex-col text-center">
        <h6 className="mt-4 text-xl text-gray-700 dark:text-slate-200 font-semibold">
          You may contact / reach me via:
        </h6>
      </div>
      <div className="flex justify-center mt-5 mb-12">
        <ContactSection />
      </div>
    </>
  );
}

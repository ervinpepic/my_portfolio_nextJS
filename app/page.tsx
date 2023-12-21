import ContactSection from "./components/ContactSection";
import HeadinsAndSubheadings from "./components/HeadinsAndSubheadings";
import ImageComponent from "./components/ImageComponent";
import QualificationDescription from "./components/QualificationDescription";
import QualificationExperience from "./components/QualificationExperience";

export default function Home() {
  
  return (
    <>
      <div className="grid justify-items-center">
        <ImageComponent/>
      </div>
      <div className="grid text-center">
        <HeadinsAndSubheadings />
      </div>
      <div className="grid text-center px-2">
        <QualificationDescription />
      </div>

      <div className="flex justify-center mt-5">
        <QualificationExperience />
      </div>
      <div className="grid text-center">
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

import ContactSection from "./components/ContactSection";
import HeadinsAndSubheadings from "./components/Headings";
import ImageComponent from "./components/Image";
import QualificationDescription from "./components/QualifyDescription";
import QualificationExperience from "./components/QualifyExperience";

export default function Home() {
  return (
    <>
      <ImageComponent />

      <HeadinsAndSubheadings />

      <QualificationDescription />

      <QualificationExperience />

      <ContactSection />
    </>
  );
}

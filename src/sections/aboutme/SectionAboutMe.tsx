import { useOutletContext } from "react-router-dom";
import CardSection from "../../components/CardSection";
import { OutletContextType } from "../../layouts/MainLayout";
import { sectionNames } from "../nav/SectionNav";

const aboutmeData = [
  [
    <>
      I am a third-year student at the
      <span className="text-accent">
        {" "}
        University of Belgrade - School of Electrical Engineering
      </span>
      , specializing in{" "}
      <span className="text-accent"> Computer Engineering and Informatics</span>
      .
    </>,
    <>
      I've always been <span className="text-accent"> curious</span> and
      <span className="text-accent"> passionate about solving problems</span>.
    </>,
    <>
      I am <span className="text-accent">eager to take on new challenges</span>,
      continuously <span className="text-accent">learn</span>, and{" "}
      <span className="text-accent">grow</span> in the ever-evolving world of
      technology.
    </>,
  ],
  [
    <>
      Student sam treće godine na
      <span className="text-accent">
        {" "}
        Elektrotehničkom fakultetu Univerziteta u Beogradu
      </span>
      , smer{" "}
      <span className="text-accent"> Računarska tehnika i informatika</span>.
    </>,
    <>
      Oduvek sam bio <span className="text-accent">radoznao</span> i
      <span className="text-accent"> strastven prema rešavanju problema</span>.
    </>,
    <>
      <span className="text-accent">Spreman sam za nove izazove</span> i da
      neprestano <span className="text-accent">učim</span> i{" "}
      <span className="text-accent">napredujem</span> u svetu tehnologije koji
      se stalno menja.
    </>,
  ],
];
const SectionAboutMe = () => {
  const context: OutletContextType = useOutletContext();
  const data = aboutmeData[context.language];
  return (
    <CardSection
      className="bg-light text-dark [&_h1]:text-accent [&_h1]:!mt-0 "
      id="aboutme"
      title={sectionNames[context.language].aboutme}
      contentStyle="[&>*]:text-lg [&>*]:font-bold [&>*]:mb-4 [&>:last-child]:!mb-0"
      content={data}
    />
  );
};

export default SectionAboutMe;

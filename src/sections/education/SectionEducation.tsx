import { BsCircleFill } from "react-icons/bs";
import EducationListing from "./EducationListing";
import CardSection from "../../components/CardSection";
import { useOutletContext } from "react-router-dom";
import { OutletContextType } from "../../layouts/MainLayout";
import { sectionNames } from "../nav/SectionNav";

const educationData = [
  [
    <EducationListing
      from={2022}
      to={<BsCircleFill className="translate-y-1" />}
      school={`University of Belgrade - School of Electrical Engineering`}
      field={"Computer Engineering and Informatics"}
    />,
    <EducationListing
      from={2018}
      to={2022}
      school={`High School of Electrical Engineering - "Nikola Tesla", Belgrade`}
      field={"Network Administrator"}
    />,
  ],
  [
    <EducationListing
      from={2022}
      to={<BsCircleFill className="translate-y-1" />}
      school={`Univerzitet u Beogradu - Elektrotehnički fakultet`}
      field={"Računarska tehnika i informatika"}
    />,
    <EducationListing
      from={2018}
      to={2022}
      school={`Elektrotehnička škola - "Nikola Tesla", Beograd`}
      field={"Administrator računarskih mreža"}
    />,
  ],
];

const SectionEducation = () => {
  const context: OutletContextType = useOutletContext();
  const data = educationData[context.language];
  return (
    <CardSection
      className="bg-accent text-light [&_h1]:text-dark [&_h1]:!mt-0"
      id="education"
      title={sectionNames[context.language].education}
      contentStyle="[&>*]:text-lg [&>*]:font-bold [&>*]:mb-4 [&>:last-child]:!mb-0"
      content={data}
    />
  );
};

export default SectionEducation;

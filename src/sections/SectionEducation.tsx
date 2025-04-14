import { BsCircleFill } from "react-icons/bs";
import CardSection from "../components/reusable/CardSection";
import EducationListing from "../components/EducationListing";

const SectionEducation = () => {
  return (
    <CardSection
      className="bg-accent text-light [&_h1]:text-dark [&_h1]:!mt-0"
      id="education"
      title="Education"
      contentStyle="[&>*]:text-lg [&>*]:font-bold [&>*]:mb-4 [&>:last-child]:!mb-0"
      content={[
        <EducationListing
          from={2022}
          to={<BsCircleFill />}
          school={` University of Belgrade - School of Electrical Engineering`}
          field={"Computer Engineering and Informatics"}
        />,
        <EducationListing
          from={2018}
          to={2022}
          school={`High School of Electrical Engineering - "Nikola Tesla", Belgrade`}
          field={"Network Administrator"}
        />,
      ]}
    />
  );
};

export default SectionEducation;

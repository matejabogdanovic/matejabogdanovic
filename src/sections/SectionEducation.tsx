import CardSection from "../components/reusable/CardSection";

const SectionEducation = () => {
  return (
    <CardSection
      className="bg-accent text-light [&_h1]:text-dark [&_h1]:!mt-0"
      id="education"
      title="Education"
      content={[
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic laborum, placeat enim neque, illum voluptatem voluptas debitis ducimus quas accusantium excepturi accusamus.",
        " Adipisci quisquam debitis quibusdam fugit doloribus beatae perspiciatis.",
      ]}
    />
  );
};

export default SectionEducation;

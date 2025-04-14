import CardSection from "../../components/CardSection";

const SectionAboutMe = () => {
  return (
    <CardSection
      className="bg-light text-dark [&_h1]:text-accent [&_h1]:!mt-0 "
      id="aboutme"
      title="About Me"
      contentStyle="[&>*]:text-lg [&>*]:font-bold [&>*]:mb-4 [&>:last-child]:!mb-0"
      content={[
        <>
          I am a third-year student at the
          <span className="text-accent">
            {" "}
            University of Belgrade - School of Electrical Engineering
          </span>
          , specializing in{" "}
          <span className="text-accent">
            {" "}
            Computer Engineering and Informatics
          </span>
          .
        </>,
        <>
          I've always been <span className="text-accent"> curious</span> and
          <span className="text-accent">
            {" "}
            passionate about solving problems
          </span>
          .
        </>,
        <>
          I am{" "}
          <span className="text-accent">eager to take on new challenges</span>,
          continuously <span className="text-accent">learn</span>, and{" "}
          <span className="text-accent">grow</span> in the ever-evolving world
          of technology.
        </>,
      ]}
    />
  );
};

export default SectionAboutMe;

import Container from "../components/reusable/Container";
import H1 from "../components/reusable/h/H1";
import ProjectCardsDisplay from "../components/ProjectCardsDisplay";

const SectionProjects = () => {
  return (
    <section id="projects" className="xl:px-16">
      <Container>
        <H1 cssAddStyle="w-full text-center">Projects</H1>

        <ProjectCardsDisplay />
      </Container>
    </section>
  );
};

export default SectionProjects;

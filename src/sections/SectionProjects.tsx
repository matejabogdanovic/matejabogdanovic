import Container from "../components/reusable/Container";
import H1 from "../components/reusable/h/H1";
import ProjectCardsDisplay from "../components/ProjectCardsDisplay";
import StarDisplay from "../components/StarDisplay";

const SectionProjects = () => {
  return (
    <section id="projects" className="xl:px-16">
      <Container>
        <H1 cssAddStyle="w-full text-center">
          <>
            Projects
            <StarDisplay className="flex xl:text-2xl text-base justify-center items-center xl:-mt-3 -mt-2 xl:gap-10 gap-4" />
          </>
        </H1>

        <ProjectCardsDisplay />
      </Container>
    </section>
  );
};

export default SectionProjects;

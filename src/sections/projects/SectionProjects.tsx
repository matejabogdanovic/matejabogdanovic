import { useOutletContext } from "react-router-dom";
import Container from "../../components/Container";
import H1 from "../../components/h/H1";
import StarDisplay from "../../components/StarDisplay";
import { OutletContextType } from "../../layouts/MainLayout";
import ProjectCardsDisplay from "./ProjectCardsDisplay";
import { sectionNames } from "../nav/SectionNav";

const SectionProjects = () => {
  const context: OutletContextType = useOutletContext();
  return (
    <section id="projects" className="xl:px-16">
      <Container>
        <H1 cssAddStyle="w-full text-center xl:!mt-0">
          <>
            {sectionNames[context.language].projects}
            <StarDisplay className="flex xl:text-2xl text-base justify-center items-center xl:-mt-3 -mt-2 xl:gap-10 gap-4" />
          </>
        </H1>

        <ProjectCardsDisplay />
      </Container>
    </section>
  );
};

export default SectionProjects;

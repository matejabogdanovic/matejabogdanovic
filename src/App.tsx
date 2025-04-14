import Container from "./components/Container";
import SectionAboutMe from "./sections/aboutme/SectionAboutMe";
import SectionEducation from "./sections/education/SectionEducation";
import SectionHero from "./sections/hero/SectionHero";
import SectionNav from "./sections/nav/SectionNav";
import SectionProjects from "./sections/projects/SectionProjects";

const App = () => {
  return (
    <>
      <SectionHero />
      <SectionNav />
      <Container containerCssAdd="!px-0 xl:flex xl:[&>section]:w-1/2 [&>section]:xl:px-12 [&>section]:xl:py-8 [&>section]:py-4  [&_:first-child]:xl:rounded-l-2xl [&_:last-child]:xl:rounded-r-2xl">
        <SectionAboutMe />
        <SectionEducation />
      </Container>
      <SectionProjects />
    </>
  );
};

export default App;

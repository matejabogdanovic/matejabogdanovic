import Container from "./components/reusable/Container";
import SectionAboutMe from "./sections/SectionAboutMe";
import SectionEducation from "./sections/SectionEducation";
import SectionHeroAndNav from "./sections/SectionHeroAndNav";
import SectionProjects from "./sections/SectionProjects";

const App = () => {
  return (
    <>
      <SectionHeroAndNav />
      <Container containerCssAdd="!px-0 xl:flex xl:[&>section]:w-1/2 [&>section]:xl:px-12 [&>section]:xl:py-8 [&>section]:py-4  [&_:first-child]:xl:rounded-l-2xl [&_:last-child]:xl:rounded-r-2xl">
        <SectionAboutMe />
        <SectionEducation />
      </Container>
      <SectionProjects />
    </>
  );
};

export default App;

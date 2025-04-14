import image from "../../assets/hero_img.png";
import Container from "../../components/Container";
import H1 from "../../components/h/H1";
import ButtonLanguage from "./ButtonLanguage";

import Triangles from "./Triangles";

const SectionHero = () => {
  return (
    <>
      <section
        id="hero"
        className="min-h-[90dvh] flex flex-col justify-between items-start !mb-0"
      >
        <Triangles />

        <Container containerCssAdd="flex-1 flex xl:flex-row flex-col xl:justify-between justify-center items-center gap-4 relative">
          <ButtonLanguage />
          <div className="xl:self-auto self-start">
            <span className="xl:text-7xl text-4xl font-thin">Hello!</span>
            <H1>
              I am <span className="text-accent">Mateja</span>.
            </H1>
          </div>

          <div className="max-w-[550px]">
            <img src={image} />
          </div>
        </Container>
      </section>
    </>
  );
};

export default SectionHero;

import { useOutletContext } from "react-router-dom";
import image from "../../assets/hero_img.png";
import Container from "../../components/Container";
import H1 from "../../components/h/H1";
import ButtonLanguage from "./ButtonLanguage";

import Triangles from "./Triangles";
import { OutletContextType } from "../../layouts/MainLayout";

type HeroData = {
  hello: string;
  iAmMateja: any;
};
const heroData: HeroData[] = [
  {
    hello: "Hello!",
    iAmMateja: (
      <>
        I am <span className="text-accent">Mateja</span>.
      </>
    ),
  },
  {
    hello: "Zdravo!",
    iAmMateja: (
      <>
        Ja sam <span className="text-accent">Mateja</span>.
      </>
    ),
  },
];
const SectionHero = () => {
  const context: OutletContextType = useOutletContext();
  const data = heroData[context.language];
  return (
    <>
      <section
        id="hero"
        className="min-h-[90dvh] flex flex-col justify-between items-start !mb-0"
      >
        <Triangles />

        <Container containerCssAdd="flex-1 flex xl:flex-row flex-col xl:justify-between justify-center items-center gap-4 relative">
          <ButtonLanguage
            language={context.language}
            setLanguage={context.setLanguage}
          />
          <div className="xl:self-auto self-start">
            <span className="xl:text-7xl text-4xl font-thin">{data.hello}</span>
            <H1>{data.iAmMateja}</H1>
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

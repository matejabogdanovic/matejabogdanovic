import { useState } from "react";
import image from "../assets/hero_img.png";
import HamburgerButton from "../components/HamburgerButton";
import Container from "../components/reusable/Container";
import H1 from "../components/reusable/h/H1";
import Triangles from "../components/Triangles";
import SectionNav from "./SectionNav";

const SectionHero = () => {
  const [menuShown, setMenuShown] = useState<boolean>(false);
  const menuShow = () => {
    setMenuShown(true);
    document.location = "#mobilemenu";
  };
  const menuHide = () => {
    setMenuShown(false);
    //document.location = "#hero";
  };
  return (
    <>
      <section
        id="hero"
        className="min-h-[100dvh] flex flex-col justify-between "
      >
        <Triangles />

        <Container containerCssAdd="flex-1 flex xl:flex-row flex-col xl:justify-between justify-center items-center gap-4">
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
        <HamburgerButton menuShow={menuShow} menuHide={menuHide} />
        {/* pc menu */}
        <SectionNav className="xl:block hidden" id="pcmenu" />
      </section>
      {/* mobile menu */}
      <SectionNav
        className={"xl:hidden " + (menuShown ? "block" : "hidden")}
        id="mobilemenu"
      />
    </>
  );
};

export default SectionHero;

import { useState } from "react";
import { useOutletContext } from "react-router-dom";

import ContactMeButton from "../../components/ContactMeButton";
import Container from "../../components/Container";
import StarDisplay from "../../components/StarDisplay";
import ButtonCloseNav from "./ButtonCloseNav";
import ButtonOpenNav from "./ButtonOpenNav";
import NavbarLink from "./NavbarLink";
import { OutletContextType } from "../../layouts/MainLayout";

type NavData = {
  hello: string;
  aboutme: string;
  education: string;
  projects: string;
  interests: string;
  links: string;
};

export const sectionNames: NavData[] = [
  {
    hello: "Hello",
    aboutme: "About Me",
    education: "Education",
    projects: "Projects",
    interests: "Interests",
    links: "Links",
  },
  {
    hello: "Zdravo",
    aboutme: "O meni",
    education: "Obrazovanje",
    projects: "Projekti",
    interests: "Interesovanja",
    links: "Linkovi",
  },
];

const SectionNav = () => {
  const context: OutletContextType = useOutletContext();
  const data = sectionNames[context.language];

  const [menuShown, setMenuShown] = useState<boolean>(false);

  const menuShow = () => {
    setMenuShown(true);
    document.body.classList.add("overflow-hidden");
  };

  const menuHide = () => {
    setMenuShown(false);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <section
      id="menu"
      className="[&_nav]:xl:!block sticky top-0 bg-dark-900 z-10 gradient-accent-red-b-2 h-[10dvh]"
    >
      <div className="xl:w-auto w-full [&>*]:w-full xl:hidden min-h-[10dvh]">
        <ButtonOpenNav menuShow={menuShow} />
      </div>

      <nav
        className={
          "z-20 xl:opacity-100 xl:static xl:translate-x-0 xl:translate-y-0 fixed top-1/2 left-1/2 -translate-x-1/2 transition-all duration-700 w-full bg-dark-900 overflow-y-auto xl:overflow-y-hidden overflow-x-hidden xl:h-full h-[100dvh] grid grid-flow-row grid-rows-[auto_1fr] xl:flex" +
          (menuShown ? " -translate-y-1/2 " : " translate-y-1/2 opacity-0 ")
        }
      >
        <div className="xl:w-auto w-full [&>*]:w-full gradient-accent-red-b-2 relative place-self-start h-full xl:hidden">
          <ButtonCloseNav menuHide={menuHide} />
        </div>

        <Container containerCssAdd="h-full place-self-center flex flex-col justify-center items-center !p-0">
          <ul className="w-full h-full xl:flex xl:flex-row xl:items-center xl:justify-center xl:relative grid ">
            <NavbarLink to="#hero" onClick={menuHide}>
              {data.hello}
            </NavbarLink>

            <NavbarLink
              to="#aboutme"
              onClick={menuHide}
              className="hover:xl:bg-light hover:xl:text-accent transition-colors bg-light text-accent xl:text-inherit xl:bg-inherit"
            >
              {data.aboutme}
            </NavbarLink>

            <NavbarLink
              to="#education"
              onClick={menuHide}
              className="hover:xl:bg-accent hover:xl:text-dark-900 transition-colors bg-accent text-dark-900 xl:text-inherit xl:bg-inherit"
            >
              {data.education}
            </NavbarLink>

            <NavbarLink to="#projects" onClick={menuHide} className="group">
              <div className="relative">
                {data.projects}
                <StarDisplay className="xl:opacity-0 group-hover:xl:opacity-100 opacity-100 transition-opacity flex text-xs justify-center items-center -mt-1 absolute left-1/2 -translate-x-1/2" />
              </div>
            </NavbarLink>

            <NavbarLink to="#interests" onClick={menuHide}>
              {data.interests}
            </NavbarLink>

            <NavbarLink
              to="#links"
              onClick={menuHide}
              className="xl:hover:bg-light xl:hover:bg-opacity-5 xl:hover:rounded-t-3xl bg-light bg-opacity-5 xl:bg-inherit rounded-t-3xl transition-all"
            >
              {data.links}
            </NavbarLink>

            <div className="xl:absolute right-0 px-8 xl:px-0 xl:w-auto hidden xl:block">
              <ContactMeButton />
            </div>
          </ul>
        </Container>
      </nav>
    </section>
  );
};

export default SectionNav;

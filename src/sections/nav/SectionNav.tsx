import { useState } from "react";
import ContactMeButton from "../../components/ContactMeButton";
import Container from "../../components/Container";
import StarDisplay from "../../components/StarDisplay";
import ButtonCloseNav from "./ButtonCloseNav";
import ButtonOpenNav from "./ButtonOpenNav";

const SectionNav = () => {
  const [menuShown, setMenuShown] = useState<boolean>(false);
  const menuShow = () => {
    setMenuShown(true);
    document.body.classList.add("overflow-hidden");
    // document.location = "#menu";
  };
  const menuHide = () => {
    setMenuShown(false);
    document.body.classList.remove("overflow-hidden");
    //document.location = "#hero";
  };
  return (
    <section
      className="[&_nav]:xl:!block sticky top-0 bg-dark z-10 min-h-[10dvh] 
       gradient-accent-red-b-2 overflow-hidden"
      id="menu"
    >
      <div className="xl:w-auto w-full [&>*]:w-full xl:hidden min-h-[10dvh] ">
        <ButtonOpenNav menuShow={menuShow} />
      </div>

      <nav
        className={
          "z-20 xl:block xl:opacity-100 xl:static xl:translate-x-0 xl:translate-y-0 fixed top-1/2 left-1/2 -translate-x-1/2  transition-all duration-700 w-full bg-dark " +
          (menuShown
            ? " opacity-100 overflow-hidden -translate-y-1/2 "
            : "opacity-0 translate-y-1/2")
        }
      >
        <Container containerCssAdd="flex flex-col justify-center items-center !p-0 xl:h-auto h-[100dvh]">
          <ul className="w-full xl:flex xl:flex-row flex-col items-center justify-center [&>li>a]:p-8 [&>li>a]:xl:flex [&>li>a]:block  [&>li>a]:items-center text-center xl:relative [&>li>a]:xl:min-h-[10dvh]">
            <li className="xl:w-auto w-full [&>*]:w-full absolute top-0 gradient-accent-red-b-2  ">
              <ButtonCloseNav menuHide={menuHide} />
            </li>

            <li>
              <a
                href="#hero"
                className="active-link min-h-[10dvh]"
                onClick={menuHide}
              >
                Hello
              </a>
            </li>
            <li>
              <a
                href="#aboutme"
                className=" hover:xl:bg-light hover:xl:text-accent transition-colors active-link bg-light text-accent xl:text-inherit xl:bg-inherit"
                onClick={menuHide}
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#education"
                className=" hover:xl:bg-accent hover:xl:text-dark transition-colors active-link bg-accent text-dark xl:text-inherit xl:bg-inherit"
                onClick={menuHide}
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="active-link group"
                onClick={menuHide}
              >
                <div className="relative">
                  Projects
                  <StarDisplay className="xl:opacity-0 group-hover:xl:opacity-100 opacity-100 transition-opacity flex text-xs justify-center items-center -mt-1 absolute left-1/2 -translate-x-1/2" />
                </div>
              </a>
            </li>
            <li>
              <a href="#" className="active-link" onClick={menuHide}>
                Other
              </a>
            </li>
            <div className="xl:absolute right-0 px-8 xl:px-0">
              <ContactMeButton />
            </div>
          </ul>
        </Container>
      </nav>
    </section>
  );
};

export default SectionNav;

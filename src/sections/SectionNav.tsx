import { useState } from "react";
import ContactMeButton from "../components/ContactMeButton";

import Container from "../components/reusable/Container";
import { GrClose } from "react-icons/gr";
import { RxHamburgerMenu } from "react-icons/rx";

const SectionNav = ({ className = "" }: { className?: string }) => {
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
      className="[&_nav]:xl:!block sticky top-0 bg-dark z-10 min-h-[10dvh] "
      id="menu"
    >
      <div className="xl:w-auto w-full [&>*]:w-full xl:hidden min-h-[10dvh]">
        <button
          onClick={menuShow}
          className={
            "xl:hidden flex items-center justify-center p-8 min-h-[10dvh]"
          }
        >
          <RxHamburgerMenu className="fill-light" />
        </button>
      </div>

      <nav
        className={
          className !== ""
            ? className
            : menuShown
            ? " xl:block  xl:static xl:translate-x-0 xl:translate-y-0 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark w-full overflow-hidden"
            : "hidden"
        }
      >
        <Container containerCssAdd="flex flex-col justify-center items-center !p-0 xl:h-auto h-[100dvh]">
          <ul className="w-full xl:flex xl:flex-row flex-col items-center justify-center [&>li>a]:p-8 [&>li>a]:xl:flex [&>li>a]:block  [&>li>a]:items-center text-center relative [&>li>a]:xl:min-h-[10dvh] ">
            <li className="xl:w-auto w-full [&>*]:w-full ">
              <button
                onClick={menuHide}
                className={
                  "xl:hidden flex items-center justify-center p-8 h-full"
                }
              >
                <GrClose className="fill-light " />
              </button>
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
                className=" hover:bg-light hover:text-accent transition-colors active-link"
                onClick={menuHide}
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#education"
                className=" hover:bg-accent hover:text-dark transition-colors active-link"
                onClick={menuHide}
              >
                Education
              </a>
            </li>
            <li>
              <a href="#projects" className="active-link" onClick={menuHide}>
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="active-link" onClick={menuHide}>
                Other
              </a>
            </li>
            <div className="xl:absolute right-0">
              <ContactMeButton />
            </div>
          </ul>
        </Container>
      </nav>
    </section>
  );
};

export default SectionNav;

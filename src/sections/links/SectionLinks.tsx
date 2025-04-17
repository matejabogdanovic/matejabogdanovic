import Container from "../../components/Container";

import MyLink from "./MyLink";
import { GrGithub } from "react-icons/gr";
import { SiFiverr } from "react-icons/si";
import ContactMeButton from "../../components/ContactMeButton";

const SectionLinks = () => {
  // const context: OutletContextType = useOutletContext();
  return (
    <section id="links" className="!mb-0 mt-4 ">
      <div className="bg-light bg-opacity-5 xl:rounded-t-[8rem] rounded-t-[5rem]">
        <Container containerCssAdd="py-4">
          <div className="grid gap-4 justify-items-center content-center place-self-center xl:grid-cols-3 grid-cols-1">
            <div className="grid  text-light">
              <ContactMeButton />
            </div>
            <MyLink
              to={"https://github.com/matejabogdanovic/"}
              icon={<GrGithub className="text-6xl" />}
            />
            <MyLink
              to={"https://www.fiverr.com/matejacar"}
              icon={<SiFiverr className="text-6xl" />}
            />
          </div>
        </Container>
      </div>
    </section>
  );
};

export default SectionLinks;

import Container from "../../components/Container";
import MyLink from "./MyLink";
import { GrGithub } from "react-icons/gr";
import { SiFiverr } from "react-icons/si";
import ContactMeButton from "../../components/ContactMeButton";

const SectionLinks = () => {
  // const context: OutletContextType = useOutletContext();
  return (
    <section id="links" className="!mb-0 mt-8">
      <div className="bg-light bg-opacity-5 xl:rounded-t-full rounded-t-[3.3rem] ">
        <Container containerCssAdd="py-4">
          <div
            className="grid gap-4 justify-items-center content-center place-self-center
    xl:grid-rows-1 xl:grid-cols-3 grid-cols-4 "
          >
            <div className="grid row-start-1 text-light col-span-full xl:col-span-1 ">
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

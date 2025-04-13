import ContactMeButton from "../components/ContactMeButton";
import Container from "../components/reusable/Container";

const SectionNav = ({
  className = "",
  id,
}: {
  className?: string;
  id: string;
}) => {
  return (
    <nav className={className}>
      <Container containerCssAdd="flex justify-center items-center !p-0">
        <ul
          className="w-full xl:flex xl:flex-row flex-col items-center justify-center [&>li>a]:p-8 [&>li>a]:block text-center relative"
          id={id}
        >
          <li>
            <a href="#hero">Hello</a>
          </li>
          <li>
            <a
              href="#aboutme"
              className="hover:bg-light hover:text-accent transition-colors"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#education"
              className="hover:bg-accent hover:text-dark transition-colors"
            >
              Education
            </a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#">Other</a>
          </li>
          <div className="xl:absolute right-0">
            <ContactMeButton />
          </div>
        </ul>
      </Container>
    </nav>
  );
};

export default SectionNav;

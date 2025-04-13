import Container from "./Container";
import H1 from "./h/H1";

const CardSection = ({
  className = "",
  title = "",
  content,
  id,
}: {
  className?: string;
  title?: string;
  content?: any[];
  id: string;
}) => {
  return (
    <section id={id} className={className}>
      <Container>
        <H1>{title}</H1>
        <div>
          {content?.map((txt, index) => (
            <p key={index}>{txt}</p>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CardSection;

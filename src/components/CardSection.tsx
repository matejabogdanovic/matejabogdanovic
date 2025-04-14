import Container from "./Container";
import H1 from "./h/H1";

const CardSection = ({
  className = "",
  contentStyle = "",
  title = "",
  content,
  id,
}: {
  className?: string;
  contentStyle?: string;
  title?: string;
  content?: any[];
  id: string;
}) => {
  return (
    <section id={id} className={className}>
      <Container>
        <H1>{title}</H1>
        <div className={contentStyle}>
          {content?.map((txt, index) => (
            <div key={index}>{txt}</div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CardSection;

import { useOutletContext } from "react-router-dom";
import Container from "../../components/Container";
import H1 from "../../components/h/H1";
import { OutletContextType } from "../../layouts/MainLayout";
import { sectionNames } from "../nav/SectionNav";

const SectionOther = () => {
  const context: OutletContextType = useOutletContext();
  return (
    <section id="other" className="!mb-0 mt-4">
      <div className="bg-light bg-opacity-10 xl:rounded-t-[8rem] rounded-t-[5rem]">
        <Container containerCssAdd="py-4">
          <H1 cssAddStyle="!mt-0 text-accent text-center">
            {sectionNames[context.language].other}
          </H1>
          <div className="text-justify">
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500, cuando un impresor (N. del T.
            persona que se dedica a la imprenta) desconocido usó una galería de
            textos y los mezcló de tal manera que logró hacer un libro de textos
            especimen. No sólo sobrevivió 500 años, sino que tambien ingresó
            como texto de relleno en documentos electrónicos, quedando
            esencialmente igual al original. Fue popularizado en los 60s con la
            creación de las hojas "Letraset", las cuales contenian pasajes de
            Lorem Ipsum, y más recientemente con software de autoedición, como
            por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem
            Ipsum.
          </div>
        </Container>
      </div>
    </section>
  );
};

export default SectionOther;

import { useOutletContext } from "react-router-dom";
import Container from "../../components/Container";
import H1 from "../../components/h/H1";
import { OutletContextType } from "../../layouts/MainLayout";
import InterestCard from "./InterestCard";

const _interests: { title: string; content: any[] }[][] = [
  [
    {
      title: "Web Development",
      content: ["HTML/CSS", "Tailwind", "React", "Typescript/Javascript"],
    },
    {
      title: "Low-Level Programming",
      content: ["C/C++/ASM", "Operating Systems", "Arduino"],
    },
    {
      title: "Graphic Design & Photo Manipulation",
      content: ["Photoshop & Illustrator"],
    },
  ],
  [
    {
      title: "Web Programiranje",
      content: ["HTML/CSS", "Tailwind", "React", "Typescript/Javascript"],
    },
    {
      title: "Low-Level Programiranje",
      content: ["C/C++/ASM", "Operativni Sistemi", "Arduino"],
    },
    {
      title: "Grafički Dizajn & Foto Manipulacija",
      content: ["Photoshop & Illustrator"],
    },
  ],
];

const _experience: { title: string; content: any[] }[][] = [
  [
    {
      title: "Game Development",
      content: ["Godot", "Blender"],
    },
    {
      title: "Networking & Ethical Hacking",
      content: ["Configuring Cisco Routers", "Linux & Kali Linux"],
    },
    {
      title: "Music Production",
      content: ["FL Studio"],
    },
  ],
  [
    {
      title: "Razvojem Igrica",
      content: ["Godot", "Blender"],
    },
    {
      title: "Mrežama & Etičkim Hakovanjem",
      content: ["Podešavanje Cisco Rutera", "Linux & Kali Linux"],
    },
    {
      title: "Muzičkom Produkcijom",
      content: ["FL Studio"],
    },
  ],
];

const SectionInterests = () => {
  const context: OutletContextType = useOutletContext();
  const interests: { title: string; content: any[] }[] =
    _interests[context.language];
  const experience: { title: string; content: any[] }[] =
    _experience[context.language];
  return (
    <section id="interests">
      <Container>
        <H1>
          {context.language === 0
            ? "I have high interest in..."
            : "Interesuje me..."}
        </H1>
        <div className="flex flex-wrap xl:justify-between xl:gap-4">
          {interests.map((e, i) => (
            <InterestCard title={e.title} content={e.content} key={i} />
          ))}
        </div>
        <H1>
          {context.language === 0
            ? "I have some experience with..."
            : "Imam iskustva i sa..."}
        </H1>
        <div className="flex flex-wrap justify-between xl:gap-4 ">
          {experience.map((e, i) => (
            <InterestCard title={e.title} content={e.content} key={i} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SectionInterests;

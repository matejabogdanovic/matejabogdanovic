import { SiReact, SiCplusplus } from "react-icons/si";
import SelectLanguageButton from "./SelectLanguageButton";
import { useEffect, useState } from "react";
import { GrProjects } from "react-icons/gr";
import ProjectCard, {
  ProjectInfoType,
  ProjectLanguageType,
} from "./ProjectCard";
import { projects } from "../data/Projects";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import ListingGallery from "./reusable/ListingGallery";
import { FaJava } from "react-icons/fa";
export const icons: {
  language: ProjectLanguageType;
  icon: any;
  hoverStyle?: string;
  selectedStyle?: string;
  iconSize?: string;
}[] = [
  {
    language: "react",
    icon: <SiReact />,
  },
  {
    language: "java",
    icon: <FaJava />,
  },
  {
    language: "cpp",
    icon: <SiCplusplus />,
  },
];

const ProjectCardDisplay = () => {
  const [selected, setSelected] = useState<number>(0);
  const select = (myId: number) => {
    setSelected(myId);
  };
  const [data, setData] = useState<ProjectInfoType[]>([]);
  useEffect(() => {
    if (selected != 0) {
      let lang = icons[selected - 1].language;
      setData(projects.filter((p) => p.language === lang));
    } else {
      setData(projects);
    }
  }, [selected]);
  return (
    <>
      <div className="grid grid-cols-2 xl:grid-cols-4  mb-4 gap-4">
        <SelectLanguageButton
          hoverStyle=" "
          selectedStyle=" text-accent "
          iconSize="text-8xl"
          icon={<GrProjects />}
          selected={selected}
          myId={0}
          select={select}
        />
        {icons.map((data, index) => (
          <SelectLanguageButton
            key={index}
            hoverStyle={data.hoverStyle}
            selectedStyle={data.selectedStyle}
            iconSize={data.iconSize}
            icon={data.icon}
            selected={selected}
            myId={index + 1}
            select={select}
          />
        ))}
      </div>
      {/* mobile */}
      <div className="xl:hidden">
        <ListingGallery
          data={data.sort((a, b) => b.difficulty - a.difficulty)}
          maxShowCnt={1}
          showStep={1}
          mapFunction={(p, index) => <ProjectCard data={p} key={index} />}
          iconLess={<BsArrowLeftCircle className="text-accent text-5xl" />}
          iconMore={<BsArrowRightCircle className="text-accent text-5xl" />}
          mapContainerStyle="grid grid-cols-1 gap-4 min-h-[500px]"
          iconContainerStyle="flex justify-center items-center gap-4 mt-4"
        />
      </div>
      <div className="hidden xl:block">
        <ListingGallery
          data={data.sort((a, b) => b.difficulty - a.difficulty)}
          maxShowCnt={3}
          showStep={2}
          mapFunction={(p, index) => <ProjectCard data={p} key={index} />}
          iconLess={<BsArrowLeftCircle className="text-accent text-5xl" />}
          iconMore={<BsArrowRightCircle className="text-accent text-5xl" />}
          mapContainerStyle="grid grid-cols-3 gap-4 min-h-[500px]"
          iconContainerStyle="flex justify-center items-center gap-4 mt-4"
        />
      </div>
    </>
  );
};

export default ProjectCardDisplay;

import { FaCalendar, FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import H3 from "./reusable/h/H3";
import { icons } from "./ProjectCardsDisplay";

export type ProjectLanguageType = "cpp" | "react" | "java";

export type ProjectInfoType = {
  title: string;
  link?: string;
  language: ProjectLanguageType;
  difficulty: number;
  year: number;
  description: any;
};

const ProjectCard = ({ data }: { data: ProjectInfoType }) => {
  // calculate stars
  let stars: any[] = [];
  const integerPart = Math.trunc(data.difficulty);
  const fractionalPart = data.difficulty - integerPart;
  for (let i = 0; i < integerPart; i++) {
    stars.push(<FaStar className="text-accent" key={i} />);
  }

  if (fractionalPart > 0)
    stars.push(<FaStarHalfAlt className="text-accent" key={integerPart} />);
  const oldLen = stars.length;
  for (let i = 0; i < 5 - oldLen; i++)
    stars.push(<FaRegStar className="text-accent" key={oldLen + i} />);

  const myIcon = icons.find((el) => el.language == data.language);

  return (
    <a
      href={data.link}
      target="_blank"
      className="cursor-pointer block border-2 border-accent rounded-2xl xl:p-8 p-4  relative overflow-hidden
      "
    >
      <div className="absolute top-4 right-4 text-[40rem] opacity-5 rotate-12">
        {myIcon?.icon}
      </div>
      <div>
        <H3 cssAddStyle="!mt-0 min-h-[3lh]">{data.title}</H3>
        <div className="flex justify-between">
          <span className="flex gap-1 items-center">
            {stars.map((star) => star)}
          </span>
          <span className="flex items-center justify-center">
            <FaCalendar className="mr-1" /> {data.year}
          </span>
        </div>
        <hr className="border-light my-1" />
      </div>
      <div>{data.description}</div>
    </a>
  );
};

export default ProjectCard;

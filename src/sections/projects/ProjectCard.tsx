import { FaCalendar, FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import H3 from "../../components/h/H3";
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
export const starsColors = [
  "#D9D9D9", // [0, 1) 0 0.5
  "#3062bf", // [1, 2) 1 1.5
  "#8d30bf", // [2, 3) 2 2.5
  "#EA5136", // [3, 4) 3 3.5
  "#9D0208", // [4, 5] 4 4.5 5
];
const ProjectCard = ({ data }: { data: ProjectInfoType }) => {
  // calculate stars
  let stars: any[] = [];
  const integerPart = Math.trunc(data.difficulty);
  const fractionalPart = data.difficulty - integerPart;
  for (let i = 0; i < integerPart; i++) {
    stars.push(<FaStar key={i} />);
  }

  if (fractionalPart > 0) stars.push(<FaStarHalfAlt key={integerPart} />);
  const oldLen = stars.length;
  for (let i = 0; i < 5 - oldLen; i++)
    stars.push(<FaRegStar key={oldLen + i} />);

  const myIcon = icons.find((el) => el.language == data.language);
  const getColorIndex = () => {
    return integerPart === 5 ? 4 : integerPart;
  };
  return (
    <a
      href={data.link}
      target="_blank"
      className="cursor-pointer block border-2 rounded-2xl xl:p-8 p-4  relative overflow-hidden
      "
      style={{
        borderColor: starsColors[getColorIndex()],
      }}
    >
      <div
        className="absolute top-4 right-4 text-[40rem] opacity-10 rotate-12 "
        style={{ color: starsColors[getColorIndex()] }}
      >
        {myIcon?.icon}
      </div>
      <div>
        <H3 cssAddStyle="!mt-0 xl:min-h-[3lh]">{data.title}</H3>
        <div className="flex justify-between">
          <span
            className="flex gap-1 items-center "
            style={{ color: starsColors[getColorIndex()] }}
          >
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

import { FaStar } from "react-icons/fa";
import { starsColors } from "./ProjectCard";

const StarDisplay = ({ className = "" }: { className?: string }) => {
  let starDisplay = [];
  for (let i = 0; i < 5; i++) {
    starDisplay.push(<FaStar key={i} style={{ color: starsColors[i] }} />);
  }
  return <div className={className}>{starDisplay.map((e) => e)}</div>;
};

export default StarDisplay;

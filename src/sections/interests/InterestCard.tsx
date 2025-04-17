import H3 from "../../components/h/H3";

const InterestCard = ({
  title,
  content,
  mapFunction = (value, index) => <div key={index}>{value}</div>,
}: {
  title: string;
  content: any[];
  mapFunction?: (value: any, index: number, array: any[]) => React.ReactNode;
}) => {
  return (
    <div>
      <H3 cssAddStyle="text-accent !m-0">{title}</H3>
      <div className="flex xl:flex-row flex-col xl:justify-between flex-wrap xl:gap-2">
        {content.map(mapFunction)}
      </div>
    </div>
  );
};

export default InterestCard;

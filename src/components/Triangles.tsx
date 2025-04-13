import Triangle from "./Triangle";

const Triangles = () => {
  return (
    <div className="h-0 w-0 xl:left-0 right-0 top-0 absolute origin-top xl:origin-top-left  xl:scale-125 -scale-x-50 scale-y-50 -z-10">
      <div className="flex relative min-h-[107px]">
        <Triangle cssAddStyle="rotate-180 !border-r-0" />
        <Triangle cssAddStyle="left-[25px]" />
        <Triangle cssAddStyle="rotate-180 left-[100px]" />
        <Triangle cssAddStyle="left-[175px]" />
      </div>
      <div className="flex relative min-h-[107px]">
        <Triangle cssAddStyle="!border-l-0" />
        <Triangle cssAddStyle="rotate-180 left-[25px] " />
        <Triangle cssAddStyle="left-[100px] !border-b-accent animate-flip" />
      </div>
    </div>
  );
};

export default Triangles;

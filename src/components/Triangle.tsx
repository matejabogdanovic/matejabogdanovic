const Triangle = ({ cssAddStyle = "" }: { cssAddStyle?: string }) => {
  return (
    <div
      className={
        "w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-b-[87px] border-b-light opacity-30 absolute " +
        cssAddStyle
      }
    ></div>
  );
};

export default Triangle;

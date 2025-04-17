const SelectLanguageButton = ({
  iconSize = "xl:text-9xl text-6xl",
  selectedStyle = " text-accent bg-light ",
  hoverStyle = " hover:bg-light hover:text-dark-900 ",
  icon,
  selected,
  select,
  myId,
}: {
  iconSize?: string;
  selectedStyle?: string;
  hoverStyle?: string;
  icon: any;
  selected: number;
  select: (myId: number) => void;
  myId: number;
}) => {
  return (
    <button
      onClick={() => {
        select(myId);
      }}
      className={
        ` flex justify-center items-center ${iconSize} rounded-2xl p-2  active:text-accent active:scale-105 transition-all` +
        (selected == myId ? selectedStyle : hoverStyle)
      }
    >
      {icon}
    </button>
  );
};

export default SelectLanguageButton;

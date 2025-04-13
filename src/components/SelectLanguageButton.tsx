const SelectLanguageButton = ({
  iconSize = "text-9xl",
  selectedStyle = " text-accent bg-light ",
  hoverStyle = " hover:bg-light hover:text-dark ",
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
        ` flex justify-center items-center ${iconSize} rounded-2xl p-2 transition-colors active:text-accent ` +
        (selected == myId ? selectedStyle : hoverStyle)
      }
    >
      {icon}
    </button>
  );
};

export default SelectLanguageButton;

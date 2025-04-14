import { MouseEventHandler } from "react";
import { GrClose } from "react-icons/gr";

const ButtonCloseNav = ({
  menuHide,
}: {
  menuHide: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      onClick={menuHide}
      className={
        "xl:hidden flex items-center justify-center p-8 h-full active-link"
      }
    >
      <GrClose className="fill-light " />
    </button>
  );
};

export default ButtonCloseNav;

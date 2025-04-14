import { MouseEventHandler } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const ButtonOpenNav = ({
  menuShow,
}: {
  menuShow: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      onClick={menuShow}
      className={
        "xl:hidden flex items-center justify-center p-8 min-h-[10dvh] active-link"
      }
    >
      <RxHamburgerMenu className="fill-light" />
    </button>
  );
};

export default ButtonOpenNav;

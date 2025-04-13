import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const HamburgerButton = ({
  menuShow,
  menuHide,
}: {
  menuShow: Function;
  menuHide: Function;
}) => {
  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <button
      onClick={() => {
        if (!clicked) {
          menuShow();
        } else menuHide();
        setClicked((prev) => !prev);
      }}
      className={
        "xl:hidden flex items-center justify-center p-8 " +
        (clicked ? "bg-accent transition-colors" : "")
      }
    >
      <GiHamburgerMenu className="fill-light" />
    </button>
  );
};

export default HamburgerButton;

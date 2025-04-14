import { useState } from "react";

const ButtonLanguage = () => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <button
      onClick={() => setChecked((prev) => !prev)}
      className={
        "cursor-pointer outline-light outline-2 outline text-dark rounded-full w-20 p-1 mt-4 flex xl:scale-100 scale-75 justify-between absolute top-0 xl:right-0 xl:left-auto left-0"
      }
    >
      <div
        className={
          " bg-light text-dark rounded-full w-8 h-8 transition-transform flex justify-center items-center -z-10 absolute" +
          (checked ? " translate-x-10" : " translate-x-0")
        }
      ></div>
      <div
        className={
          "rounded-full w-8 h-8 transition-colors flex justify-center items-center " +
          (!checked ? "text-dark" : "text-light")
        }
      >
        EN
      </div>
      <div
        className={
          "rounded-full w-8 h-8 transition-colors flex justify-center items-center " +
          (checked ? "text-dark" : "text-light")
        }
      >
        RS
      </div>
    </button>
  );
};

export default ButtonLanguage;

import { useState } from "react";
import { Outlet } from "react-router-dom";
import ScrollToHashElement from "../components/ScrollToHash";

export type OutletContextType = {
  language: number;
  setLanguage: React.Dispatch<React.SetStateAction<number>>;
};
const MainLayout = () => {
  const [language, setLanguage] = useState<number>(0);

  return (
    <>
      <ScrollToHashElement />
      <Outlet context={{ language, setLanguage }} />
    </>
  );
};

export default MainLayout;

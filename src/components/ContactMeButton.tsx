import { Link, useOutletContext } from "react-router-dom";
import { OutletContextType } from "../layouts/MainLayout";

const ContactMeButton = () => {
  const context: OutletContextType = useOutletContext();
  return (
    <Link
      to="mailto:bogdanovicmateja75@gmail.com"
      className="flex justify-center items-center cursor-pointer uppercase font-bold text-accent border-2 xl:border-transparent rounded-full xl:hover:border-accent border-accent active-link py-7 px-10 "
    >
      {context.language === 0 ? "Contact Me" : "Kontakt"}
    </Link>
  );
};

export default ContactMeButton;

import { Link, LinkProps } from "react-router-dom";

const MyLink = ({ to, icon }: { to: LinkProps["to"]; icon: any }) => {
  return (
    <Link
      to={to}
      className="flex justify-center items-center active-link xl:row-start-1 row-start-2 col-span-2 xl:col-span-1"
    >
      {icon}
    </Link>
  );
};

export default MyLink;

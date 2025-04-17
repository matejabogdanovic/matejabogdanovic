import { Link, LinkProps } from "react-router-dom";

const MyLink = ({ to, icon }: { to: LinkProps["to"]; icon: any }) => {
  return (
    <Link to={to} className="flex justify-center items-center active-link">
      {icon}
    </Link>
  );
};

export default MyLink;

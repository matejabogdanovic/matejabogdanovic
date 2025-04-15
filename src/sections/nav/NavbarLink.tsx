import { Link, LinkProps } from "react-router-dom";

const NavbarLink = ({
  to,
  onClick,
  className = "",
  children,
}: {
  to: LinkProps["to"];
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  children: any;
}) => {
  return (
    <li className="xl:w-auto w-full">
      <Link to={to} className={"active-link " + className} onClick={onClick}>
        {children}
      </Link>
    </li>
  );
};

export default NavbarLink;

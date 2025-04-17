import { Link, LinkProps } from "react-router-dom";

const NavbarLink = ({
  to,
  onClick,
  className = "",
  liStyleAdd = "",
  children,
}: {
  to: LinkProps["to"];
  className?: string;
  liStyleAdd?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  children: any;
}) => {
  return (
    <li
      className={
        "xl:w-auto w-full xl:h-full xl:overflow-visible overflow-hidden " +
        liStyleAdd
      }
    >
      <Link
        to={to}
        className={
          "active-link flex justify-center items-center p-8 h-full  " +
          className
        }
        onClick={onClick}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavbarLink;

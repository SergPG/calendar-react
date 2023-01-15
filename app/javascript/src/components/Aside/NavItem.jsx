import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ iconClass, name, path }) => {
  return (
    <Link
      to={path}
      className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
    >
      {iconClass && <i className={`${iconClass} text-bb-purple`}></i>}
      {name}
    </Link>
  );
};

export default NavItem;

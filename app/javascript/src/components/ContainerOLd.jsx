import React from "react";

import classnames from "classnames";
import NavBar from "components/NavBar";

import PropTypes from "prop-types";

const ContainerOLd = ({ children, className = "" }) => {
  return (
    <div className="container mx-auto" >
      <NavBar />
      <div
        className={classnames("px-4 py-2 mx-auto max-w-7xl sm:px-6 lg:px-8", [
          className,
        ])}
      >
        <div className="max-w-3xl mx-auto">{children}</div>
      </div>
    </div>
  );
};

ContainerOLd.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContainerOLd;

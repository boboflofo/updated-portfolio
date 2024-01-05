import React from "react";
import PropTypes from "prop-types";

const AppContainer = ({ children }) => {
  return <div>{children}</div>;
};

AppContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContainer;

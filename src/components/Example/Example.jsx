import React from "react";
import PropTypes from "prop-types";

export const Example = ({ text }) => {
  return <div>{text}</div>;
};

Example.displayName = "example";

Example.defaultProps = {
  text: "Default Example Text",
};

Example.propTypes = {
  text: PropTypes.string,
};

export default Example;

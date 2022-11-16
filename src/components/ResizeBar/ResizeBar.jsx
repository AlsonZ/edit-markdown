import PropTypes from "prop-types";
import { Container } from "../Container";
import React from "react";
import "./ResizeBar.css";

export const ResizeBar = ({
  children,
  className,
  onMouseDown,
  type,
  width,
  top,
}) => {
  return (
    <Container
      className={`em-resize-bar ${className}`}
      type={type}
      onMouseDown={onMouseDown}
      width={width}
      top={top}
    >
      {children}
    </Container>
  );
};

ResizeBar.displayName = "ResizeBar";

ResizeBar.defaultProps = {
  type: "sticky",
  className: "",
};

ResizeBar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onMouseDown: PropTypes.func,
  type: PropTypes.string,
  width: PropTypes.string,
  top: PropTypes.string,
};

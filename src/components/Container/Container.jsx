import PropTypes from "prop-types";
import "./Container.css";
import { forwardRef } from "react";

export const Container = forwardRef(
  ({ children, className, type, borderType, height, width, top }, ref) => {
    return (
      <div
        style={{ width: width, height: height, top: top }}
        className={
          `em-${type}-container ` +
          "em-card-round " +
          `em-card-${borderType} ` +
          className
        }
        ref={ref}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";

Container.defaultProps = {
  borderType: "shadow",
  type: "grow",
  className: "",
};

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.oneOf(["sticky", "grow"]),
  borderType: PropTypes.oneOf(["shadow", "border"]),
  top: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

export default Container;

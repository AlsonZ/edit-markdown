import React from "react";
import { ResizeBar } from "../../components/ResizeBar";

export default {
  title: "Parts/ResizeBar",
  component: ResizeBar,
  argTypes: {},
};

const ResizeBarTemplate = (args) => <ResizeBar {...args} />;
export const DefaultResizeBar = ResizeBarTemplate.bind();

export const ResizeBarWithArgs = ResizeBarTemplate.bind();
ResizeBarWithArgs.args = {
  theme: "dark",
  className: "blue-centered-container",
};

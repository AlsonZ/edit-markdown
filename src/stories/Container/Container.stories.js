import React from "react";
import { Container } from "../../components/Container/Container";
import "./Container.css";

export default {
  title: "Parts/GrowContainer",
  component: Container,
  argTypes: {},
};

const GrowContainerTemplate = (args) => (
  <div className="em-light-theme default-container-sizing">
    <Container {...args} />
  </div>
);
export const DefaultGrowContainer = GrowContainerTemplate.bind();

export const GrowContainerWithArgs = GrowContainerTemplate.bind();
GrowContainerWithArgs.args = {
  children: "Example with text as children",
  theme: "dark",
  className: "blue-centered-container",
};

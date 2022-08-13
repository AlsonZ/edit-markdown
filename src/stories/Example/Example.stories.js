import React from "react";

import { Example } from "../../components/Example";

export default {
  title: "Example/Example",
  component: Example,
  argTypes: {},
};

const Template = (args) => <Example {...args} />;
export const DefaultExample = Template.bind();

export const ExampleWithArgs = Template.bind();
ExampleWithArgs.args = {
  text: "Example with text args",
};

export const MultiExample = (args) => {
  return (
    <>
      <Example {...args} />
      <Example text="Example with text args" />
    </>
  );
};

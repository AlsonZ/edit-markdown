import React from "react";

import { Editor } from "../../components/Editor";

export default {
  title: "Editor/Editor",
  component: Editor,
  argTypes: {},
};

const Template = (args) => <Editor {...args} />;
export const DefaultEditor = Template.bind();

export const EditorWithArgs = Template.bind();
EditorWithArgs.args = {
  text: "Example with text args",
};

export const MultiEditor = (args) => {
  return (
    <>
      <Editor {...args} />
      <Editor text="Editor with text args" />
    </>
  );
};

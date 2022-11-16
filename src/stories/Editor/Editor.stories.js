import React, { useState } from "react";

import { Editor } from "../../components/Editor";

export default {
  title: "Editor",
  component: Editor,
  argTypes: {},
};

const Template = (args) => (
  <div className="em-dark-theme ">
    <Editor {...args} />
  </div>
);
export const DefaultEditor = Template.bind();

export const EditorWithArgs = Template.bind();
EditorWithArgs.args = {
  text: "Example with text args",
};

export const MultiEditor = (args) => {
  const [value, setValue] = useState();
  const [value2, setValue2] = useState();
  return (
    <div className="em-dark-theme ">
      <button
        onClick={() => {
          console.log(value);
        }}
      >
        log value
      </button>
      <Editor
        {...args}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        editorStyle={{}}
        className=""
      />
      <hr />
      <Editor
        placeholder="Editor with text args"
        value={value2}
        setValue={setValue2}
      />
    </div>
  );
};

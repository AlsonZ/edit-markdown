import { useState, useRef } from "react";
import PropTypes from "prop-types";
import CodeEditor from "@uiw/react-textarea-code-editor";
import ReactMarkdown from "react-markdown";
import { Container } from "../Container";
import { ResizeBar } from "../ResizeBar";
import "./Editor.css";

export const Editor = ({
  stopResizeOutsideContainer,
  value,
  onChange,
  setValue,
  placeholder,
  containerExtraProps,
  editorExtraProps,
  markdownExtraProps,
  containerClassName,
  editorClassName,
  editorContainerClassName,
  markdownContainerClassName,
  markdownClassName,
  Editorstyle,
}) => {
  const [codeValue, setCodeValue] = useState();
  const [codeEditorWidth, setCodeEditorWidth] = useState(50);
  const [markdownViewWidth, setMarkdownViewWidth] = useState(50);
  const [track, setTrack] = useState(false);
  const containerRef = useRef(null);

  const resizeContainers = (e) => {
    if (track) {
      const getCurrentMousePosition = (e) => {
        const col = containerRef.current.getBoundingClientRect();
        let currentMousePos = e.clientX - col.left;
        return currentMousePos;
      };
      const calculateSliderPosition = (currentMousePos) => {
        const convertedToDecimal =
          currentMousePos / containerRef.current.offsetWidth;
        return convertedToDecimal;
      };

      const currentdWidthInDecimal = calculateSliderPosition(
        getCurrentMousePosition(e)
      );

      const newCodeEditorWidth = currentdWidthInDecimal * 100;
      const newMarkdownViewWidth = (1 - currentdWidthInDecimal) * 100;

      setCodeEditorWidth(() => newCodeEditorWidth);
      setMarkdownViewWidth(() => newMarkdownViewWidth);
    }
  };
  const handleStopResize = () => {
    setTrack(false);
  };
  const handleResize = () => {
    setTrack(true);
  };

  const handleCodeChange = (e) => {
    if (setValue) {
      setValue(e.target.value);
    } else if (onChange) {
      onChange(e);
    } else {
      setCodeValue(e.target.value);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`em-container ${containerClassName}`}
      onMouseMove={resizeContainers}
      onMouseUp={handleStopResize}
      onMouseLeave={stopResizeOutsideContainer ? handleStopResize : () => {}}
      {...containerExtraProps}
    >
      <Container
        type="sticky"
        className={`em-editor-container ${editorContainerClassName}`}
        width={`${codeEditorWidth}%`}
        top="5vh"
      >
        <CodeEditor
          value={value ? value : codeValue}
          language="markdown"
          onChange={handleCodeChange}
          placeholder={placeholder ? placeholder : "Enter markdown here"}
          style={{
            backgroundColor: "var(--primary-background)",
            color: "var(--primary-text)",
            fontSize: 16,
            height: "100%",
            width: "100%",
            ...Editorstyle,
          }}
          className={editorClassName}
          {...editorExtraProps}
        />
      </Container>
      <ResizeBar onMouseDown={handleResize} top="5vh" />
      <Container
        type="grow"
        className={`em-editor-markdown-container ${markdownContainerClassName}`}
        width={`${markdownViewWidth}%`}
      >
        <ReactMarkdown className={markdownClassName} {...markdownExtraProps}>
          {value ? value : codeValue}
        </ReactMarkdown>
      </Container>
    </div>
  );
};

Editor.defaultProps = {
  stopResizeOutsideContainer: false,
};

Editor.propTypes = {
  stopResizeOutsideContainer: PropTypes.bool,
  value: PropTypes.node,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  setValue: PropTypes.func,
  containerClassName: PropTypes.string,
  editorClassName: PropTypes.string,
  editorContainerClassName: PropTypes.string,
  markdownContainerClassName: PropTypes.string,
  markdownClassName: PropTypes.string,
  Editorstyle: PropTypes.object,
  containerExtraProps: PropTypes.object,
  editorExtraProps: PropTypes.object,
  markdownExtraProps: PropTypes.object,
};

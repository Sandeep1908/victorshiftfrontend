// inputNode.js

import { GenerateNode } from "./GenerateNode";
import { Position } from "reactflow";

export const GhostNode = (props) => {
  const handles = {
    source: {
      type: "source",
      position: Position.Right,
      id: `${props.id}-value`,
    },
  };

  const config = {
    title: "GAME",
    idPrefix: "customInput-",
    defaultName: "input_",
    nameField: "inputName",
    typeField: "inputType",
    defaultType: "Text",
    hasTypeField: true,
    typeOptions: [
      { value: "Horrer", label: "Text" },
      { value: "Funny", label: "Text" },
      { value: "Battleground", label: "File" },
    ],
  };

  return <GenerateNode {...props} handles={handles} config={config} />;
};

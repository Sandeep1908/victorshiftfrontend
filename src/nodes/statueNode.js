// VenomNode.js

import { Position } from "reactflow";
import { GenerateNode } from "./GenerateNode";

export const StatueNode = (props) => {
  const handles = {
    source: {
      type: "source",
      position: Position.Right,
      id: `${props.id}-response`,
    },
    targets: [
      {
        type: "target",
        position: Position.Left,
        id: `${props.id}-system`,
        style: { top: `${100 / 3}%` },
      },
      {
        type: "target",
        position: Position.Left,
        id: `${props.id}-prompt`,
        style: { top: `${200 / 3}%` },
      },
    ],
  };
  const config = {
    title: "Victor Shift",
    hasNameField: false,
    hasTypeField: false,
    customContent: () => (
      <img
        src="https://framerusercontent.com/images/PUVFaa9JKxr86MtwPIPVKLjAY.png"
        alt="Statue"
        className=" w-full h-[120px] object-contain"
      />
    ),
  };

  return <GenerateNode {...props} handles={handles} config={config} />;
};

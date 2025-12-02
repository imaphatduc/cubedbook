import { v4 as uuid } from "uuid";
import { Group, Scene } from "cubecubed";
import { type IGroupNode } from "../types";

export const addGroupNode = (
  name: string,
  type: "2d" | "3d",
  scene: Scene,
  groupNodes: IGroupNode[],
  setGroupNodes: (d: IGroupNode[]) => void
) => {
  if (type === "2d") {
    const groupNode: IGroupNode = {
      id: uuid(),
      type,
      group: new Group(name, scene),
      cubiconNodes: [],
      animationQueueNodes: [],
    };

    setGroupNodes([...groupNodes, groupNode]);
  }
};

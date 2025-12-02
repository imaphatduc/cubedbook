import { Animation } from "cubecubed";
import { type IGroupNode } from "@/features/group";
import { type IAnimationQueueNode } from "../types";

export const addAnimationQueue = <IAnimation extends Animation>(
  groupNodeId: string,
  animationQueueNode: IAnimationQueueNode<IAnimation>,
  groupNodes: IGroupNode[],
  setGroupNodes: (d: IGroupNode[]) => void
) => {
  setGroupNodes(
    groupNodes.map((groupNode) => {
      if (groupNode.id === groupNodeId) {
        groupNode.animationQueueNodes = [
          ...groupNode.animationQueueNodes,
          animationQueueNode,
        ];
      }

      return groupNode;
    })
  );
};

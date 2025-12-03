import { v4 as uuid } from "uuid";
import { Animation } from "cubecubed";
import { type IAnimationNode } from "../types";
import type { IGroupNode } from "@/features/group";

export const addAnimationNodeToQueue = <IAnimation extends Animation>(
  groupNodeId: string,
  animationQueueId: string,
  label: string,
  groupNodes: IGroupNode[],
  setGroupNodes: (d: IGroupNode[]) => void
) => {
  const animationNode: IAnimationNode<IAnimation> = {
    id: uuid(),
    label,
  };

  setGroupNodes(
    groupNodes.map((groupNode) => {
      if (groupNode.id === groupNodeId) {
        return {
          ...groupNode,
          animationQueueNodes: groupNode.animationQueueNodes.map(
            (animationQueueNode) => {
              if (animationQueueNode.id === animationQueueId) {
                return {
                  ...animationQueueNode,
                  animationNodes: [
                    ...animationQueueNode.animationNodes,
                    animationNode,
                  ],
                };
              }

              return animationQueueNode;
            }
          ),
        };
      }

      return groupNode;
    })
  );

  return animationNode;
};

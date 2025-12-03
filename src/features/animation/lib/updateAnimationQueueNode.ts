import type { IGroupNode } from "@/features/group";
import type { IAnimationQueueNode } from "../types";

export const updateAnimationQueueNode = (
  groupNodeId: string,
  animationQueueId: string,
  data: Partial<IAnimationQueueNode<any>>,
  groupNodes: IGroupNode[],
  setGroupNodes: (d: IGroupNode[]) => void
) => {
  setGroupNodes(
    groupNodes.map((groupNode) => {
      if (groupNode.id === groupNodeId) {
        return {
          ...groupNode,
          animationQueueNodes: groupNode.animationQueueNodes.map(
            (animationQueueNode) => {
              if (animationQueueNode.id === animationQueueId) {
                const updatedAnimationQueueNode = {
                  ...animationQueueNode,
                  ...Object.fromEntries(
                    Object.entries(data).filter(([_, v]) => v !== undefined)
                  ),
                };

                return updatedAnimationQueueNode;
              }

              return animationQueueNode;
            }
          ),
        };
      }

      return groupNode;
    })
  );
};

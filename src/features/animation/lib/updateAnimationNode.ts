import type { IGroupNode } from "@/features/group";
import type { IAnimationNode } from "../types";

export const updateAnimationNode = (
  groupNodeId: string,
  animationQueueId: string,
  animationNodeId: string,
  data: Partial<IAnimationNode<any>>,
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
                return {
                  ...animationQueueNode,
                  animationNodes: animationQueueNode.animationNodes.map(
                    (animationNode) => {
                      if (animationNode.id === animationNodeId) {
                        const updatedAnimationNode = {
                          ...animationNode,
                          ...Object.fromEntries(
                            Object.entries(data).filter(
                              ([_, v]) => v !== undefined
                            )
                          ),
                        };

                        return updatedAnimationNode;
                      }

                      return animationNode;
                    }
                  ),
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
};

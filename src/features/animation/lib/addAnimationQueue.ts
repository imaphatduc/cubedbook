import { v4 as uuid } from "uuid";
import { type IGroupNode } from "@/features/group";

export const addAnimationQueue = (
  groupNodeId: string,
  startTime: number,
  groupNodes: IGroupNode[],
  setGroupNodes: (d: IGroupNode[]) => void
) => {
  setGroupNodes(
    groupNodes.map((groupNode) => {
      if (groupNode.id === groupNodeId) {
        return {
          ...groupNode,
          animationQueueNodes: [
            ...groupNode.animationQueueNodes,
            {
              id: uuid(),
              startTime,
              animationNodes: [],
            },
          ],
        };
      }

      return groupNode;
    })
  );
};

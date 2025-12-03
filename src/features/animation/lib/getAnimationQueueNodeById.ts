import { type IGroupNode } from "@/features/group";

export const getAnimationQueueNodeById = (
  animationQueueNodeId: string,
  groupNodes: IGroupNode[]
) => {
  const animationQueueNode = groupNodes
    .map((groupNode) => groupNode.animationQueueNodes)
    .flat()
    .find(
      (animationQueueNode) => animationQueueNode.id === animationQueueNodeId
    );

  return animationQueueNode;
};

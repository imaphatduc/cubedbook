import { type IGroupNode } from "@/features/group";

export const getAnimationNodeById = (
  animationNodeId: string,
  groupNodes: IGroupNode[]
) => {
  const animationNode = groupNodes
    .map((groupNode) =>
      groupNode.animationQueueNodes.map(
        (animationQueueNode) => animationQueueNode.queues
      )
    )
    .flat(2)
    .find((animationNode) => animationNode.id === animationNodeId);

  return animationNode;
};

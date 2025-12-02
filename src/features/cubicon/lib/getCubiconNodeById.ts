import { type IGroupNode } from "@/features/group";

export const getCubiconNodeById = (
  cubiconNodeId: string,
  groupNodes: IGroupNode[]
) => {
  const cubiconNode = groupNodes
    .map((groupNode) => groupNode.cubiconNodes)
    .flat()
    .find((cubiconNode) => cubiconNode.id === cubiconNodeId);

  return cubiconNode;
};

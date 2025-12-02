import { type IGroupNode } from "@/features/group";

export const removeCubiconNode = (
  groupNodeId: string,
  cubiconNodeId: string,
  groupNodes: IGroupNode[],
  setGroupNodes: (d: IGroupNode[]) => void
) => {
  setGroupNodes(
    groupNodes.map((groupNode) => {
      if (groupNode.id === groupNodeId) {
        groupNode.cubiconNodes = groupNode.cubiconNodes.filter(
          (cubiconNode) => cubiconNode.id !== cubiconNodeId
        );
      }

      return groupNode;
    })
  );
};

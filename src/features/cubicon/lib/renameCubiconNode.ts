import { type IGroupNode } from "@/features/group";

export const renameCubiconNode = (
  groupNodeId: string,
  cubiconNodeId: string,
  newName: string,
  groupNodes: IGroupNode[],
  setGroupNodes: (d: IGroupNode[]) => void
) => {
  setGroupNodes(
    groupNodes.map((groupNode) => {
      if (groupNode.id === groupNodeId) {
        groupNode.cubiconNodes = groupNode.cubiconNodes.map((cubiconNode) => {
          if (cubiconNode.id === cubiconNodeId) {
            cubiconNode.name = newName;
          }

          return cubiconNode;
        });
      }

      return groupNode;
    })
  );
};

import { type IGroupNode } from "@/features/group";
import type { ICubiconNode } from "../types";

export const updateCubiconNode = (
  groupNodeId: string,
  cubiconNodeId: string,
  data: Partial<ICubiconNode<any>>,
  groupNodes: IGroupNode[],
  setGroupNodes: (d: IGroupNode[]) => void
) => {
  setGroupNodes(
    groupNodes.map((groupNode) => {
      if (groupNode.id === groupNodeId) {
        return {
          ...groupNode,
          cubiconNodes: groupNode.cubiconNodes.map((cubiconNode) => {
            if (cubiconNode.id === cubiconNodeId) {
              const updatedCubiconNode = {
                ...cubiconNode,
                ...Object.fromEntries(
                  Object.entries(data).filter(([_, v]) => v !== undefined)
                ),
              };

              return updatedCubiconNode;
            }

            return cubiconNode;
          }),
        };
      }

      return groupNode;
    })
  );
};

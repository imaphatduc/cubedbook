import { v4 as uuid } from "uuid";
import { Cubicon } from "cubecubed";
import { type IGroupNode } from "@/features/group";
import { type ICubiconNode } from "../types";

export const addCubiconNode = <ICubicon extends Cubicon>(
  groupNodeId: string,
  name: string,
  label: string,
  cubicon: ICubicon,
  groupNodes: IGroupNode[],
  setGroupNodes: (d: IGroupNode[]) => void
) => {
  const cubiconNode: ICubiconNode<ICubicon> = {
    id: uuid(),
    name,
    label,
    cubicon,
  };

  setGroupNodes(
    groupNodes.map((groupNode) => {
      if (groupNode.id === groupNodeId) {
        groupNode.cubiconNodes = [...groupNode.cubiconNodes, cubiconNode];
      }

      return groupNode;
    })
  );

  return cubiconNode;
};

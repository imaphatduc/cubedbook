import { Cube } from "phosphor-react";
import { CubiconNode } from "@/features/cubicon";

import { type IGroupNode } from "../types";
import { CubiconGeneratorMenu } from "./CubiconGeneratorMenu";

interface Props {
  groupNode: IGroupNode;
}

export const GroupNode = ({ groupNode }: Props) => {
  return (
    <div className="mb-3">
      <div className="flex gap-3 items-center">
        <Cube size={15} />

        <p>{groupNode.group.name}</p>

        <CubiconGeneratorMenu groupNode={groupNode} />
      </div>

      <div className="border-l-2 border-l-[#555] ml-1 pl-6">
        {groupNode.cubiconNodes.map((cubiconNode) => (
          <CubiconNode
            key={cubiconNode.id}
            groupNode={groupNode}
            cubiconNode={cubiconNode}
          />
        ))}
      </div>
    </div>
  );
};

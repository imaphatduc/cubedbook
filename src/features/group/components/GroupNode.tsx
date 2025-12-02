import { MenuButton } from "@szhsin/react-menu";
import { Cube, Plus } from "phosphor-react";

import { type IGroupNode } from "../types";
import { CtxMenuItem, CtxSubMenu, PressMenu } from "@/features/menu";

import {
  CubiconNode,
  RectangleMenuItem,
  SquareMenuItem,
  CircleMenuItem,
} from "@/features/cubicon";

interface Props {
  groupNode: IGroupNode;
}

export const GroupNode = ({ groupNode }: Props) => {
  return (
    <div className="mb-3">
      <div className="flex items-center">
        <Cube size={15} />

        <p className="m-0 ml-3">{groupNode.group.name}</p>

        <PressMenu
          direction="right"
          offsetY={-15}
          menuButton={
            <MenuButton className="hover:text-[#999] p-2 h-fit">
              <Plus size={10} weight="bold" />
            </MenuButton>
          }
        >
          <CtxSubMenu label="Geometry">
            <RectangleMenuItem groupNode={groupNode} />
            <SquareMenuItem groupNode={groupNode} />
            <CircleMenuItem groupNode={groupNode} />

            <CtxMenuItem label="Line" />
            <CtxMenuItem label="Vector Shape" />
            <CtxMenuItem label="Parametric Curve" />
          </CtxSubMenu>
          <CtxSubMenu label="Coordinates System">
            <CtxMenuItem label="Axes" />
          </CtxSubMenu>
        </PressMenu>
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

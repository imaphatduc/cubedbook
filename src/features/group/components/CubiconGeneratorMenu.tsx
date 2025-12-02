import { MenuButton } from "@szhsin/react-menu";
import { Plus } from "phosphor-react";
import { CtxMenuItem, CtxSubMenu, PressMenu } from "@/features/menu";
import {
  RectangleMenuItem,
  SquareMenuItem,
  CircleMenuItem,
} from "@/features/cubicon";
import type { IGroupNode } from "../types";

interface Props {
  groupNode: IGroupNode;
}

export const CubiconGeneratorMenu = ({ groupNode }: Props) => {
  return (
    <PressMenu
      direction="right"
      menuButton={
        <MenuButton className="p-2 h-fit mt-1">
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
  );
};

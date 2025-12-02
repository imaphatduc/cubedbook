import { useCubed } from "@/contexts";
import type { IGroupNode } from "@/features/group";
import { CtxMenu, CtxMenuItem } from "@/features/menu";
import type { MenuState } from "@szhsin/react-menu";
import type { ICubiconNode } from "../types";
import { useState } from "react";
import { CubiconRenamingModal } from "./CubiconRenamingModal";

interface Props {
  menuProps: {
    state?: MenuState;
    endTransition: () => void;
  };
  toggleMenu: (open?: boolean) => void;
  anchorPoint: { x: number; y: number };
  groupNode: IGroupNode;
  cubiconNode: ICubiconNode<any>;
}

export const CubiconActionMenu = ({
  menuProps,
  toggleMenu,
  anchorPoint,
  groupNode,
  cubiconNode,
}: Props) => {
  const { setCurrentNodeSignature, removeCubiconNode } = useCubed();

  const [isRenaming, setIsRenaming] = useState(false);

  const removeNode = () => {
    removeCubiconNode(groupNode.id, cubiconNode.id);

    groupNode.group.remove([cubiconNode.cubicon]);

    setCurrentNodeSignature({
      id: "",
      type: "",
    });
  };

  return (
    <>
      <CtxMenu
        menuProps={menuProps}
        toggleMenu={toggleMenu}
        anchorPoint={anchorPoint}
      >
        <CtxMenuItem
          label="Rename"
          onClickCapture={() => setIsRenaming(true)}
        />
        <CtxMenuItem label="Remove" onClickCapture={removeNode} />
      </CtxMenu>

      <CubiconRenamingModal
        isRenaming={isRenaming}
        setIsRenaming={setIsRenaming}
        groupNodeId={groupNode.id}
        cubiconNodeId={cubiconNode.id}
        cubiconNodeName={cubiconNode.name}
      />
    </>
  );
};

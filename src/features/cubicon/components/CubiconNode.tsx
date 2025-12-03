import { type MouseEvent, useState } from "react";
import { useMenuState } from "@szhsin/react-menu";
import { useDrag } from "react-dnd";

import { useCubed } from "@/contexts";
import { type IGroupNode } from "@/features/group";
import { type ICubiconNode } from "../types";
import { CubiconActionMenu } from "./CubiconActionMenu";

interface Props {
  groupNode: IGroupNode;
  cubiconNode: ICubiconNode<any>;
}

export const CubiconNode = ({ groupNode, cubiconNode }: Props) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "CubiconNode",
    item: { cubiconNode },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const { currentNodeSignature, setCurrentNodeSignature } = useCubed();

  const [menuProps, toggleMenu] = useMenuState();

  const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });

  const openMenu = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    toggleMenu(true);
    setAnchorPoint({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      ref={drag}
      className="hover:text-[#c8d3f5] cursor-pointer"
      onContextMenu={openMenu}
      style={{
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      <div
        className={`px-2 rounded-sm ${
          cubiconNode.id === currentNodeSignature.id &&
          "text-blue-300 font-bold"
        }`}
        onClick={() => {
          setCurrentNodeSignature({
            type: "Cubicon",
            id: cubiconNode.id,
            groupNodeId: groupNode.id,
          });
        }}
      >
        {cubiconNode.name}
      </div>

      <CubiconActionMenu
        menuProps={menuProps}
        toggleMenu={toggleMenu}
        anchorPoint={anchorPoint}
        groupNode={groupNode}
        cubiconNode={cubiconNode}
      />
    </div>
  );
};

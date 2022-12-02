import { MouseEvent, useState } from 'react';
import { useMenuState } from '@szhsin/react-menu';

import {
  ICubiconNode,
  IGroupNode,
  useCubed,
} from '../../contexts/CubedContext';
import { CtxMenu } from '../menu/CtxMenu';
import { CtxMenuItem } from '../menu/CtxMenuItem';

interface Props {
  groupNode: IGroupNode;
  cubiconNode: ICubiconNode;
}

export const CubiconNode = ({ groupNode, cubiconNode }: Props) => {
  const { removeCubiconNode } = useCubed();

  const [menuProps, toggleMenu] = useMenuState();
  const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });

  const openMenu = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    toggleMenu(true);
    setAnchorPoint({ x: e.clientX, y: e.clientY });
  };

  const removeNode = () => {
    removeCubiconNode(groupNode.id, cubiconNode.id);

    groupNode.group.remove([cubiconNode.cubicon]);
  };

  return (
    <div
      className="hover:text-[#c8d3f5] cursor-pointer"
      onContextMenu={openMenu}
    >
      {cubiconNode.name}

      <CtxMenu
        menuProps={menuProps}
        toggleMenu={toggleMenu}
        anchorPoint={anchorPoint}
      >
        <CtxMenuItem label="Remove" onClickCapture={removeNode} />
      </CtxMenu>
    </div>
  );
};

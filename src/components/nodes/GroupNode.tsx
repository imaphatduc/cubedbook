import { MenuButton } from '@szhsin/react-menu';
import { Cube, Plus } from 'phosphor-react';

import { IGroupNode } from '../../contexts/CubedContext';
import { CtxMenuItem } from '../menu/CtxMenuItem';
import { CtxSubMenu } from '../menu/CtxSubMenu';
import { PressMenu } from '../menu/PressMenu';
import { CubiconNode } from './CubiconNode';

import { RectangleMenuItem } from './menu-items/RectangleMenuItem';
import { SquareMenuItem } from './menu-items/SquareMenuItem';
import { CircleMenuItem } from './menu-items/CircleMenuItem';

interface Props {
  groupNode: IGroupNode;
  currentNodeId: string;
  setCurrentNodeId: (currentNodeId: string) => void;
}

export const GroupNode = ({
  groupNode,
  currentNodeId,
  setCurrentNodeId,
}: Props) => {
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
            <RectangleMenuItem
              groupNode={groupNode}
              setCurrentNodeId={setCurrentNodeId}
            />
            <SquareMenuItem
              groupNode={groupNode}
              setCurrentNodeId={setCurrentNodeId}
            />
            <CircleMenuItem
              groupNode={groupNode}
              setCurrentNodeId={setCurrentNodeId}
            />

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
            currentNodeId={currentNodeId}
            setCurrentNodeId={setCurrentNodeId}
          />
        ))}
      </div>
    </div>
  );
};

import { useState } from 'react';
import { MenuButton } from '@szhsin/react-menu';
import { Square } from 'cubecubed';
import { Plus } from 'phosphor-react';

import { IGroupNode, useCubed } from '../../contexts/CubedContext';
import { CtxMenuItem } from '../menu/CtxMenuItem';
import { CtxSubMenu } from '../menu/CtxSubMenu';
import { PressMenu } from '../menu/PressMenu';

interface Props {
  groupNode: IGroupNode;
}

export const GroupNode = ({ groupNode }: Props) => {
  const { addCubicon } = useCubed();

  return (
    <div>
      <div className="flex items-center">
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
            <CtxMenuItem label="Rectangle" />
            <CtxMenuItem
              label="Square"
              onClick={() => {
                const square = new Square({
                  group: groupNode.group,
                  sideLength: 2,
                }).render();

                const cubiconNode = addCubicon(groupNode.id, 'Square', square);
              }}
            />
            <CtxMenuItem label="Circle" />
            <CtxMenuItem label="Line" />
            <CtxMenuItem label="Vector Shape" />
            <CtxMenuItem label="Parametric Curve" />
          </CtxSubMenu>
          <CtxSubMenu label="Coordinates System">
            <CtxMenuItem label="Axes" />
          </CtxSubMenu>
          <CtxSubMenu label="Animations">
            <CtxMenuItem label="Create Shape" />
            <CtxMenuItem label="Create Vector Shape" />
            <CtxMenuItem label="Translate" />
            <CtxMenuItem label="Rotate" />
            <CtxMenuItem label="Fade In" />
            <CtxMenuItem label="Fade Out" />
            <CtxMenuItem label="Draw Grid" />
            <CtxMenuItem label="Draw Axes" />
            <CtxMenuItem label="Draw Vector Field" />
            <CtxMenuItem label="Point To Coordinates" />
            <CtxMenuItem label="Point Along Graph" />
            <CtxMenuItem label="Write" />
            <CtxMenuItem label="Trace" />
            <CtxMenuItem label="Apply Function" />
          </CtxSubMenu>
        </PressMenu>
      </div>

      <div className="ml-8">
        {groupNode.cubiconNodes.map((node) => (
          <p key={node.id}>{node.name}</p>
        ))}
      </div>
    </div>
  );
};

import { MenuButton } from '@szhsin/react-menu';
import { Plus } from 'phosphor-react';

import { IGroupNode } from '../../contexts/CubedContext';
import { CtxMenuItem } from '../menu/CtxMenuItem';
import { CtxSubMenu } from '../menu/CtxSubMenu';
import { PressMenu } from '../menu/PressMenu';

interface Props {
  groupNode: IGroupNode;
}

export const GroupNode = ({ groupNode }: Props) => {
  return (
    <div>
      <p className="m-0">{groupNode.group.name}</p>

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
          <CtxMenuItem label="Square" />
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
  );
};
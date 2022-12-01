import { MenuButton } from '@szhsin/react-menu';
import { Plus } from 'phosphor-react';

import { useCubed } from '../../contexts/CubedContext';
import { CtxMenuItem } from '../menu/CtxMenuItem';
import { PressMenu } from '../menu/PressMenu';
import { GroupNode } from '../nodes/GroupNode';
import SectionHeader from './components/SectionHeader';

export const SceneSection = () => {
  const { groupNodes, addGroup } = useCubed();

  return (
    <div>
      <div className="flex justify-between items-center">
        <SectionHeader header="Manuscript" />

        <PressMenu
          menuButton={
            <MenuButton className="rounded-md hover:bg-[#666] p-2 h-fit">
              <Plus size={16} weight="bold" />
            </MenuButton>
          }
        >
          <CtxMenuItem
            label="2D Group"
            onClick={() => addGroup('hello-group', '2d')}
          />
          <CtxMenuItem label="3D Group" />
        </PressMenu>
      </div>

      {groupNodes.map((groupNode, i) => (
        <GroupNode key={i} groupNode={groupNode} />
      ))}
    </div>
  );
};

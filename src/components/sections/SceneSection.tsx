import { ReactNode } from 'react';
import { MenuButton } from '@szhsin/react-menu';
import { Plus } from 'phosphor-react';

import { useCubed } from '../../contexts/CubedContext';
import { CtxMenuItem } from '../menu/CtxMenuItem';
import { PressMenu } from '../menu/PressMenu';
import { GroupNode } from '../nodes/GroupNode';
import SectionHeader from './components/SectionHeader';

interface Props {
  currentPad: ReactNode;
  setCurrentPad: (currentPad: ReactNode) => void;
}

export const SceneSection = ({ currentPad, setCurrentPad }: Props) => {
  const { groupNodes, addGroupNode } = useCubed();

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
            onClick={() => addGroupNode('hello-group', '2d')}
          />
          <CtxMenuItem label="3D Group" />
        </PressMenu>
      </div>

      {groupNodes.map((groupNode, i) => (
        <GroupNode
          key={i}
          groupNode={groupNode}
          currentPad={currentPad}
          setCurrentPad={setCurrentPad}
        />
      ))}
    </div>
  );
};

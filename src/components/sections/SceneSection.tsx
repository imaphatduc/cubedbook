import { ReactElement } from 'react';
import { MenuButton } from '@szhsin/react-menu';
import { Plus } from 'phosphor-react';

import { useCubed } from '../../contexts/CubedContext';
import { CtxMenuItem } from '../menu/CtxMenuItem';
import { PressMenu } from '../menu/PressMenu';
import { GroupNode } from '../nodes/GroupNode';
import SectionHeader from './components/SectionHeader';

interface Props {
  currentPad: ReactElement;
  setCurrentPad: (currentPad: ReactElement) => void;
}

export const SceneSection = ({ currentPad, setCurrentPad }: Props) => {
  const { groupNodes, addGroupNode } = useCubed();

  return (
    <div>
      <div className="flex justify-between items-center">
        <SectionHeader header="Manuscript" />

        <div className="flex gap-1 text-lg text-[#c8d3f5] font-extrabold">
          <button
            className="rounded-md hover:bg-[#666] p-2"
            onClick={() => addGroupNode('hello-group', '2d')}
          >
            2D
          </button>
          <button className="rounded-md hover:bg-[#666] p-2">3D</button>
        </div>
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

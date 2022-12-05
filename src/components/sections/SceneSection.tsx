import { ReactElement } from 'react';

import { useCubed } from '../../contexts/CubedContext';
import { GroupNode } from '../nodes/GroupNode';
import SectionHeader from './components/SectionHeader';

interface Props {
  currentNodeId: string;
  setCurrentNodeId: (currentNodeId: string) => void;
}

export const SceneSection = ({ currentNodeId, setCurrentNodeId }: Props) => {
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
          currentNodeId={currentNodeId}
          setCurrentNodeId={setCurrentNodeId}
        />
      ))}
    </div>
  );
};

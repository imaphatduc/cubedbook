import { useCubed } from '../../contexts/CubedContext';
import { GroupNode } from '../nodes/GroupNode';
import SectionHeader from './components/SectionHeader';

export const SceneSection = () => {
  const { groupNodes } = useCubed();

  return (
    <div>
      <SectionHeader header="Manuscript" />

      {groupNodes.map((groupNode, i) => (
        <GroupNode key={i} groupNode={groupNode} />
      ))}
    </div>
  );
};

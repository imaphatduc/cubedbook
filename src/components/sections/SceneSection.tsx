import { useCubed } from '../../contexts/CubedContext';
import { CreateGroupMenu } from '../menu/CreateGroupMenu';
import { GroupNode } from '../nodes/GroupNode';
import SectionHeader from './components/SectionHeader';

export const SceneSection = () => {
  const { groupNodes } = useCubed();

  return (
    <div>
      <div className="flex justify-between items-center">
        <SectionHeader header="Manuscript" />

        <CreateGroupMenu />
      </div>

      {groupNodes.map((groupNode, i) => (
        <GroupNode key={i} groupNode={groupNode} />
      ))}
    </div>
  );
};

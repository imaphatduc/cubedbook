import { IGroupNode } from '../../../contexts/CubedContext';
import { AnimationNode } from '../../nodes/AnimationNode';

interface Props {
  groupNode: IGroupNode;
  unitSegmentPixels: number;
  unitSegmentValue: number;
  frameSegmentValue: number;
  unitSegmentsCount: number;
}

export const GroupAnimation = ({
  groupNode,
  unitSegmentPixels,
  unitSegmentValue,
  frameSegmentValue,
  unitSegmentsCount,
}: Props) => {
  return (
    <AnimationNode
      unitSegmentPixels={unitSegmentPixels}
      unitSegmentValue={unitSegmentValue}
      frameSegmentValue={frameSegmentValue}
      unitSegmentsCount={unitSegmentsCount}
      groupName={'hello-group'}
      animationQueues={{
        start: groupNode.group.groupElapsed,
        queues: groupNode.animationQueues,
      }}
    />
  );
};

import { NodeSignature } from '../../../App';
import { IGroupNode } from '../../../contexts/CubedContext';
import { AnimationNode } from '../../nodes/AnimationNode';

interface Props {
  groupNode: IGroupNode;
  unitSegmentPixels: number;
  unitSegmentValue: number;
  frameSegmentValue: number;
  unitSegmentsCount: number;
  currentNodeSignature: NodeSignature;
  setCurrentNodeSignature: (currentNodeSignature: NodeSignature) => void;
}

export const GroupAnimation = ({
  groupNode,
  unitSegmentPixels,
  unitSegmentValue,
  frameSegmentValue,
  unitSegmentsCount,
  currentNodeSignature,
  setCurrentNodeSignature,
}: Props) => {
  return (
    <AnimationNode
      unitSegmentPixels={unitSegmentPixels}
      unitSegmentValue={unitSegmentValue}
      frameSegmentValue={frameSegmentValue}
      unitSegmentsCount={unitSegmentsCount}
      groupNode={groupNode}
      currentNodeSignature={currentNodeSignature}
      setCurrentNodeSignature={setCurrentNodeSignature}
    />
  );
};

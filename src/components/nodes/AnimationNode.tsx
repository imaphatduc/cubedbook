import { v4 as uuid } from 'uuid';
import { NodeSignature } from '../../App';

import { IGroupNode, useCubed } from '../../contexts/CubedContext';
import { InputField } from '../fields/InputField';
import { AnimationQueueNode } from './AnimationQueueNode';

interface Props {
  unitSegmentPixels: number;
  unitSegmentValue: number;
  frameSegmentValue: number;
  unitSegmentsCount: number;
  groupNode: IGroupNode;
  currentNodeSignature: NodeSignature;
  setCurrentNodeSignature: (currentNodeSignature: NodeSignature) => void;
}

export const AnimationNode = ({
  unitSegmentPixels,
  unitSegmentValue,
  frameSegmentValue,
  unitSegmentsCount,
  groupNode,
  currentNodeSignature,
  setCurrentNodeSignature,
}: Props) => {
  const { addAnimationQueue } = useCubed();

  const frameUnitSegmentsCount = frameSegmentValue / unitSegmentValue;

  const bounds = {
    left: 0,
    right: unitSegmentsCount * unitSegmentPixels,
  };

  return (
    <>
      <div className="bg-[#222] border-r border-b border-[#444]">
        <InputField
          placeholder={'hello-group'}
          disabled
          style={{
            width: '100%',
            height: '30px',
            maxWidth: '100%',
          }}
        />
      </div>

      <div
        className="bg-[#222] border-b border-[#444]"
        onDoubleClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();

          const x = e.clientX - rect.left;

          const lowerBound = x - (x % unitSegmentPixels);
          const upperBound = lowerBound + unitSegmentPixels;

          const selectedKeyframe =
            x - lowerBound < upperBound - x ? lowerBound : upperBound;

          const selectedKeyframeIndex = selectedKeyframe / unitSegmentPixels;
          const selectedKeyframeValue =
            selectedKeyframeIndex * unitSegmentValue * 2;

          addAnimationQueue(groupNode.id, {
            start: selectedKeyframeValue,
            queues: [],
          });
        }}
      >
        {groupNode.animationQueueNodes.map((animationQueueNode) => (
          <AnimationQueueNode
            key={uuid()}
            unitSegmentPixels={unitSegmentPixels}
            unitSegmentValue={unitSegmentValue}
            bounds={bounds}
            animationQueueNode={animationQueueNode}
            currentNodeSignature={currentNodeSignature}
            setCurrentNodeSignature={setCurrentNodeSignature}
          />
        ))}

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(auto-fill,${unitSegmentPixels}px)`,
          }}
        >
          {[...Array(unitSegmentsCount)].map((_, i) => (
            <div
              key={i}
              className={`py-2 ${
                (i + 1) % frameUnitSegmentsCount === 0 &&
                'border-r border-[#444]'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

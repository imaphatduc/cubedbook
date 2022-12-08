import { InputField } from '../fields/InputField';
import { AnimationQueueNode } from './AnimationQueueNode';

interface Props {
  unitSegmentPixels: number;
  unitSegmentValue: number;
  frameSegmentValue: number;
  unitSegmentsCount: number;
  animationQueue: {
    start: number;
    queue: {
      duration: number;
    }[];
  };
}

export const AnimationNode = ({
  unitSegmentPixels,
  unitSegmentValue,
  frameSegmentValue,
  unitSegmentsCount,
  animationQueue,
}: Props) => {
  const frameUnitSegmentsCount = frameSegmentValue / unitSegmentValue;

  const bounds = {
    left: 0,
    right: unitSegmentsCount * unitSegmentPixels,
  };

  return (
    <>
      <div className="bg-[#222] border-r border-b border-[#444]">
        <InputField
          disabled
          style={{
            width: '100%',
            height: '30px',
            maxWidth: '100%',
          }}
        />
      </div>

      <div className="bg-[#222] border-b border-[#444]">
        <AnimationQueueNode
          unitSegmentPixels={unitSegmentPixels}
          unitSegmentValue={unitSegmentValue}
          bounds={bounds}
          animationQueue={animationQueue}
        />

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

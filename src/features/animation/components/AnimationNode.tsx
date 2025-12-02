import { v4 as uuid } from "uuid";
import { useCubed } from "@/contexts";
import { type IGroupNode } from "@/features/group";
import { AnimationQueueNode } from "./AnimationQueueNode";

interface Props {
  unitSegmentPixels: number;
  unitSegmentValue: number;
  frameSegmentValue: number;
  unitSegmentsCount: number;
  groupNode: IGroupNode;
}

export const AnimationNode = ({
  unitSegmentPixels,
  unitSegmentValue,
  frameSegmentValue,
  unitSegmentsCount,
  groupNode,
}: Props) => {
  const { addAnimationQueue } = useCubed();

  const frameUnitSegmentsCount = frameSegmentValue / unitSegmentValue;

  const bounds = {
    left: 0,
    right: unitSegmentsCount * unitSegmentPixels,
  };

  return (
    <div
      className="bg-[#222] border-b border-[#444] w-fit h-full"
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
        />
      ))}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${unitSegmentsCount}, ${unitSegmentPixels}px)`,
        }}
      >
        {[...Array(unitSegmentsCount)].map((_, i) => (
          <div
            key={i}
            className={`py-2 ${
              (i + 1) % frameUnitSegmentsCount === 0 && "border-r border-[#444]"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

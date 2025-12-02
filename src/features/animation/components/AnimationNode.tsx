import { v4 as uuid } from "uuid";
import { useCubed } from "@/contexts";
import { type IGroupNode } from "@/features/group";
import { AnimationQueueNode } from "./AnimationQueueNode";

interface Props {
  unitPixels: number;
  unitsCount: number;
  unitValue: number;
  unitsInASegment: number;
  groupNode: IGroupNode;
}

export const AnimationNode = ({
  unitPixels,
  unitsCount,
  unitValue,
  unitsInASegment,
  groupNode,
}: Props) => {
  const { addAnimationQueue } = useCubed();

  const bounds = {
    left: 0,
    right: unitsCount * unitPixels,
  };

  return (
    <div
      className="bg-[#222] border-b border-[#444] w-fit h-full"
      onDoubleClick={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const lowerBound = x - (x % unitPixels);
        const upperBound = lowerBound + unitPixels;

        const selectedUnitInPixels =
          x - lowerBound < upperBound - x ? lowerBound : upperBound;

        const selectedUnit = selectedUnitInPixels / unitPixels;

        const selectedKeyframe = selectedUnit * unitValue * 1000;

        addAnimationQueue(groupNode.id, {
          start: selectedKeyframe,
          animations: [],
        });
      }}
    >
      {groupNode.animationQueueNodes.map((animationQueueNode) => (
        <AnimationQueueNode
          key={uuid()}
          unitPixels={unitPixels}
          unitValue={unitValue}
          bounds={bounds}
          animationQueueNode={animationQueueNode}
        />
      ))}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${unitsCount}, ${unitPixels}px)`,
        }}
      >
        {[...Array(unitsCount)].map((_, i) => (
          <div
            key={i}
            className={`py-2 ${
              (i + 1) % unitsInASegment === 0 && "border-r border-[#444]"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

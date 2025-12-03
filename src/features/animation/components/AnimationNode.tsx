import { useCubed } from "@/contexts";
import { type IGroupNode } from "@/features/group";
import { AnimationQueueNode } from "./AnimationQueueNode";
import type { MouseEvent } from "react";
import { TimelineSegments } from "./TimelineSegments";

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

  const getNearestUnit = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;

    const lowerBound = x - (x % unitPixels);

    const upperBound = lowerBound + unitPixels;

    const nearestUnitInPixels =
      x - lowerBound < upperBound - x ? lowerBound : upperBound;

    const nearestUnit = nearestUnitInPixels / unitPixels;

    return nearestUnit;
  };

  const addKeyframe = (e: MouseEvent<HTMLDivElement>) => {
    const selectedUnit = getNearestUnit(e);

    const selectedKeyframe = selectedUnit * unitValue * 1000;

    addAnimationQueue(groupNode.id, selectedKeyframe);
  };

  return (
    <div
      className="bg-[#222] border-b border-[#444] w-fit h-full"
      onDoubleClick={addKeyframe}
    >
      {groupNode.animationQueueNodes.map((animationQueueNode) => (
        <AnimationQueueNode
          key={animationQueueNode.id}
          groupNodeId={groupNode.id}
          unitPixels={unitPixels}
          unitValue={unitValue}
          bounds={bounds}
          animationQueueNode={animationQueueNode}
        />
      ))}

      <TimelineSegments
        unitPixels={unitPixels}
        unitsCount={unitsCount}
        unitsInASegment={unitsInASegment}
      />
    </div>
  );
};

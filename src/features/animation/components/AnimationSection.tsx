import { Play } from "phosphor-react";
import { useCubed } from "@/contexts";
import { Ruler } from "@/features/ruler";
import { AnimationNode } from "./AnimationNode";

export const AnimationSection = () => {
  const { groupNodes } = useCubed();

  const unitSegmentPixels = 25;

  const unitSegmentValue = 0.5;
  const frameSegmentValue = 2;

  const unitSegmentsCount = 100;

  return (
    <>
      <div className="grid grid-cols-[16rem_1fr] w-full bg-[#1b1b1b]">
        <div className="flex justify-center items-center border-r border-b border-[#444] sticky top-0 z-10"></div>
        <div className="border-b border-[#444]">
          <div className="flex justify-center items-center py-2">
            <button>
              <Play size={20} weight="fill" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-[16rem_1fr] bg-[#1b1b1b] h-full">
        <div className="border-r border-b border-[#444]">
          <div></div>
        </div>
        <div className="overflow-y-hidden overflow-x-scroll">
          <Ruler
            unitSegmentPixels={unitSegmentPixels}
            unitSegmentValue={unitSegmentValue}
            frameSegmentValue={frameSegmentValue}
            unitSegmentsCount={unitSegmentsCount}
          />
          {groupNodes.map((groupNode) => (
            <AnimationNode
              key={groupNode.id}
              unitSegmentPixels={unitSegmentPixels}
              unitSegmentValue={unitSegmentValue}
              frameSegmentValue={frameSegmentValue}
              unitSegmentsCount={unitSegmentsCount}
              groupNode={groupNode}
            />
          ))}
        </div>
      </div>
    </>
  );
};

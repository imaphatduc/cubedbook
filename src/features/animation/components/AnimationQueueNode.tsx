import { type MouseEvent, useRef, useState } from "react";
import { type DraggableBounds } from "react-draggable";
import { useMenuState } from "@szhsin/react-menu";

import { type IAnimationQueueNode } from "@/features/animation";
import { AnimationKeyframe } from "./AnimationKeyframe";
import { AnimationGeneratorMenu } from "./AnimationGeneratorMenu";

interface Props {
  groupNodeId: string;
  unitPixels: number;
  unitValue: number;
  bounds: DraggableBounds;
  animationQueueNode: IAnimationQueueNode<any>;
}

export const AnimationQueueNode = ({
  groupNodeId,
  unitPixels,
  unitValue,
  bounds,
  animationQueueNode,
}: Props) => {
  const [menuProps, toggleMenu] = useMenuState();

  const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });

  const startTime = animationQueueNode.startTime;

  const keyframes = animationQueueNode.animationNodes.map(
    (animationNode) => startTime + (animationNode.animation?.duration ?? 1000)
  );

  const nodeRef = useRef<HTMLDivElement>(null);

  const startPixel = (startTime / 1000 / unitValue) * unitPixels;

  const openMenu = (e: MouseEvent<SVGSVGElement>) => {
    e.preventDefault();
    toggleMenu(true);
    setAnchorPoint({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="flex flex-col gap-2 justify-center py-2">
      <AnimationKeyframe
        type="queue"
        nodeRef={nodeRef}
        bounds={bounds}
        position={{ x: startPixel, y: 0 }}
        unitPixels={unitPixels}
        openMenu={openMenu}
        onDrag={(_, { x }) => {
          // setStartTime(x / unitPixels);
          // TODO: set `end` properties of `animationQueue` animations to `startTime`
        }}
      />

      {keyframes.map((keyframe, i) => (
        <AnimationKeyframe
          type="animation"
          key={i}
          nodeRef={nodeRef}
          bounds={{ ...bounds, left: startPixel }}
          position={{
            x: (keyframe / 1000 / unitValue) * unitPixels,
            y: 0,
          }}
          unitPixels={unitPixels}
        />
      ))}

      <AnimationGeneratorMenu
        groupNodeId={groupNodeId}
        animationQueueNodeId={animationQueueNode.id}
        menuProps={menuProps}
        toggleMenu={toggleMenu}
        anchorPoint={anchorPoint}
      />
    </div>
  );
};

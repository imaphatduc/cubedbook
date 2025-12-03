import { useCubed } from "@/contexts";
import { Diamond } from "phosphor-react";
import type { MouseEvent, RefObject } from "react";
import Draggable, {
  type DraggableBounds,
  type DraggableEventHandler,
} from "react-draggable";
import { getKeyframeFromPixels } from "../lib";

interface Props {
  groupNodeId: string;
  animationQueueNodeId: string;
  nodeRef: RefObject<HTMLDivElement | null>;
  bounds: DraggableBounds;
  position: { x: number; y: number };
  unitPixels: number;
  unitValue: number;
  openMenu: (e: MouseEvent<SVGSVGElement>) => void;
}

export const AnimationQueueKeyframe = ({
  groupNodeId,
  animationQueueNodeId,
  nodeRef,
  bounds,
  position,
  unitPixels,
  unitValue,
  openMenu,
}: Props) => {
  const { updateAnimationQueueNode } = useCubed();

  const diamondWidth = 16;

  const onDrag: DraggableEventHandler = (_, { x }) => {
    const keyframe = getKeyframeFromPixels(x, unitPixels, unitValue);

    updateAnimationQueueNode(groupNodeId, animationQueueNodeId, {
      startTime: keyframe,
    });
  };

  return (
    <Draggable
      nodeRef={nodeRef}
      axis="x"
      position={position}
      grid={[unitPixels, 0]}
      bounds={bounds}
      onDrag={onDrag}
    >
      <div ref={nodeRef}>
        <Diamond
          size={diamondWidth}
          weight="fill"
          className={"text-cubedpink"}
          style={{
            marginLeft: `-${diamondWidth / 2}px`,
          }}
          onContextMenu={openMenu}
        />
      </div>
    </Draggable>
  );
};

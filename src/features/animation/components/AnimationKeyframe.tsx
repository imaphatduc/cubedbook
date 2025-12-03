import { Diamond } from "phosphor-react";
import type { RefObject } from "react";
import Draggable, {
  type DraggableBounds,
  type DraggableEventHandler,
} from "react-draggable";
import type { IAnimationNode } from "../types";
import { useCubed } from "@/contexts";
import { getKeyframeFromPixels } from "../lib";
import { clone } from "@/lib";

interface Props {
  groupNodeId: string;
  animationQueueNodeId: string;
  animationNode: IAnimationNode<any>;
  startTime: number;
  nodeRef: RefObject<HTMLDivElement | null>;
  bounds: DraggableBounds;
  position: { x: number; y: number };
  unitPixels: number;
  unitValue: number;
}

export const AnimationKeyframe = ({
  groupNodeId,
  animationQueueNodeId,
  animationNode,
  startTime,
  nodeRef,
  bounds,
  position,
  unitPixels,
  unitValue,
}: Props) => {
  const { currentNodeSignature, setCurrentNodeSignature, updateAnimationNode } =
    useCubed();

  const onDrag: DraggableEventHandler = (_, { x }) => {
    const keyframe = getKeyframeFromPixels(x, unitPixels, unitValue);

    const updatedAnimation = clone(animationNode.animation);

    updatedAnimation.duration = keyframe - startTime;

    updateAnimationNode(groupNodeId, animationQueueNodeId, animationNode.id, {
      animation: updatedAnimation,
    });
  };

  const diamondWidth = 16;

  const focus = () => {
    setCurrentNodeSignature({
      type: "Animation",
      id: animationNode.id,
      label: animationNode.label,
      groupNodeId,
      animationQueueNodeId,
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
          className={"text-cubedlightblue"}
          style={{
            marginLeft: `-${diamondWidth / 2}px`,
            opacity: currentNodeSignature.id === animationNode.id ? 0.5 : 1,
          }}
          onClick={focus}
        />
      </div>
    </Draggable>
  );
};

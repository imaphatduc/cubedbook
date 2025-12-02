import { Diamond } from "phosphor-react";
import type { MouseEvent, RefObject } from "react";
import Draggable, {
  type DraggableBounds,
  type DraggableEventHandler,
} from "react-draggable";

interface Props {
  type: "queue" | "animation";
  nodeRef: RefObject<HTMLDivElement | null>;
  bounds: DraggableBounds;
  defaultPosition: { x: number; y: number };
  unitPixels: number;
  openMenu?: (e: MouseEvent<SVGSVGElement>) => void;
  onDrag?: DraggableEventHandler;
}

export const AnimationKeyframe = ({
  type,
  nodeRef,
  bounds,
  defaultPosition,
  unitPixels,
  openMenu,
  onDrag,
}: Props) => {
  const diamondWidth = 16;

  return (
    <Draggable
      nodeRef={nodeRef}
      axis="x"
      defaultPosition={defaultPosition}
      grid={[unitPixels, 0]}
      bounds={bounds}
      onDrag={onDrag}
    >
      <Diamond
        ref={nodeRef}
        size={diamondWidth}
        weight="fill"
        className={type === "queue" ? "text-cubedpink" : "text-cubedlightblue"}
        style={{
          marginLeft: `-${diamondWidth / 2}px`,
        }}
        onContextMenu={type === "queue" ? openMenu : () => {}}
      />
    </Draggable>
  );
};

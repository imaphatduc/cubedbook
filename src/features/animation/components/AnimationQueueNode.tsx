import { type MouseEvent, useRef, useState } from "react";
import Draggable, { type DraggableBounds } from "react-draggable";
import { Diamond } from "phosphor-react";
import { useMenuState } from "@szhsin/react-menu";

import { type IAnimationQueueNode } from "@/features/animation";
import { CtxMenu, CtxMenuItem } from "@/features/menu";
import { useCubed } from "@/contexts";

interface Props {
  unitPixels: number;
  unitValue: number;
  bounds: DraggableBounds;
  animationQueueNode: IAnimationQueueNode<any>;
}

export const AnimationQueueNode = ({
  unitPixels,
  unitValue,
  bounds,
  animationQueueNode,
}: Props) => {
  const { setCurrentNodeSignature } = useCubed();

  const [menuProps, toggleMenu] = useMenuState();
  const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });

  const openMenu = (e: MouseEvent<SVGSVGElement>) => {
    e.preventDefault();
    toggleMenu(true);
    setAnchorPoint({ x: e.clientX, y: e.clientY });
  };

  const [startTime, setStartTime] = useState(animationQueueNode.start);

  const keyframes = animationQueueNode.animations.map(
    (animationNode) => startTime + animationNode.animation.duration
  );

  const diamondWidth = 16;

  const nodeRef = useRef<HTMLDivElement>(null);

  const startPixel = (startTime / 1000 / unitValue) * unitPixels;

  return (
    <div className="flex flex-col gap-2 justify-center py-2">
      <Draggable
        nodeRef={nodeRef}
        axis="x"
        defaultPosition={{ x: startPixel, y: 0 }}
        bounds={bounds}
        onDrag={(_, { x }) => {
          setStartTime(x / unitPixels);

          // TODO: set `end` properties of `animationQueue` animations to `startTime`
        }}
      >
        <Diamond
          ref={nodeRef}
          size={diamondWidth}
          weight="fill"
          className="text-cubedpink"
          style={{
            marginLeft: `-${diamondWidth / 2}px`,
          }}
          onContextMenu={openMenu}
        />
      </Draggable>

      {keyframes.map((keyframe, i) => (
        <Draggable
          key={i}
          nodeRef={nodeRef}
          axis="x"
          defaultPosition={{ x: (keyframe / unitValue) * unitPixels, y: 0 }}
          bounds={{ ...bounds, left: startPixel }}
        >
          <Diamond
            ref={nodeRef}
            size={diamondWidth}
            weight="fill"
            className="text-cubedlightblue"
            style={{
              marginLeft: `-${diamondWidth / 2}px`,
            }}
          />
        </Draggable>
      ))}

      <CtxMenu
        menuProps={menuProps}
        toggleMenu={toggleMenu}
        anchorPoint={anchorPoint}
      >
        <CtxMenuItem
          label="Create Shape"
          onClick={() =>
            setCurrentNodeSignature({
              id: "",
              label: "CreateShape",
              type: "Animation",
            })
          }
        />

        <CtxMenuItem label="Create Vector Shape" />
        <CtxMenuItem label="Translate" />
        <CtxMenuItem label="Rotate" />
        <CtxMenuItem label="Fade In" />
        <CtxMenuItem label="Fade Out" />
        <CtxMenuItem label="Draw Grid" />
        <CtxMenuItem label="Draw Axes" />
        <CtxMenuItem label="Draw Vector Field" />
        <CtxMenuItem label="Point To Coordinates" />
        <CtxMenuItem label="Point Along Graph" />
        <CtxMenuItem label="Write" />
        <CtxMenuItem label="Trace" />
        <CtxMenuItem label="Apply Function" />
      </CtxMenu>
    </div>
  );
};

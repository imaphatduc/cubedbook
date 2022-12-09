import { MouseEvent, useState } from 'react';
import Draggable, { DraggableBounds } from 'react-draggable';
import { Diamond } from 'phosphor-react';
import { useMenuState } from '@szhsin/react-menu';

import { IAnimationQueueNode } from '../../contexts/CubedContext';
import { CtxMenu } from '../menu/CtxMenu';
import { CtxMenuItem } from '../menu/CtxMenuItem';
import { NodeSignature } from '../../App';

interface Props {
  unitSegmentPixels: number;
  unitSegmentValue: number;
  bounds: DraggableBounds;
  animationQueueNode: IAnimationQueueNode<any>;
  currentNodeSignature: NodeSignature;
  setCurrentNodeSignature: (currentNodeSignature: NodeSignature) => void;
}

export const AnimationQueueNode = ({
  unitSegmentPixels,
  unitSegmentValue,
  bounds,
  animationQueueNode,
  currentNodeSignature,
  setCurrentNodeSignature,
}: Props) => {
  const [menuProps, toggleMenu] = useMenuState();
  const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });

  const openMenu = (e: MouseEvent<SVGSVGElement>) => {
    e.preventDefault();
    toggleMenu(true);
    setAnchorPoint({ x: e.clientX, y: e.clientY });
  };

  const [startTime, setStartTime] = useState(animationQueueNode.start);

  const keyframes = animationQueueNode.queues.map(
    (animationNode) =>
      (startTime + animationNode.animation.duration / 1000) / unitSegmentValue
  );

  const startPixel = startTime * unitSegmentPixels;

  const diamondWidth = 16;

  return (
    <div className="flex flex-col gap-2 justify-center py-2">
      <Draggable
        axis="x"
        defaultPosition={{
          x: startPixel,
          y: 0,
        }}
        grid={[unitSegmentPixels, 0]}
        bounds={bounds}
        onDrag={(_, { x }) => {
          setStartTime(x / unitSegmentPixels);

          // TODO: set `end` properties of `animationQueue` animations to `startTime`
        }}
      >
        <Diamond
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
          axis="x"
          defaultPosition={{ x: keyframe * unitSegmentPixels, y: 0 }}
          grid={[unitSegmentPixels, 0]}
          bounds={{ ...bounds, left: startPixel }}
        >
          <Diamond
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
              id: '',
              label: 'CreateShape',
              type: 'Animation',
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

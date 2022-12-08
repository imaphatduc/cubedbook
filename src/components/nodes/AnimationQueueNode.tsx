import { useState } from 'react';
import Draggable, { DraggableBounds } from 'react-draggable';
import { Diamond } from 'phosphor-react';
import { IAnimationQueueNode } from '../../contexts/CubedContext';

interface Props {
  unitSegmentPixels: number;
  unitSegmentValue: number;
  bounds: DraggableBounds;
  animationQueueNode: IAnimationQueueNode<any>;
}

export const AnimationQueueNode = ({
  unitSegmentPixels,
  unitSegmentValue,
  bounds,
  animationQueueNode,
}: Props) => {
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
    </div>
  );
};

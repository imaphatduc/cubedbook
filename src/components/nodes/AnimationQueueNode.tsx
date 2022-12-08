import { useState } from 'react';
import Draggable, { DraggableBounds } from 'react-draggable';
import { Diamond } from 'phosphor-react';

interface Props {
  unitSegmentPixels: number;
  unitSegmentValue: number;
  bounds: DraggableBounds;
  animationQueue: {
    start: number;
    queue: {
      duration: number;
    }[];
  };
}
export const AnimationQueueNode = ({
  unitSegmentPixels,
  unitSegmentValue,
  bounds,
  animationQueue,
}: Props) => {
  const [startTime, setStartTime] = useState(animationQueue.start);

  const keyframes = animationQueue.queue.map(
    (animation) => (startTime + animation.duration) / unitSegmentValue
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
        bounds={{ ...bounds, left: startPixel }}
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

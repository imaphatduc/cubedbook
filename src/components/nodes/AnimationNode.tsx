import { Diamond } from 'phosphor-react';
import Draggable from 'react-draggable';
import { InputField } from '../fields/InputField';

interface Props {
  unitSegmentPixels: number;
  unitSegmentValue: number;
  frameSegmentValue: number;
  unitSegmentsCount: number;
  timestamps: number[];
}

export const AnimationNode = ({
  unitSegmentPixels,
  unitSegmentValue,
  frameSegmentValue,
  unitSegmentsCount,
  timestamps,
}: Props) => {
  const frameUnitSegmentsCount = frameSegmentValue / unitSegmentValue;

  const timeIndices = timestamps.map((stamp) => stamp / unitSegmentValue);

  const diamondWidth = 16;

  const bounds = {
    left: 0,
    right: unitSegmentsCount * unitSegmentPixels,
  };

  return (
    <>
      <div className="bg-[#222] border-r border-b border-[#444]">
        <InputField
          disabled
          style={{
            width: '100%',
            height: '30px',
            maxWidth: '100%',
          }}
        />
      </div>
      <div className="bg-[#222] border-b border-[#444]">
        <div className="flex flex-col gap-2 justify-center py-2">
          <Draggable
            axis="x"
            defaultPosition={{ x: timeIndices[0] * unitSegmentPixels, y: 0 }}
            grid={[unitSegmentPixels, 0]}
            bounds={bounds}
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

          {timeIndices.map((index, i) => (
            <Draggable
              key={i}
              axis="x"
              defaultPosition={{ x: index * unitSegmentPixels, y: 0 }}
              grid={[unitSegmentPixels, 0]}
              bounds={bounds}
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

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(auto-fill,${unitSegmentPixels}px)`,
          }}
        >
          {[...Array(unitSegmentsCount)].map((_, i) => (
            <div
              key={i}
              className={`py-2 ${
                (i + 1) % frameUnitSegmentsCount === 0 &&
                'border-r border-[#444]'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

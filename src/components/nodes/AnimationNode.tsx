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

  const getBounds = (i: number) => {
    return {
      left: -i * unitSegmentPixels,
      right: (unitSegmentsCount - i) * unitSegmentPixels,
    };
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
        <div className={`flex flex-col gap-2 justify-center py-2`}>
          {timeIndices.map((index, i) => (
            <Draggable
              key={i}
              axis="x"
              defaultPosition={{ x: index * unitSegmentPixels, y: 0 }}
              grid={[unitSegmentPixels, 0]}
              bounds={getBounds(i)}
            >
              <Diamond
                size={diamondWidth}
                weight="fill"
                className={`-ml-[${diamondWidth / 2}px] text-red-500`}
              />
            </Draggable>
          ))}
        </div>

        <div
          className={`grid grid-cols-[repeat(auto-fill,${unitSegmentPixels}px)]`}
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

import { Diamond } from 'phosphor-react';
import { InputField } from '../fields/InputField';

interface Props {
  timeSegments: number;
  keyframes: number[];
}

export const AnimationNode = ({ timeSegments, keyframes }: Props) => {
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
        <div className="grid grid-cols-[repeat(auto-fill,100px)] divide-x divide-[#444]">
          {[...Array(timeSegments)].map((_, i) => (
            <div key={i} className="flex flex-col gap-2 justify-center py-2">
              {keyframes.includes(i) && (
                <>
                  <Diamond
                    size={16}
                    weight="fill"
                    className="-ml-[8px] text-red-500"
                  />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

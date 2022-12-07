import { Play } from 'phosphor-react';
import { Fragment } from 'react';
import { AnimationNode } from '../nodes/AnimationNode';
import { Ruler } from './components/Ruler';

export const AnimationSection = () => {
  const timeSegments = 6;

  const groupsCount = 1;

  return (
    <div className="grid grid-cols-[16rem_1fr] overflow-y-scroll h-[33vh] w-full">
      <div className="col-span-2 grid grid-cols-[16rem_1fr] sticky top-0 bg-[#1b1b1b]">
        <div className="flex justify-center items-center border-r border-b border-[#444] sticky top-0"></div>
        <div className="border-b border-[#444]">
          <div className="flex justify-center items-center py-2">
            <button>
              <Play size={20} weight="fill" />
            </button>
          </div>
        </div>

        <Ruler timeSegments={timeSegments} />
      </div>

      {[...Array(groupsCount + 1)].map((_, i) => (
        <Fragment key={i}>
          <AnimationNode timeSegments={timeSegments} keyframes={[1, 3]} />
        </Fragment>
      ))}
    </div>
  );
};

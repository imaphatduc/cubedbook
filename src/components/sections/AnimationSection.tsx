import { Play } from 'phosphor-react';
import { Fragment } from 'react';
import { AnimationNode } from '../nodes/AnimationNode';
import { Ruler } from './components/Ruler';

export const AnimationSection = () => {
  const timeSegments = 6;

  const groupsCount = 1;

  return (
    <div className="grid grid-cols-[16rem_1fr]">
      <>
        <div className="flex justify-center items-center bg-[#222] border-r border-b border-[#444]"></div>
        <div className="bg-[#222] border-b border-[#444]">
          <div className="flex justify-center items-center py-2">
            <button>
              <Play size={20} weight="fill" />
            </button>
          </div>
        </div>
      </>

      <Ruler timeSegments={timeSegments} />

      {[...Array(groupsCount + 1)].map((_, i) => (
        <Fragment key={i}>
          <AnimationNode timeSegments={timeSegments} keyframes={[1, 3]} />
        </Fragment>
      ))}
    </div>
  );
};

import { BottomLeft } from './BottomLeft';
import { TopLeft } from './TopLeft';

export const Left = () => {
  return (
    <div className="grid grid-rows-[2fr_1fr] overflow-hidden">
      <TopLeft />
      <BottomLeft />
    </div>
  );
};

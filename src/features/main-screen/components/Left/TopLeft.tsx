import { SceneSection } from '@/features/scene';

export const TopLeft = () => {
  return (
    <div className="grid grid-cols-[1fr_2fr]">
      <div className="prose my-2 px-5 text-white border-r-2 border-r-gray-500">
        <SceneSection />
      </div>

      <div
        id="cubecubed"
        className="sticky top-0 right-0 bottom-0 left-0 bg-black h-[66.6vh]"
      ></div>
    </div>
  );
};

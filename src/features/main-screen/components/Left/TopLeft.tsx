import { SceneSection } from "@/features/scene";
import { Cubecubed } from "../Cubecubed";

export const TopLeft = () => {
  return (
    <div className="grid grid-cols-[20rem_2fr] h-full">
      <div className="prose py-2 px-5 text-white border-r-2 border-r-gray-500">
        <SceneSection />
      </div>

      <Cubecubed />
    </div>
  );
};

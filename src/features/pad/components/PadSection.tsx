import { useCubed } from "@/contexts";
import { SectionHeader } from "@/features/section";
import { getAnimationPad, getCubiconPad } from "../lib";

export const PadSection = () => {
  const { currentNodeSignature, getCubiconNodeById } = useCubed();

  const currentCubicon = getCubiconNodeById(currentNodeSignature.id);

  return (
    <div>
      <SectionHeader header="Editor" />

      {currentNodeSignature.id &&
        currentNodeSignature.type === "Cubicon" &&
        currentCubicon &&
        getCubiconPad(currentCubicon)}

      {currentNodeSignature.label &&
        currentNodeSignature.type === "Animation" &&
        getAnimationPad(currentNodeSignature.label)}
    </div>
  );
};

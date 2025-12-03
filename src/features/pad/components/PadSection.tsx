import { useCubed } from "@/contexts";
import { SectionHeader } from "@/features/section";
import { getAnimationPad, getCubiconPad } from "../lib";

export const PadSection = () => {
  const { currentNodeSignature, getCubiconNodeById, getAnimationNodeById } =
    useCubed();

  if (currentNodeSignature.type === "Cubicon") {
    const currentCubiconNode = getCubiconNodeById(currentNodeSignature.id);

    return (
      <div>
        <SectionHeader header="Editor" />

        {currentCubiconNode && getCubiconPad(currentCubiconNode)}
      </div>
    );
  }

  if (currentNodeSignature.type === "Animation") {
    const currentAnimationNode = getAnimationNodeById(currentNodeSignature.id);

    return (
      <div>
        <SectionHeader header="Editor" />

        {currentAnimationNode &&
          getAnimationPad(currentNodeSignature.label, currentAnimationNode)}
      </div>
    );
  }
};

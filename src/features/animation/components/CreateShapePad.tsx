import { type ChangeEvent, type FormEvent } from "react";

import { InputField } from "@/features/input-field";
import { CubiconDropField, type ICubiconNode } from "@/features/cubicon";
import { PadLayout, PadOptionLayout } from "@/features/pad";
import { Animation, CreateShape } from "cubecubed";
import type { IAnimationNode } from "../types";
import { useCubed } from "@/contexts";
import { clone } from "@/lib";

interface Props {
  node: IAnimationNode<Animation>;
}

export const CreateShapePad = ({ node }: Props) => {
  const { currentNodeSignature, getCubiconNodeById, updateAnimationNode } =
    useCubed();

  const defaultDuration = 1000;

  const cubiconNode = node.cubiconNodeId
    ? getCubiconNodeById(node.cubiconNodeId)
    : undefined;

  if (currentNodeSignature.type === "Animation") {
    const playAnimation = (e: FormEvent) => {
      e.preventDefault();
    };

    const onCubiconNodeDrop = ({
      cubiconNode: droppedCubiconNode,
    }: {
      cubiconNode: ICubiconNode<any>;
    }) => {
      const newAnimation = new CreateShape({
        cubicon: droppedCubiconNode.cubicon,
        duration: node.animation?.duration ?? defaultDuration,
      });

      updateAnimationNode(
        currentNodeSignature.groupNodeId,
        currentNodeSignature.animationQueueNodeId,
        node.id,
        {
          cubiconNodeId: droppedCubiconNode.id,
          animation: newAnimation,
        }
      );
    };

    const updateDuration = (e: ChangeEvent<HTMLInputElement>) => {
      const updatedAnimation = clone(node.animation);

      updatedAnimation.duration = parseInt(e.target.value);

      updateAnimationNode(
        currentNodeSignature.groupNodeId,
        currentNodeSignature.animationQueueNodeId,
        node.id,
        {
          animation: updatedAnimation,
        }
      );
    };

    return (
      <PadLayout key={node.id} name={node.label} onPadSubmit={playAnimation}>
        <PadOptionLayout label="cubicon">
          <CubiconDropField
            placeholder={cubiconNode?.name ?? ""}
            onDrop={onCubiconNodeDrop}
          />
        </PadOptionLayout>

        <PadOptionLayout label="duration">
          <InputField
            value={node.animation?.duration ?? defaultDuration}
            onChange={updateDuration}
            disabled={node.animation === undefined}
          />
        </PadOptionLayout>
      </PadLayout>
    );
  }
};

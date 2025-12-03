import { type ChangeEvent, type FormEvent } from "react";

import { InputField } from "@/features/input-field";
import { CubiconDropField, type ICubiconNode } from "@/features/cubicon";
import { PadLayout, PadOptionLayout } from "@/features/pad";
import { Animation, CreateShape } from "cubecubed";
import type { IAnimationNode } from "../types";
import { useCubed } from "@/contexts";

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
      updateAnimationNode(
        currentNodeSignature.groupNodeId,
        currentNodeSignature.animationQueueNodeId,
        node.id,
        {
          cubiconNodeId: droppedCubiconNode.id,
          animation: new CreateShape({
            cubicon: droppedCubiconNode.cubicon,
            duration: node.animation?.duration ?? defaultDuration,
          }),
        }
      );
    };

    const updateDuration = (e: ChangeEvent<HTMLInputElement>) => {
      updateAnimationNode(
        currentNodeSignature.groupNodeId,
        currentNodeSignature.animationQueueNodeId,
        node.id,
        {
          animation: {
            ...node.animation,
            duration: parseInt(e.target.value),
          },
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

import { type FormEvent, useRef } from "react";

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

  const durationRef = useRef<HTMLInputElement>(null);

  const cubiconNode = node.cubiconNodeId
    ? getCubiconNodeById(node.cubiconNodeId)
    : undefined;

  const defaultDuration = 1000;

  if (currentNodeSignature.type === "Animation") {
    const playAnimation = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      updateAnimationNode(
        currentNodeSignature.groupNodeId,
        currentNodeSignature.animationQueueNodeId,
        node.id,
        {
          cubiconNodeId: node.cubiconNodeId,
          animation: {
            ...node.animation,
            duration: durationRef.current
              ? parseInt(durationRef.current.value)
              : node.animation?.duration ?? defaultDuration,
          },
        }
      );
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
            duration: durationRef.current
              ? parseInt(durationRef.current.value)
              : defaultDuration,
          }),
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
            defaultValue={node.animation?.duration ?? defaultDuration}
            ref={durationRef}
            disabled={node.animation === undefined}
          />
        </PadOptionLayout>
      </PadLayout>
    );
  }
};

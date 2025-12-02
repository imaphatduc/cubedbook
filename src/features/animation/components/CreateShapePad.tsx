import { type FormEvent, useRef, useState } from "react";

import { InputField } from "@/features/input-field";
import { CubiconDropField, type ICubiconNode } from "@/features/cubicon";
import { PadLayout, PadOptionLayout } from "@/features/pad";

export const CreateShapePad = () => {
  const [cubiconNode, setCubiconNode] = useState<ICubiconNode<any>>();

  const durationRef = useRef<HTMLInputElement>(null);

  const addToQueue = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const onCubiconNodeDrop = ({
    cubiconNode: droppedCubiconNode,
  }: {
    cubiconNode: ICubiconNode<any>;
  }) => {
    setCubiconNode(droppedCubiconNode);

    console.log(droppedCubiconNode);
  };

  return (
    <PadLayout name="create_shape" onPadSubmit={addToQueue}>
      <PadOptionLayout label="cubicon">
        <CubiconDropField
          placeholder={cubiconNode?.name ?? ""}
          onDrop={onCubiconNodeDrop}
        />
      </PadOptionLayout>

      <PadOptionLayout label="duration">
        <InputField defaultValue={1000} ref={durationRef} />
      </PadOptionLayout>
    </PadLayout>
  );
};

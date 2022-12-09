import { FormEvent, useRef, useState } from 'react';

import { CreateShape } from 'cubecubed';

import { InputField } from '../fields/InputField';
import { PadOptionLayout } from './utils/PadOptionLayout';
import { PadLayout } from './utils/PadLayout';
import { IAnimationNode, ICubiconNode } from '../../contexts/CubedContext';
import { DropField } from '../fields/DropField';

export const CreateShapePad = () => {
  const [cubiconNode, setCubiconNode] = useState<ICubiconNode<any>>(null);

  const durationRef = useRef<HTMLInputElement>();

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
        <DropField
          placeholder={cubiconNode?.name ?? ''}
          onDrop={onCubiconNodeDrop}
        />
      </PadOptionLayout>

      <PadOptionLayout label="duration">
        <InputField defaultValue={1000} ref={durationRef} />
      </PadOptionLayout>
    </PadLayout>
  );
};

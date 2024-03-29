import { FormEvent, useRef } from 'react';

import { Square, Vector2 } from 'cubecubed';

import { InputField } from '../fields/InputField';
import { PadOptionLayout } from './utils/PadOptionLayout';
import { PadLayout } from './utils/PadLayout';
import { ICubiconNode } from '../../contexts/CubedContext';
import { InputFieldWithLabel } from '../fields/InputFieldWithLabel';
import { MultipleInputFieldLayout } from './utils/MultipleInputFieldLayout';

interface Props {
  node: ICubiconNode<Square>;
}

export const SquarePad = ({ node: { id, name, cubicon: square } }: Props) => {
  const {
    sideLength,
    CONFIG: { fillColor, fillOpacity, strokeColor, strokeWidth },
  } = square;

  // @ts-ignore
  const position = square.position as Vector2;

  const positionXRef = useRef<HTMLInputElement>();
  const positionYRef = useRef<HTMLInputElement>();

  const sideLengthRef = useRef<HTMLInputElement>();

  const fillColorRef = useRef<HTMLInputElement>();
  const fillOpacityRef = useRef<HTMLInputElement>();
  const strokeColorRef = useRef<HTMLInputElement>();
  const strokeWidthRef = useRef<HTMLInputElement>();

  const render = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // @ts-ignore
    square.position = new Vector2(
      parseInt(positionXRef.current.value),
      parseInt(positionYRef.current.value)
    );

    square.width = parseInt(sideLengthRef.current.value);
    square.height = parseInt(sideLengthRef.current.value);

    square.CONFIG.fillColor = fillColorRef.current.value;
    square.CONFIG.fillOpacity = fillOpacityRef.current.value;
    square.CONFIG.strokeColor = strokeColorRef.current.value;
    square.CONFIG.strokeWidth = strokeWidthRef.current.value;

    square.render();
  };

  return (
    <PadLayout key={id} name={name} onPadSubmit={render}>
      <PadOptionLayout label="position">
        <MultipleInputFieldLayout>
          <InputFieldWithLabel
            label="x"
            defaultValue={position.x}
            ref={positionXRef}
          />
          <InputFieldWithLabel
            label="y"
            defaultValue={position.y}
            ref={positionYRef}
          />
        </MultipleInputFieldLayout>
      </PadOptionLayout>

      <PadOptionLayout label="side_length">
        <InputField defaultValue={sideLength} ref={sideLengthRef} />
      </PadOptionLayout>

      <hr className="border-white opacity-10 pb-2" />
      <PadOptionLayout label="fill_color">
        <InputField defaultValue={fillColor} ref={fillColorRef} />
      </PadOptionLayout>
      <PadOptionLayout label="fill_opacity">
        <InputField defaultValue={fillOpacity} ref={fillOpacityRef} />
      </PadOptionLayout>
      <PadOptionLayout label="stroke_color">
        <InputField defaultValue={strokeColor} ref={strokeColorRef} />
      </PadOptionLayout>
      <PadOptionLayout label="stroke_width">
        <InputField defaultValue={strokeWidth} ref={strokeWidthRef} />
      </PadOptionLayout>
    </PadLayout>
  );
};

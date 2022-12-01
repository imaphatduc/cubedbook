import { FormEvent, useRef } from 'react';

import { Square } from 'cubecubed';

import { InputField } from '../fields/InputField';
import { PadOption } from './utils/PadOption';
import { PadLayout } from './utils/PadLayout';

interface Props {
  name: string;
  square: Square;
}

export const SquarePad = ({ name, square }: Props) => {
  const {
    sideLength,
    CONFIG: { fillColor, fillOpacity, strokeColor, strokeWidth },
  } = square;

  const nameRef = useRef<HTMLInputElement>();
  const sideLengthRef = useRef<HTMLInputElement>();
  const fillColorRef = useRef<HTMLInputElement>();
  const fillOpacityRef = useRef<HTMLInputElement>();
  const strokeColorRef = useRef<HTMLInputElement>();
  const strokeWidthRef = useRef<HTMLInputElement>();

  const render = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    square.width = parseInt(sideLengthRef.current.value);
    square.height = parseInt(sideLengthRef.current.value);

    square.CONFIG.fillColor = fillColorRef.current.value;
    square.CONFIG.fillOpacity = fillOpacityRef.current.value;
    square.CONFIG.strokeColor = strokeColorRef.current.value;
    square.CONFIG.strokeWidth = strokeWidthRef.current.value;

    square.render();
  };

  return (
    <PadLayout onPadSubmit={render}>
      <PadOption label="name">
        <InputField defaultValue={name} ref={nameRef} />
      </PadOption>
      <PadOption label="side_length">
        <InputField defaultValue={sideLength} ref={sideLengthRef} />
      </PadOption>
      <PadOption label="fill_color">
        <InputField defaultValue={fillColor} ref={fillColorRef} />
      </PadOption>
      <PadOption label="fill_opacity">
        <InputField defaultValue={fillOpacity} ref={fillOpacityRef} />
      </PadOption>
      <PadOption label="stroke_color">
        <InputField defaultValue={strokeColor} ref={strokeColorRef} />
      </PadOption>
      <PadOption label="stroke_width">
        <InputField defaultValue={strokeWidth} ref={strokeWidthRef} />
      </PadOption>
    </PadLayout>
  );
};

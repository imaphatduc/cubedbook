import { FormEvent, useRef } from 'react';

import { Rectangle } from 'cubecubed';

import { InputField } from '../fields/InputField';
import { PadOption } from './utils/PadOption';
import { PadLayout } from './utils/PadLayout';

interface Props {
  name: string;
  rectangle: Rectangle;
}

export const RectanglePad = ({ name, rectangle }: Props) => {
  const {
    width,
    height,
    CONFIG: { fillColor, fillOpacity, strokeColor, strokeWidth },
  } = rectangle;

  const widthRef = useRef<HTMLInputElement>();
  const heightRef = useRef<HTMLInputElement>();
  const fillColorRef = useRef<HTMLInputElement>();
  const fillOpacityRef = useRef<HTMLInputElement>();
  const strokeColorRef = useRef<HTMLInputElement>();
  const strokeWidthRef = useRef<HTMLInputElement>();

  const render = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    rectangle.width = parseInt(widthRef.current.value);
    rectangle.height = parseInt(heightRef.current.value);

    rectangle.CONFIG.fillColor = fillColorRef.current.value;
    rectangle.CONFIG.fillOpacity = fillOpacityRef.current.value;
    rectangle.CONFIG.strokeColor = strokeColorRef.current.value;
    rectangle.CONFIG.strokeWidth = strokeWidthRef.current.value;

    rectangle.render();
  };

  return (
    <PadLayout name={name} onPadSubmit={render}>
      <PadOption label="width">
        <InputField defaultValue={width} ref={widthRef} />
      </PadOption>
      <PadOption label="height">
        <InputField defaultValue={height} ref={heightRef} />
      </PadOption>
      <hr className="border-white opacity-10 pb-2" />
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

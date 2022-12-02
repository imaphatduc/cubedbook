import { FormEvent, useRef } from 'react';

import { Circle } from 'cubecubed';

import { InputField } from '../fields/InputField';
import { PadOption } from './utils/PadOption';
import { PadLayout } from './utils/PadLayout';

interface Props {
  name: string;
  circle: Circle;
}

export const CirclePad = ({ name, circle }: Props) => {
  const {
    radius,
    CONFIG: { fillColor, fillOpacity, strokeColor, strokeWidth },
  } = circle;

  const radiusRef = useRef<HTMLInputElement>();
  const fillColorRef = useRef<HTMLInputElement>();
  const fillOpacityRef = useRef<HTMLInputElement>();
  const strokeColorRef = useRef<HTMLInputElement>();
  const strokeWidthRef = useRef<HTMLInputElement>();

  const render = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    circle.radius = parseInt(radiusRef.current.value);

    circle.CONFIG.fillColor = fillColorRef.current.value;
    circle.CONFIG.fillOpacity = fillOpacityRef.current.value;
    circle.CONFIG.strokeColor = strokeColorRef.current.value;
    circle.CONFIG.strokeWidth = strokeWidthRef.current.value;

    circle.render();
  };

  return (
    <PadLayout name={name} onPadSubmit={render}>
      <PadOption label="radius">
        <InputField defaultValue={radius} ref={radiusRef} />
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

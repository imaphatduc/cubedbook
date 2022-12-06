import { FormEvent, useRef } from 'react';

import { Circle, Vector2 } from 'cubecubed';

import { InputField } from '../fields/InputField';
import { PadOption } from './utils/PadOption';
import { PadLayout } from './utils/PadLayout';
import { ICubiconNode } from '../../contexts/CubedContext';
import { InputFieldWithLabel } from '../fields/InputFieldWithLabel';
import { MultipleInputFieldLayout } from './utils/MultipleInputFieldLayout';

interface Props {
  node: ICubiconNode<Circle>;
}

export const CirclePad = ({ node: { id, name, cubicon: circle } }: Props) => {
  const {
    radius,
    CONFIG: { fillColor, fillOpacity, strokeColor, strokeWidth },
  } = circle;

  // @ts-ignore
  const position = circle.position as Vector2;

  const positionXRef = useRef<HTMLInputElement>();
  const positionYRef = useRef<HTMLInputElement>();

  const radiusRef = useRef<HTMLInputElement>();

  const fillColorRef = useRef<HTMLInputElement>();
  const fillOpacityRef = useRef<HTMLInputElement>();
  const strokeColorRef = useRef<HTMLInputElement>();
  const strokeWidthRef = useRef<HTMLInputElement>();

  const render = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // @ts-ignore
    circle.position = new Vector2(
      parseInt(positionXRef.current.value),
      parseInt(positionYRef.current.value)
    );

    circle.radius = parseInt(radiusRef.current.value);

    circle.CONFIG.fillColor = fillColorRef.current.value;
    circle.CONFIG.fillOpacity = fillOpacityRef.current.value;
    circle.CONFIG.strokeColor = strokeColorRef.current.value;
    circle.CONFIG.strokeWidth = strokeWidthRef.current.value;

    circle.render();
  };

  return (
    <PadLayout key={id} name={name} onPadSubmit={render}>
      <PadOption label="position">
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
      </PadOption>

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

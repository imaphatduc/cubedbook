import { type FormEvent, useRef } from "react";

import { Circle, Vector2 } from "cubecubed";

import { InputField } from "@/features/input-field";
import { type ICubiconNode } from "../types";
import { PadLayout, PadOptionLayout } from "@/features/pad";
import {
  InputFieldWithLabel,
  MultipleInputFieldLayout,
} from "@/features/input-field";

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

  const positionXRef = useRef<HTMLInputElement>(null);
  const positionYRef = useRef<HTMLInputElement>(null);

  const radiusRef = useRef<HTMLInputElement>(null);

  const fillColorRef = useRef<HTMLInputElement>(null);
  const fillOpacityRef = useRef<HTMLInputElement>(null);
  const strokeColorRef = useRef<HTMLInputElement>(null);
  const strokeWidthRef = useRef<HTMLInputElement>(null);

  const render = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (positionXRef.current && positionYRef.current) {
      // @ts-ignore
      circle.position = new Vector2(
        parseInt(positionXRef.current.value),
        parseInt(positionYRef.current.value)
      );
    }

    if (radiusRef.current) {
      circle.radius = parseInt(radiusRef.current.value);
    }

    if (fillColorRef.current) {
      circle.CONFIG.fillColor = fillColorRef.current.value;
    }

    if (fillOpacityRef.current) {
      circle.CONFIG.fillOpacity = fillOpacityRef.current.value;
    }

    if (strokeColorRef.current) {
      circle.CONFIG.strokeColor = strokeColorRef.current.value;
    }

    if (strokeWidthRef.current) {
      circle.CONFIG.strokeWidth = strokeWidthRef.current.value;
    }

    circle.render();
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

      <PadOptionLayout label="radius">
        <InputField defaultValue={radius} ref={radiusRef} />
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

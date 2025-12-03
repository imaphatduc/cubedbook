import { type FormEvent, useRef } from "react";

import { Rectangle, Vector2 } from "cubecubed";

import { InputField } from "@/features/input-field";
import { type ICubiconNode } from "../types";
import { PadLayout, PadOptionLayout } from "@/features/pad";
import {
  InputFieldWithLabel,
  MultipleInputFieldLayout,
} from "@/features/input-field";

interface Props {
  node: ICubiconNode<Rectangle>;
}

export const RectanglePad = ({
  node: { id, name, cubicon: rectangle },
}: Props) => {
  const {
    width,
    height,
    CONFIG: { fillColor, fillOpacity, strokeColor, strokeWidth },
  } = rectangle;

  // @ts-expect-error
  const position = rectangle.position as Vector2;

  const positionXRef = useRef<HTMLInputElement>(null);
  const positionYRef = useRef<HTMLInputElement>(null);

  const widthRef = useRef<HTMLInputElement>(null);
  const heightRef = useRef<HTMLInputElement>(null);

  const fillColorRef = useRef<HTMLInputElement>(null);
  const fillOpacityRef = useRef<HTMLInputElement>(null);
  const strokeColorRef = useRef<HTMLInputElement>(null);
  const strokeWidthRef = useRef<HTMLInputElement>(null);

  const render = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (positionXRef.current && positionYRef.current) {
      // @ts-expect-error
      rectangle.position = new Vector2(
        parseInt(positionXRef.current.value),
        parseInt(positionYRef.current.value)
      );
    }

    if (widthRef.current) {
      rectangle.width = parseInt(widthRef.current.value);
    }

    if (heightRef.current) {
      rectangle.height = parseInt(heightRef.current.value);
    }

    if (
      fillColorRef.current &&
      fillOpacityRef.current &&
      strokeColorRef.current &&
      strokeWidthRef.current
    ) {
      rectangle.CONFIG.fillColor = fillColorRef.current.value;
      rectangle.CONFIG.fillOpacity = fillOpacityRef.current.value;
      rectangle.CONFIG.strokeColor = strokeColorRef.current.value;
      rectangle.CONFIG.strokeWidth = strokeWidthRef.current.value;
    }

    rectangle.render();
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

      <PadOptionLayout label="width">
        <InputField defaultValue={width} ref={widthRef} />
      </PadOptionLayout>
      <PadOptionLayout label="height">
        <InputField defaultValue={height} ref={heightRef} />
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

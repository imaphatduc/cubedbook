import { FormEvent, useRef } from 'react';

import { CreateShape, Vector2 } from 'cubecubed';

import { InputField } from '../fields/InputField';
import { PadOptionLayout } from './utils/PadOptionLayout';
import { PadLayout } from './utils/PadLayout';
import { IAnimationNode } from '../../contexts/CubedContext';
import { InputFieldWithLabel } from '../fields/InputFieldWithLabel';
import { MultipleInputFieldLayout } from './utils/MultipleInputFieldLayout';

export const CreateShapePad = () => {
  const cubiconRef = useRef<HTMLInputElement>();
  const durationRef = useRef<HTMLInputElement>();

  const render = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return <PadLayout name="create_shape" onPadSubmit={render}></PadLayout>;
};

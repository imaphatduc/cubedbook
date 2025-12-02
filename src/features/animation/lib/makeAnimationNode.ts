import { v4 as uuid } from "uuid";
import { Animation } from "cubecubed";
import { type IAnimationNode } from "../types";

export const makeAnimationNode = <IAnimation extends Animation>(
  label: string,
  cubiconNodeId: string,
  animation: IAnimation
) => {
  const animationNode: IAnimationNode<IAnimation> = {
    id: uuid(),
    label,
    cubiconNodeId,
    animation,
  };

  return animationNode;
};

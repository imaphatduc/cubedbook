import type { Animation } from "cubecubed";

export interface IAnimationNode<IAnimation extends Animation> {
  id: string;
  label: string;
  animation?: IAnimation;
  cubiconNodeId?: string;
}

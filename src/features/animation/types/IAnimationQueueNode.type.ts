import type { Animation } from "cubecubed";
import { type IAnimationNode } from "./IAnimationNode.type";

export interface IAnimationQueueNode<IAnimation extends Animation> {
  id: string;
  startTime: number;
  animationNodes: IAnimationNode<IAnimation>[];
}

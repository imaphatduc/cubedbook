import { type IAnimationNode } from "./IAnimationNode.type";

export interface IAnimationQueueNode<IAnimation> {
  start: number;
  animations: IAnimationNode<IAnimation>[];
}

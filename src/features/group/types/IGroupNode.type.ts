import { Animation, Cubicon, Group } from "cubecubed";
import { type ICubiconNode } from "@/features/cubicon";
import { type IAnimationQueueNode } from "@/features/animation";

export interface IGroupNode {
  id: string;
  type?: "2d";
  group: Group;
  cubiconNodes: ICubiconNode<Cubicon>[];
  animationQueueNodes: IAnimationQueueNode<Animation>[];
}

import { CreateShapePad, type IAnimationNode } from "@/features/animation";

export const getAnimationPad = (
  label: string,
  animationNode: IAnimationNode<any>
) => {
  switch (label) {
    case "Create Shape": {
      return <CreateShapePad node={animationNode} />;
    }

    default:
      return <></>;
  }
};

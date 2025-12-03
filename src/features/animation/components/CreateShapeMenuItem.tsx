import { useCubed } from "@/contexts";
import { CtxMenuItem } from "@/features/menu";
import { CreateShape } from "cubecubed";

interface Props {
  groupNodeId: string;
  animationQueueNodeId: string;
}

export const CreateShapeMenuItem = ({
  groupNodeId,
  animationQueueNodeId,
}: Props) => {
  const { setCurrentNodeSignature, addAnimationNodeToQueue } = useCubed();

  const label = "Create Shape";

  const addAnimation = () => {
    // @ts-expect-error
    const animationNode = addAnimationNodeToQueue<CreateShape>(
      groupNodeId,
      animationQueueNodeId,
      label
    );

    setCurrentNodeSignature({
      type: "Animation",
      id: animationNode.id,
      label: animationNode.label,
      groupNodeId,
      animationQueueNodeId,
    });
  };

  return <CtxMenuItem label="Create Shape" onClick={addAnimation} />;
};

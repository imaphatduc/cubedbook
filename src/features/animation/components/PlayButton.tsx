import { useCubed } from "@/contexts";
import { Play } from "phosphor-react";

export const PlayButton = () => {
  const { scene, groupNodes } = useCubed();

  const play = () => {
    const animationQueues = groupNodes
      .map((groupNode) => groupNode.animationQueueNodes)
      .flat()
      .sort((a, b) => a.startTime - b.startTime);

    animationQueues.forEach((queue) => {
      scene.play(
        queue.animationNodes
          .map((node) => {
            if (node.animation) {
              node.animation.sleepTime = queue.startTime;
            }

            return node.animation;
          })
          .filter((animation) => !!animation)
      );
    });
  };

  return (
    <button onClick={play}>
      <Play size={20} weight="fill" />
    </button>
  );
};

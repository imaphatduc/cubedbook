export type NodeSignature =
  | {
      id: string;
      type: "Cubicon";
      groupNodeId: string;
    }
  | {
      id: string;
      type: "Animation";
      label: string;
      groupNodeId: string;
      animationQueueNodeId: string;
    }
  | {
      id: "";
      type: "";
    };

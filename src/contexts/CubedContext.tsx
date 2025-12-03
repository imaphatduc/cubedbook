import {
  createContext,
  type FC,
  type PropsWithChildren,
  useContext,
  useState,
} from "react";

import { Animation, Cubicon, Scene } from "cubecubed";

import { type NodeSignature } from "@/features/scene";

import { type IGroupNode, addGroupNode } from "@/features/group";

import {
  type ICubiconNode,
  getCubiconNodeById,
  addCubiconNode,
  updateCubiconNode,
  removeCubiconNode,
} from "@/features/cubicon";

import {
  type IAnimationQueueNode,
  type IAnimationNode,
  addAnimationQueue,
  updateAnimationQueueNode,
  getAnimationNodeById,
  addAnimationNodeToQueue,
  updateAnimationNode,
} from "@/features/animation";

interface ContextValue {
  // SCENE
  scene: Scene;
  currentNodeSignature: NodeSignature;
  setCurrentNodeSignature: (d: NodeSignature) => void;

  // GROUP
  groupNodes: IGroupNode[];
  addGroupNode: (name: string, type: "2d" | "3d") => void;

  // CUBICON
  getCubiconNodeById: (
    cubiconNodeId: string
  ) => ICubiconNode<Cubicon> | undefined;

  addCubiconNode: <ICubicon extends Cubicon>(
    groupNodeId: string,
    name: string,
    label: string,
    cubicon: ICubicon
  ) => ICubiconNode<ICubicon>;

  updateCubiconNode: (
    groupNodeId: string,
    cubiconNodeId: string,
    data: Partial<ICubiconNode<any>>
  ) => void;

  removeCubiconNode: (groupNodeId: string, cubiconNodeId: string) => void;

  // ANIMATION QUEUE
  addAnimationQueue: (groupNodeId: string, startTime: number) => void;

  updateAnimationQueueNode: (
    groupNodeId: string,
    animationQueueId: string,
    data: Partial<IAnimationQueueNode<any>>
  ) => void;

  // ANIMATION
  getAnimationNodeById: (
    animationNodeId: string
  ) => IAnimationNode<Animation> | undefined;

  addAnimationNodeToQueue: <IAnimation extends Animation>(
    groupNodeId: string,
    animationQueueId: string,
    label: string
  ) => IAnimationNode<IAnimation>;

  updateAnimationNode: (
    groupNodeId: string,
    animationQueueId: string,
    animationNodeId: string,
    data: Partial<IAnimationNode<any>>
  ) => void;
}

const CubedContext = createContext<ContextValue>(null);

export const useCubed = () => useContext(CubedContext);

export const CubedProvider: FC<PropsWithChildren> = ({ children }) => {
  const scene = new Scene("simpleScene");

  const [groupNodes, setGroupNodes] = useState<IGroupNode[]>([]);

  const [currentNodeSignature, setCurrentNodeSignature] =
    useState<NodeSignature>({
      id: "",
      type: "",
    });

  return (
    <CubedContext.Provider
      value={{
        // SCENE
        scene,
        currentNodeSignature,
        setCurrentNodeSignature,

        // GROUP
        groupNodes,

        addGroupNode: (name, type) =>
          addGroupNode(name, type, scene, groupNodes, setGroupNodes),

        // CUBICON

        getCubiconNodeById: (cubiconNodeId) =>
          getCubiconNodeById(cubiconNodeId, groupNodes),

        addCubiconNode: (groupNodeId, name, label, cubicon) =>
          addCubiconNode(
            groupNodeId,
            name,
            label,
            cubicon,
            groupNodes,
            setGroupNodes
          ),

        updateCubiconNode: (groupNodeId, cubiconNodeId, data) =>
          updateCubiconNode(
            groupNodeId,
            cubiconNodeId,
            data,
            groupNodes,
            setGroupNodes
          ),

        removeCubiconNode: (groupNodeId, cubiconNodeId) =>
          removeCubiconNode(
            groupNodeId,
            cubiconNodeId,
            groupNodes,
            setGroupNodes
          ),

        // ANIMATION QUEUE
        addAnimationQueue: (groupNodeId, startTime) =>
          addAnimationQueue(groupNodeId, startTime, groupNodes, setGroupNodes),

        updateAnimationQueueNode: (groupNodeId, animationQueueId, data) =>
          updateAnimationQueueNode(
            groupNodeId,
            animationQueueId,
            data,
            groupNodes,
            setGroupNodes
          ),

        // ANIMATION
        getAnimationNodeById: (animationNodeId) =>
          getAnimationNodeById(animationNodeId, groupNodes),

        addAnimationNodeToQueue: (groupNodeId, animationQueueId, label) =>
          addAnimationNodeToQueue(
            groupNodeId,
            animationQueueId,
            label,
            groupNodes,
            setGroupNodes
          ),

        updateAnimationNode: (
          groupNodeId,
          animationQueueId,
          animationNodeId,
          data
        ) =>
          updateAnimationNode(
            groupNodeId,
            animationQueueId,
            animationNodeId,
            data,
            groupNodes,
            setGroupNodes
          ),
      }}
    >
      {children}
    </CubedContext.Provider>
  );
};

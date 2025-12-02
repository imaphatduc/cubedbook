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
  renameCubiconNode,
  removeCubiconNode,
} from "@/features/cubicon";

import {
  type IAnimationNode,
  type IAnimationQueueNode,
  getAnimationNodeById,
  makeAnimationNode,
  addAnimationQueue,
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

  renameCubiconNode: (
    groupNodeId: string,
    cubiconNodeId: string,
    newName: string
  ) => void;

  removeCubiconNode: (groupNodeId: string, cubiconNodeId: string) => void;

  // ANIMATION
  getAnimationNodeById: (
    animationNodeId: string
  ) => IAnimationNode<Animation> | undefined;

  makeAnimationNode: <IAnimation extends Animation>(
    label: string,
    cubiconNodeId: string,
    animation: IAnimation
  ) => IAnimationNode<IAnimation>;

  addAnimationQueue: <IAnimation extends Animation>(
    groupNodeId: string,
    animationQueueNode: IAnimationQueueNode<IAnimation>
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
      label: "",
      type: "",
    });

  return (
    <CubedContext.Provider
      value={{
        scene,
        currentNodeSignature,
        setCurrentNodeSignature,

        groupNodes,

        addGroupNode: (name: string, type: "2d" | "3d") =>
          addGroupNode(name, type, scene, groupNodes, setGroupNodes),

        getCubiconNodeById: (cubiconNodeId: string) =>
          getCubiconNodeById(cubiconNodeId, groupNodes),

        addCubiconNode: <ICubicon extends Cubicon>(
          groupNodeId: string,
          name: string,
          label: string,
          cubicon: ICubicon
        ) =>
          addCubiconNode(
            groupNodeId,
            name,
            label,
            cubicon,
            groupNodes,
            setGroupNodes
          ),

        renameCubiconNode: (
          groupNodeId: string,
          cubiconNodeId: string,
          newName: string
        ) =>
          renameCubiconNode(
            groupNodeId,
            cubiconNodeId,
            newName,
            groupNodes,
            setGroupNodes
          ),

        removeCubiconNode: (groupNodeId: string, cubiconNodeId: string) =>
          removeCubiconNode(
            groupNodeId,
            cubiconNodeId,
            groupNodes,
            setGroupNodes
          ),

        makeAnimationNode: <IAnimation extends Animation>(
          label: string,
          cubiconNodeId: string,
          animation: IAnimation
        ) => makeAnimationNode(label, cubiconNodeId, animation),

        getAnimationNodeById: (animationNodeId: string) =>
          getAnimationNodeById(animationNodeId, groupNodes),

        addAnimationQueue: <IAnimation extends Animation>(
          groupNodeId: string,
          animationQueueNode: IAnimationQueueNode<IAnimation>
        ) =>
          addAnimationQueue(
            groupNodeId,
            animationQueueNode,
            groupNodes,
            setGroupNodes
          ),
      }}
    >
      {children}
    </CubedContext.Provider>
  );
};

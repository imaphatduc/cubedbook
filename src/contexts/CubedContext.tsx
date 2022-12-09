import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';

import { Animation, Cubicon, Group, Scene } from 'cubecubed';

import { v4 as uuid } from 'uuid';

export interface ICubiconNode<ICubicon> {
  id: string;
  name: string;
  label: string;
  cubicon: ICubicon;
}

export interface IAnimationNode<IAnimation> {
  id: string;
  label: string;
  animation: IAnimation;
  cubiconNodeId: string;
}

export interface IAnimationQueueNode<IAnimation> {
  start: number;
  queues: IAnimationNode<IAnimation>[];
}

export interface IGroupNode {
  id: string;
  type?: '2d';
  group: Group;
  cubiconNodes: ICubiconNode<Cubicon>[];
  animationQueueNodes: IAnimationQueueNode<Animation>[];
}

interface ContextValue {
  scene: Scene;
  groupNodes: IGroupNode[];
  addGroupNode: (name: string, type: '2d' | '3d') => void;
  addCubiconNode: <ICubicon extends Cubicon>(
    groupNodeId: string,
    name: string,
    label: string,
    cubicon: ICubicon
  ) => ICubiconNode<ICubicon>;
  getCubiconNodeById: (cubiconNodeId: string) => ICubiconNode<Cubicon>;
  renameCubiconNode: (
    groupNodeId: string,
    cubiconNodeId: string,
    newName: string
  ) => void;
  removeCubiconNode: (groupNodeId: string, cubiconNodeId: string) => void;
  makeAnimationNode: <IAnimation extends Animation>(
    label: string,
    cubiconNodeId: string,
    animation: IAnimation
  ) => IAnimationNode<IAnimation>;
  addAnimationQueue: <IAnimation extends Animation>(
    groupNodeId: string,
    animationQueueNode: IAnimationQueueNode<IAnimation>
  ) => void;
  getAnimationNodeById: (animationNodeId: string) => IAnimationNode<Animation>;
}

const CubedContext = createContext<ContextValue>(null);

export const useCubed = () => useContext(CubedContext);

export const CubedProvider: FC<PropsWithChildren> = ({ children }) => {
  const scene = new Scene('simpleScene');

  const [groupNodes, setGroupNodes] = useState<IGroupNode[]>([]);

  const addGroupNode = (name: string, type: '2d' | '3d') => {
    if (type === '2d') {
      const groupNode: IGroupNode = {
        id: uuid(),
        type,
        group: new Group(name, scene),
        cubiconNodes: [],
        animationQueueNodes: [],
      };

      setGroupNodes([...groupNodes, groupNode]);
    }
  };

  const addCubiconNode = <ICubicon extends Cubicon>(
    groupNodeId: string,
    name: string,
    label: string,
    cubicon: ICubicon
  ) => {
    const cubiconNode: ICubiconNode<ICubicon> = {
      id: uuid(),
      name,
      label,
      cubicon,
    };

    setGroupNodes(
      groupNodes.map((groupNode) => {
        if (groupNode.id === groupNodeId) {
          groupNode.cubiconNodes = [...groupNode.cubiconNodes, cubiconNode];
        }

        return groupNode;
      })
    );

    return cubiconNode;
  };

  const getCubiconNodeById = (cubiconNodeId: string) => {
    const cubiconNode = groupNodes
      .map((groupNode) => groupNode.cubiconNodes)
      .flat()
      .find((cubiconNode) => cubiconNode.id === cubiconNodeId);

    return cubiconNode;
  };

  const renameCubiconNode = (
    groupNodeId: string,
    cubiconNodeId: string,
    newName: string
  ) => {
    setGroupNodes(
      groupNodes.map((groupNode) => {
        if (groupNode.id === groupNodeId) {
          groupNode.cubiconNodes = groupNode.cubiconNodes.map((cubiconNode) => {
            if (cubiconNode.id === cubiconNodeId) {
              cubiconNode.name = newName;
            }

            return cubiconNode;
          });
        }

        return groupNode;
      })
    );
  };

  const removeCubiconNode = (groupNodeId: string, cubiconNodeId: string) => {
    setGroupNodes(
      groupNodes.map((groupNode) => {
        if (groupNode.id === groupNodeId) {
          groupNode.cubiconNodes = groupNode.cubiconNodes.filter(
            (cubiconNode) => cubiconNode.id !== cubiconNodeId
          );
        }

        return groupNode;
      })
    );
  };

  const makeAnimationNode = <IAnimation extends Animation>(
    label: string,
    cubiconNodeId: string,
    animation: IAnimation
  ) => {
    const animationNode: IAnimationNode<IAnimation> = {
      id: uuid(),
      label,
      cubiconNodeId,
      animation,
    };

    return animationNode;
  };

  const addAnimationQueue = <IAnimation extends Animation>(
    groupNodeId: string,
    animationQueueNode: IAnimationQueueNode<IAnimation>
  ) => {
    setGroupNodes(
      groupNodes.map((groupNode) => {
        if (groupNode.id === groupNodeId) {
          groupNode.animationQueueNodes = [
            ...groupNode.animationQueueNodes,
            animationQueueNode,
          ];
        }

        return groupNode;
      })
    );
  };

  const getAnimationNodeById = (animationNodeId: string) => {
    const animationNode = groupNodes
      .map((groupNode) =>
        groupNode.animationQueueNodes.map(
          (animationQueueNode) => animationQueueNode.queues
        )
      )
      .flat(2)
      .find((animationNode) => animationNode.id === animationNodeId);

    return animationNode;
  };

  return (
    <CubedContext.Provider
      value={{
        scene,
        groupNodes,
        addGroupNode,
        addCubiconNode,
        getCubiconNodeById,
        renameCubiconNode,
        removeCubiconNode,
        makeAnimationNode,
        addAnimationQueue,
        getAnimationNodeById,
      }}
    >
      {children}
    </CubedContext.Provider>
  );
};

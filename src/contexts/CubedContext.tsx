import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';

import { Cubicon, Group, Scene } from 'cubecubed';

import { v4 as uuid } from 'uuid';

export interface ICubiconNode<ICubicon> {
  id: string;
  name: string;
  label: string;
  cubicon: ICubicon;
}

export interface IGroupNode {
  id: string;
  type?: '2d';
  group: Group;
  cubiconNodes: ICubiconNode<Cubicon>[];
}

interface ContextValue {
  scene: Scene;
  groupNodes: IGroupNode[];
  addGroupNode: (name: string, type: '2d' | '3d') => void;
  addCubiconNode: (
    groupNodeId: string,
    name: string,
    label: string,
    cubicon: Cubicon
  ) => void;
  getCubiconNodeById: (cubiconNodeId: string) => ICubiconNode<Cubicon>;
  renameCubiconNode: (
    groupNodeId: string,
    cubiconNodeId: string,
    newName: string
  ) => void;
  removeCubiconNode: (groupNodeId: string, cubiconNodeId: string) => void;
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
      };

      setGroupNodes([...groupNodes, groupNode]);
    }
  };

  const addCubiconNode = (
    groupNodeId: string,
    name: string,
    label: string,
    cubicon: Cubicon
  ) => {
    const cubiconNode = {
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
      }}
    >
      {children}
    </CubedContext.Provider>
  );
};

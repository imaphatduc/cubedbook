import {
  createContext,
  FC,
  PropsWithChildren,
  ReactNode,
  useContext,
  useState,
} from 'react';

import { Cubicon, Group, Scene } from 'cubecubed';

import { v4 as uuid } from 'uuid';

export interface ICubiconNode {
  id: string;
  name: string;
  cubicon: Cubicon;
  pad: ReactNode;
}

export interface IGroupNode {
  id: string;
  type?: '2d';
  group: Group;
  cubiconNodes: ICubiconNode[];
}

interface ContextValue {
  scene: Scene;
  groupNodes: IGroupNode[];
  addGroupNode: (name: string, type: '2d' | '3d') => void;
  addCubiconNode: (
    groupNodeId: string,
    name: string,
    cubicon: Cubicon,
    pad: ReactNode
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
    cubicon: Cubicon,
    pad: ReactNode
  ) => {
    const cubiconNode = {
      id: uuid(),
      name,
      cubicon,
      pad,
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
        removeCubiconNode,
      }}
    >
      {children}
    </CubedContext.Provider>
  );
};

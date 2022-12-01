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
  addGroup: (name: string, type: '2d' | '3d') => void;
  addCubicon: (
    groupNodeId: string,
    name: string,
    cubicon: Cubicon,
    pad: ReactNode
  ) => void;
}

const CubedContext = createContext<ContextValue>(null);

export const useCubed = () => useContext(CubedContext);

export const CubedProvider: FC<PropsWithChildren> = ({ children }) => {
  const scene = new Scene('simpleScene');

  const [groupNodes, setGroupNodes] = useState<IGroupNode[]>([]);

  const addGroup = (name: string, type: '2d' | '3d') => {
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

  const addCubicon = (
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
      groupNodes.map((node) => {
        if (node.id === groupNodeId) {
          node.cubiconNodes.push(cubiconNode);
        }

        return node;
      })
    );
  };

  return (
    <CubedContext.Provider value={{ scene, groupNodes, addGroup, addCubicon }}>
      {children}
    </CubedContext.Provider>
  );
};

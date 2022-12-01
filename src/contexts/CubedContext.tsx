import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';

import { Cubicon, Group, Scene } from 'cubecubed';

export interface ICubiconNode {
  name: string;
  cubicon: Cubicon;
}

export interface IGroupNode {
  type?: '2d';
  group: Group;
  cubiconNodes: ICubiconNode[];
}

interface ContextValue {
  scene: Scene;
  groupNodes: IGroupNode[];
  addGroup: (name: string, type: '2d' | '3d') => void;
}

const CubedContext = createContext<ContextValue>(null);

export const useCubed = () => useContext(CubedContext);

export const CubedProvider: FC<PropsWithChildren> = ({ children }) => {
  const scene = new Scene('simpleScene');

  const [groupNodes, setGroupNodes] = useState<IGroupNode[]>([]);

  const addGroup = (name: string, type: '2d' | '3d') => {
    if (type === '2d') {
      const groupNode: IGroupNode = {
        type,
        group: new Group(name, scene),
        cubiconNodes: [],
      };

      setGroupNodes([...groupNodes, groupNode]);
    }
  };

  return (
    <CubedContext.Provider value={{ scene, groupNodes, addGroup }}>
      {children}
    </CubedContext.Provider>
  );
};

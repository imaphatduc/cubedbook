import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';

export interface CubedNode {
  id: string;
  name: string;
  type: string;
  object: any;
  pad: JSX.Element;
}

type PutNode = (nodeId: string, newData: any) => CubedNode;

interface ContextValue {
  nodes: CubedNode[];
  addNode: (newNode: CubedNode) => void;
  putNode: PutNode;
}

const NodesContext = createContext<ContextValue>({
  nodes: [],
  addNode: () => {},
  putNode: () => ({} as CubedNode),
});

export const useNodes = () => useContext(NodesContext);

export const NodesProvider: FC<PropsWithChildren> = ({ children }) => {
  const [nodes, setNodes] = useState<CubedNode[]>([]);

  const addNode = (newNode: CubedNode) => {
    setNodes([...nodes, newNode]);
  };

  const putNode: PutNode = (nodeId, newData) => {
    const newNodes = nodes.map((node) => {
      if (node.id === nodeId) {
        if (newData.name) {
          node.name = newData.name;
        }

        if (newData.object) {
          Object.keys(newData.object).forEach((key) => {
            node.object[key] = newData.object[key];
          });
        }
      }

      return node;
    });

    setNodes(newNodes);

    return nodes.filter((node) => node.id === nodeId)[0];
  };

  return (
    <NodesContext.Provider
      value={{
        nodes: nodes,
        addNode: addNode,
        putNode: putNode,
      }}
    >
      {children}
    </NodesContext.Provider>
  );
};

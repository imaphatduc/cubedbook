import { FC, useState } from 'react';
import { useDrop } from 'react-dnd';

import { CubedNode, useNodes } from '../contexts/NodesContext';

interface InputProps {
  cubiconNodeId: string;
  setCubiconNodeId: (id: string) => void;
}

const DropInput: FC<InputProps> = ({ cubiconNodeId, setCubiconNodeId }) => {
  const { nodes } = useNodes();

  const cubiconNode = nodes.filter((node) => node.id === cubiconNodeId)[0];

  const [cubiconName, setCubiconName] = useState(cubiconNode?.name ?? '');

  const nodesId = nodes.map((node) => node.id);

  const [{}, drop] = useDrop(
    () => ({
      accept: nodesId,
      drop: (item: { node: CubedNode }) => {
        setCubiconName(item.node.name);
        setCubiconNodeId(item.node.id);
      },
      collect: () => ({}),
    }),
    []
  );

  return (
    <>
      <input
        ref={drop}
        value={cubiconName}
        disabled
        style={{ maxWidth: 100 }}
      />
    </>
  );
};

export default DropInput;

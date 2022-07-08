import { FC, useState } from 'react';
import { useDrop } from 'react-dnd';

import { CubedNode, useNodes } from '../contexts/NodesContext';

interface InputProps {
  setCubiconNodeId: (id: string) => void;
}

const DropInput: FC<InputProps> = ({ setCubiconNodeId }) => {
  const [cubiconName, setCubiconName] = useState('');

  const { nodes } = useNodes();

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

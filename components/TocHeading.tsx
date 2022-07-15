import { FC } from 'react';
import { Button } from 'react-bootstrap';
import { useDrag } from 'react-dnd';

import { CubedNode } from '../contexts/NodesContext';

interface Props {
  node: CubedNode;
  handler: (node: CubedNode) => void;
}

const TocHeading: FC<Props> = ({ node, handler }) => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: node.id,
      item: () => ({
        node: node,
      }),
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    []
  );

  const opacity = isDragging ? 0.4 : 1;

  return (
    <Button
      ref={drag}
      className={`w-100 mb-2 ${
        node.object.cubiconType ? 'btn-cubicon' : 'btn-animation'
      }`}
      onClick={() => handler(node)}
      style={{ opacity }}
    >
      {node.name}: {node.type}
    </Button>
  );
};

export default TocHeading;

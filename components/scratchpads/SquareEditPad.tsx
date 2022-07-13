import { FC } from 'react';
import { Button } from 'react-bootstrap';
import { BsFillPencilFill } from 'react-icons/bs';

import { SHAPE_CONFIG } from 'cubecubed';

import { useNodes } from '../../contexts/NodesContext';

interface Props {
  nodeId: string;

  name: string;
  sideLength: number;
  CONFIG: SHAPE_CONFIG;
}

const SquareEditPad: FC<Props> = ({ nodeId, name, sideLength, CONFIG }) => {
  const { putNode } = useNodes();

  const handleEditNode = () => {
    const updatedNode = putNode(nodeId, {
      name: name,
      object: {
        width: sideLength,
        height: sideLength,
        CONFIG: CONFIG,
      },
    });

    updatedNode.object.render();
  };

  return (
    <Button onClick={handleEditNode}>
      <BsFillPencilFill />
    </Button>
  );
};

export default SquareEditPad;

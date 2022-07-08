import { FC } from 'react';
import { Button } from 'react-bootstrap';
import { BsFillPlayFill } from 'react-icons/bs';

import { useCubed } from '../../contexts/CubedContext';
import { useNodes } from '../../contexts/NodesContext';

interface Props {
  nodeId: string;
  cubiconNodeId: string;

  duration: number;
}

const CreateEditPad: FC<Props> = ({ nodeId, cubiconNodeId, duration }) => {
  const { group } = useCubed();
  const { nodes, putNode } = useNodes();

  const handleEditNode = () => {
    if (cubiconNodeId) {
      const cubicon = nodes.filter((node) => node.id === cubiconNodeId)[0]
        .object;

      const updatedNode = putNode(nodeId, {
        object: {
          cubicon: cubicon,
          duration: duration,
        },
      });

      group!.play([updatedNode.object]);
    }
  };

  return (
    <Button onClick={handleEditNode}>
      <BsFillPlayFill />
    </Button>
  );
};

export default CreateEditPad;

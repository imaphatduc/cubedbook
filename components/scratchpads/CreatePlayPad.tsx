import { FC, useId } from 'react';
import { Button } from 'react-bootstrap';
import { BsFillPlayFill } from 'react-icons/bs';

import { useCubed } from '../../contexts/CubedContext';
import { useNodes } from '../../contexts/NodesContext';

interface Props {
  cubiconNodeId: string;
  duration: number;

  setCurrentPad: (currentPad: JSX.Element) => void;
}

const CreatePlayPad: FC<Props> = ({
  cubiconNodeId,
  duration,
  setCurrentPad,
}) => {
  const id = useId();

  const { cubed, group } = useCubed();
  const { nodes, addNode } = useNodes();

  const handleCreateNode = () => {
    const cubicon = nodes.filter((node) => node.id === cubiconNodeId)[0].object;

    const newNode = {
      id: id,
      name: 'anim-create',
      object: new cubed!.Create({
        cubicon: cubicon,
        duration: duration,
      }),
    };

    group!.play([newNode.object]);

    addNode(newNode);

    setCurrentPad(<></>);
  };

  return (
    <Button onClick={handleCreateNode}>
      <BsFillPlayFill />
    </Button>
  );
};

export default CreatePlayPad;

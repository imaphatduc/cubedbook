import { FC, useId } from 'react';
import { Button } from 'react-bootstrap';
import { BsFillPlayFill } from 'react-icons/bs';

import { useCubed } from '../../contexts/CubedContext';
import { AnimationNode, useNodes } from '../../contexts/NodesContext';

import CreatePad from './CreatePad';

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

    const newNode: AnimationNode = {
      signature: 'Animation',
      id: id,
      cubiconNodeId: cubiconNodeId,
      name: 'anim-create',
      type: 'Create',
      object: new cubed!.Create({
        cubicon: cubicon,
        duration: duration,
      }),
      pad: <CreatePad nodeId={id} setCurrentPad={setCurrentPad} />,
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

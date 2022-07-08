import { FC, useId } from 'react';
import { Button } from 'react-bootstrap';
import { BsFillPlayFill } from 'react-icons/bs';

import { useCubed } from '../../contexts/CubedContext';
import { useNodes } from '../../contexts/NodesContext';

interface Props {
  name: string;
  sideLength: number;

  setCurrentPad: (currentPad: JSX.Element) => void;
}

const SquareRenderPad: FC<Props> = ({ name, sideLength, setCurrentPad }) => {
  const id = useId();

  const { cubed, group } = useCubed();
  const { addNode } = useNodes();

  const handleCreateNode = () => {
    const newNode = {
      id: id,
      name: name,
      object: new cubed!.Square({
        group: group!,
        sideLength: sideLength,
      }).render(),
    };

    addNode(newNode);

    setCurrentPad(<></>);
  };

  return (
    <Button onClick={handleCreateNode}>
      <BsFillPlayFill />
    </Button>
  );
};

export default SquareRenderPad;

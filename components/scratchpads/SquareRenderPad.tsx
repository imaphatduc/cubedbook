import { FC, useId } from 'react';
import { Button } from 'react-bootstrap';
import { BsFillPlayFill } from 'react-icons/bs';

import { SHAPE_CONFIG } from 'cubecubed';

import { useCubed } from '../../contexts/CubedContext';
import { CubiconNode, useNodes } from '../../contexts/NodesContext';

import SquarePad from './SquarePad';

interface Props {
  name: string;
  sideLength: number;
  CONFIG: SHAPE_CONFIG;

  setCurrentPad: (currentPad: JSX.Element) => void;
}

const SquareRenderPad: FC<Props> = ({
  name,
  sideLength,
  CONFIG,
  setCurrentPad,
}) => {
  const id = useId();

  const { cubed, group } = useCubed();
  const { addNode } = useNodes();

  const handleCreateNode = () => {
    const newNode: CubiconNode = {
      signature: 'Cubicon',
      id: id,
      name: name,
      type: 'Square',
      object: new cubed!.Square({
        group: group!,
        sideLength: sideLength,
        CONFIG: CONFIG,
      }).render(),
      pad: <SquarePad nodeId={id} setCurrentPad={setCurrentPad} />,
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

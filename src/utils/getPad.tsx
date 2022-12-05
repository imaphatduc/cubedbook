import { CirclePad } from '../components/pads/CirclePad';
import { RectanglePad } from '../components/pads/RectanglePad';
import { SquarePad } from '../components/pads/SquarePad';
import { ICubiconNode } from '../contexts/CubedContext';

export const getPad = (cubiconNode: ICubiconNode<any>) => {
  switch (cubiconNode.label.toLowerCase()) {
    case 'rectangle': {
      return <RectanglePad node={cubiconNode} />;
    }

    case 'square': {
      return <SquarePad node={cubiconNode} />;
    }

    case 'circle': {
      return <CirclePad node={cubiconNode} />;
    }

    default:
      return <></>;
  }
};

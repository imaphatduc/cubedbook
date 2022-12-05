import { CirclePad } from '../components/pads/CirclePad';
import { RectanglePad } from '../components/pads/RectanglePad';
import { SquarePad } from '../components/pads/SquarePad';
import { ICubiconNode } from '../contexts/CubedContext';

export const getPad = (cubiconNode: ICubiconNode) => {
  switch (cubiconNode.label.toLowerCase()) {
    case 'rectangle': {
      return (
        // @ts-ignore
        <RectanglePad name={cubiconNode.name} rectangle={cubiconNode.cubicon} />
      );
    }

    case 'square': {
      // @ts-ignore
      return <SquarePad name={cubiconNode.name} square={cubiconNode.cubicon} />;
    }

    case 'circle': {
      // @ts-ignore
      return <CirclePad name={cubiconNode.name} circle={cubiconNode.cubicon} />;
    }

    default:
      return <></>;
  }
};

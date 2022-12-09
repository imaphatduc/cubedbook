import { CirclePad } from '../components/pads/CirclePad';
import { CreateShapePad } from '../components/pads/CreateShapePad';
import { RectanglePad } from '../components/pads/RectanglePad';
import { SquarePad } from '../components/pads/SquarePad';
import { IAnimationNode, ICubiconNode } from '../contexts/CubedContext';

export const getCubiconPad = (cubiconNode: ICubiconNode<any>) => {
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

export const getAnimationPad = (label: string) => {
  switch (label.toLowerCase()) {
    case 'createshape': {
      return <CreateShapePad />;
    }

    default:
      return <></>;
  }
};

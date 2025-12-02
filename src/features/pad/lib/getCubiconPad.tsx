import {
  RectanglePad,
  SquarePad,
  CirclePad,
  type ICubiconNode,
} from "@/features/cubicon";

export const getCubiconPad = (cubiconNode: ICubiconNode<any>) => {
  switch (cubiconNode.label.toLowerCase()) {
    case "rectangle": {
      return <RectanglePad node={cubiconNode} />;
    }

    case "square": {
      return <SquarePad node={cubiconNode} />;
    }

    case "circle": {
      return <CirclePad node={cubiconNode} />;
    }

    default:
      return <></>;
  }
};

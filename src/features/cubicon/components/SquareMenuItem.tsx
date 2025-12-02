import { PLANE_SHAPE_DEFAULT_CONFIG, Square, Vector2 } from "cubecubed";
import { useCubed } from "@/contexts";
import { type IGroupNode } from "@/features/group";
import { CtxMenuItem } from "@/features/menu";

interface Props {
  groupNode: IGroupNode;
}

export const SquareMenuItem = ({ groupNode }: Props) => {
  const { setCurrentNodeSignature, addCubiconNode } = useCubed();

  const label = "Square";

  const renderSquare = () => {
    const square = new Square({
      // @ts-ignore
      group: groupNode.group,
      position: new Vector2(0, 0),
      sideLength: 2,
      CONFIG: PLANE_SHAPE_DEFAULT_CONFIG,
    }).render();

    const name = `${label.toLowerCase()}_${
      groupNode.cubiconNodes.filter(
        (node) => node.name.split("_")[0] === label.toLowerCase()
      ).length
    }`;

    // @ts-ignore
    const cubiconNode = addCubiconNode<Square>(
      groupNode.id,
      name,
      label,
      square
    );

    setCurrentNodeSignature({
      id: cubiconNode.id,
      type: "Cubicon",
    });
  };

  return <CtxMenuItem label={label} onClick={renderSquare} />;
};

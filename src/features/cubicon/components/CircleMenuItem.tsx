import { Circle, PLANE_SHAPE_DEFAULT_CONFIG, Vector2 } from "cubecubed";
import { useCubed } from "@/contexts";
import { type IGroupNode } from "@/features/group";
import { CtxMenuItem } from "@/features/menu";

interface Props {
  groupNode: IGroupNode;
}

export const CircleMenuItem = ({ groupNode }: Props) => {
  const { setCurrentNodeSignature, addCubiconNode } = useCubed();

  const label = "Circle";

  const renderCircle = () => {
    const circle = new Circle({
      // @ts-ignore
      group: groupNode.group,
      position: new Vector2(0, 0),
      radius: 2,
      CONFIG: PLANE_SHAPE_DEFAULT_CONFIG,
    }).render();

    const name = `${label.toLowerCase()}_${
      groupNode.cubiconNodes.filter(
        (node) => node.name.split("_")[0] === label.toLowerCase()
      ).length
    }`;

    // @ts-ignore
    const cubiconNode = addCubiconNode<Circle>(
      groupNode.id,
      name,
      label,
      circle
    );

    setCurrentNodeSignature({
      id: cubiconNode.id,
      type: "Cubicon",
    });
  };

  return <CtxMenuItem label={label} onClick={renderCircle} />;
};

import { Circle, PLANE_SHAPE_DEFAULT_CONFIG, Vector2 } from 'cubecubed';
import { NodeSignature } from '../../../App';

import { IGroupNode, useCubed } from '../../../contexts/CubedContext';
import { CtxMenuItem } from '../../menu/CtxMenuItem';

interface Props {
  groupNode: IGroupNode;
  setCurrentNodeSignature: (currentNodeSignature: NodeSignature) => void;
}

export const CircleMenuItem = ({
  groupNode,
  setCurrentNodeSignature,
}: Props) => {
  const { addCubiconNode } = useCubed();

  const label = 'Circle';

  return (
    <CtxMenuItem
      label={label}
      onClick={() => {
        const circle = new Circle({
          // @ts-ignore
          group: groupNode.group,
          position: new Vector2(0, 0),
          radius: 2,
          CONFIG: PLANE_SHAPE_DEFAULT_CONFIG,
        }).render();

        const name = `${label.toLowerCase()}_${
          groupNode.cubiconNodes.filter(
            (node) => node.name.split('_')[0] === label.toLowerCase()
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
          type: 'Cubicon',
        });
      }}
    />
  );
};

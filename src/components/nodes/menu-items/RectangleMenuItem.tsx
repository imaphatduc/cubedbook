import { PLANE_SHAPE_DEFAULT_CONFIG, Rectangle, Vector2 } from 'cubecubed';
import { NodeSignature } from '../../../App';

import { IGroupNode, useCubed } from '../../../contexts/CubedContext';
import { CtxMenuItem } from '../../menu/CtxMenuItem';

interface Props {
  groupNode: IGroupNode;
  setCurrentNodeSignature: (currentNodeSignature: NodeSignature) => void;
}

export const RectangleMenuItem = ({
  groupNode,
  setCurrentNodeSignature,
}: Props) => {
  const { addCubiconNode } = useCubed();

  const label = 'Rectangle';

  return (
    <CtxMenuItem
      label={label}
      onClick={() => {
        const rectangle = new Rectangle({
          // @ts-ignore
          group: groupNode.group,
          position: new Vector2(0, 0),
          width: 3,
          height: 2,
          CONFIG: PLANE_SHAPE_DEFAULT_CONFIG,
        }).render();

        const name = `${label.toLowerCase()}_${
          groupNode.cubiconNodes.filter(
            (node) => node.name.split('_')[0] === label.toLowerCase()
          ).length
        }`;

        // @ts-ignore
        const cubiconNode = addCubiconNode<Rectangle>(
          groupNode.id,
          name,
          label,
          rectangle
        );

        setCurrentNodeSignature({
          id: cubiconNode.id,
          type: 'Cubicon',
        });
      }}
    />
  );
};

import { PLANE_SHAPE_DEFAULT_CONFIG, Square, Vector2 } from 'cubecubed';

import { IGroupNode, useCubed } from '../../../contexts/CubedContext';
import { CtxMenuItem } from '../../menu/CtxMenuItem';

interface Props {
  groupNode: IGroupNode;
}

export const SquareMenuItem = ({ groupNode }: Props) => {
  const { addCubiconNode } = useCubed();

  const label = 'Square';

  return (
    <CtxMenuItem
      label={label}
      onClick={() => {
        const square = new Square({
          // @ts-ignore
          group: groupNode.group,
          position: new Vector2(0, 0),
          sideLength: 2,
          CONFIG: PLANE_SHAPE_DEFAULT_CONFIG,
        }).render();

        const name = `${label.toLowerCase()}_${
          groupNode.cubiconNodes.filter(
            (node) => node.name.split('_')[0] === label.toLowerCase()
          ).length
        }`;

        // @ts-ignore
        addCubiconNode(groupNode.id, name, label, square);
      }}
    />
  );
};

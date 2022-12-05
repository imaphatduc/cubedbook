import { Rectangle } from 'cubecubed';

import { IGroupNode, useCubed } from '../../../contexts/CubedContext';
import { CtxMenuItem } from '../../menu/CtxMenuItem';

interface Props {
  groupNode: IGroupNode;
}

export const RectangleMenuItem = ({ groupNode }: Props) => {
  const { addCubiconNode } = useCubed();

  const label = 'Rectangle';

  return (
    <CtxMenuItem
      label={label}
      onClick={() => {
        const rectangle = new Rectangle({
          // @ts-ignore
          group: groupNode.group,
          width: 3,
          height: 2,
        }).render();

        const name = `${label.toLowerCase()}_${
          groupNode.cubiconNodes.filter(
            (node) => node.name.split('_')[0] === label.toLowerCase()
          ).length
        }`;

        // @ts-ignore
        addCubiconNode(groupNode.id, name, label, rectangle);
      }}
    />
  );
};

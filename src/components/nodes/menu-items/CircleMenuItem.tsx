import { Circle } from 'cubecubed';

import { IGroupNode, useCubed } from '../../../contexts/CubedContext';
import { CtxMenuItem } from '../../menu/CtxMenuItem';

interface Props {
  groupNode: IGroupNode;
}

export const CircleMenuItem = ({ groupNode }: Props) => {
  const { addCubiconNode } = useCubed();

  const label = 'Circle';

  return (
    <CtxMenuItem
      label={label}
      onClick={() => {
        const circle = new Circle({
          // @ts-ignore
          group: groupNode.group,
          radius: 2,
        }).render();

        const name = `${label.toLowerCase()}_${
          groupNode.cubiconNodes.filter(
            (node) => node.name.split('_')[0] === label.toLowerCase()
          ).length
        }`;

        // @ts-ignore
        addCubiconNode(groupNode.id, name, label, circle);
      }}
    />
  );
};

// @ts-nocheck
import { Square } from 'cubecubed';

import { IGroupNode, useCubed } from '../../../contexts/CubedContext';
import { CtxMenuItem } from '../../menu/CtxMenuItem';
import { SquarePad } from '../../pads/SquarePad';

interface Props {
  groupNode: IGroupNode;
}

export const SquareMenuItem = ({ groupNode }: Props) => {
  const { addCubicon } = useCubed();

  const label = 'Square';

  return (
    <CtxMenuItem
      label={label}
      onClick={() => {
        const square = new Square({
          group: groupNode.group,
          sideLength: 2,
        }).render();

        const name = `${label.toLowerCase()}_${
          groupNode.cubiconNodes.filter(
            (node) => node.name.split('_')[0] === label.toLowerCase()
          ).length
        }`;

        addCubicon(
          groupNode.id,
          name,
          square,
          <SquarePad name={name} square={square} />
        );
      }}
    />
  );
};

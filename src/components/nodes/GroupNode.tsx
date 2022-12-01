import { IGroupNode } from '../../contexts/CubedContext';

interface Props {
  groupNode: IGroupNode;
}

export const GroupNode = ({ groupNode }: Props) => {
  return <div>{groupNode.group.name}</div>;
};

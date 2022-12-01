import { ICubiconNode } from '../../contexts/CubedContext';

interface Props {
  cubiconNode: ICubiconNode;
}

export const CubiconNode = ({ cubiconNode }: Props) => {
  return (
    <div className="hover:text-[#c8d3f5] cursor-pointer">
      {cubiconNode.name}
    </div>
  );
};

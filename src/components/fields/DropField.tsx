import { InputHTMLAttributes } from 'react';
import { useDrop } from 'react-dnd';
import { ICubiconNode } from '../../contexts/CubedContext';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  onDrop: (item: any) => void;
}

export const DropField = ({ onDrop, ...props }: Props) => {
  const [collected, drop] = useDrop<{ cubiconNode: ICubiconNode<any> }>(() => ({
    accept: 'CubiconNode',
    drop: onDrop,
  }));

  return (
    <input
      {...props}
      disabled
      ref={drop}
      className="max-w-[10rem] border-sm bg-[#0c0c0c] px-2 focus:outline-none"
    />
  );
};

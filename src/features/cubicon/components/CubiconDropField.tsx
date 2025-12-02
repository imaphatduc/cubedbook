import { type InputHTMLAttributes } from "react";
import { useDrop } from "react-dnd";
import { type ICubiconNode } from "../types";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  onDrop: (item: any) => void;
}

export const CubiconDropField = ({ onDrop, ...props }: Props) => {
  const [, drop] = useDrop<{ cubiconNode: ICubiconNode<any> }>(() => ({
    accept: "CubiconNode",
    drop: onDrop,
  }));

  return (
    <input
      {...props}
      disabled
      ref={drop}
      className="max-w-40 border-sm bg-[#0c0c0c] px-2 focus:outline-none"
    />
  );
};

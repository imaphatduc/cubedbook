import { type InputHTMLAttributes, type Ref } from "react";
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
    <div ref={drop as unknown as Ref<HTMLDivElement>}>
      <input
        {...props}
        disabled
        className="max-w-40 border-sm bg-[#0c0c0c] px-2 focus:outline-none"
      />
    </div>
  );
};

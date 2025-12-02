import { useCubed } from "@/contexts";

interface Props {
  type: "2d" | "3d";
  name?: string;
}

export const AddGroupButton = ({ type, name = "hello-group" }: Props) => {
  const { addGroupNode } = useCubed();

  return (
    <button
      onClick={() => addGroupNode(name, type)}
      style={{
        borderRadius: "calc(infinity * 1px)",
      }}
    >
      {type.toUpperCase()}
    </button>
  );
};

import { useCubed } from "@/contexts";
import { GroupNode } from "@/features/group";
import { SectionHeader } from "@/features/section";
import { AddGroupButton } from "./AddGroupButton";

export const SceneSection = () => {
  const { groupNodes } = useCubed();

  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <SectionHeader header="Manuscript" />

        <div className="flex gap-1 text-md text-[#c8d3f5] font-extrabold">
          <AddGroupButton type="2d" />
          <AddGroupButton type="3d" />
        </div>
      </div>

      {groupNodes.map((groupNode) => (
        <GroupNode key={groupNode.id} groupNode={groupNode} />
      ))}
    </div>
  );
};

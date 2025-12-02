import { useCubed } from "@/contexts";
import { GroupNode } from "@/features/group";
import { SectionHeader } from "@/features/section";

export const SceneSection = () => {
  const { groupNodes, addGroupNode } = useCubed();

  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <SectionHeader header="Manuscript" />

        <div className="flex gap-1 text-md text-[#c8d3f5] font-extrabold">
          <button
            onClick={() => addGroupNode("hello-group", "2d")}
            style={{
              borderRadius: "calc(infinity * 1px)",
            }}
          >
            2D
          </button>

          <button
            style={{
              borderRadius: "calc(infinity * 1px)",
            }}
          >
            3D
          </button>
        </div>
      </div>

      {groupNodes.map((groupNode, i) => (
        <GroupNode key={i} groupNode={groupNode} />
      ))}
    </div>
  );
};

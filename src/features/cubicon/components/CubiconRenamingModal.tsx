import { useCubed } from "@/contexts";
import { InputField } from "@/features/input-field";
import { useRef } from "react";
import Modal from "react-modal";

interface Props {
  isRenaming: boolean;
  setIsRenaming: (d: boolean) => void;
  groupNodeId: string;
  cubiconNodeId: string;
  cubiconNodeName: string;
}

export const CubiconRenamingModal = ({
  isRenaming,
  setIsRenaming,
  groupNodeId,
  cubiconNodeId,
  cubiconNodeName,
}: Props) => {
  const { updateCubiconNode } = useCubed();

  const nameRef = useRef<HTMLInputElement>(null);

  const renameNode = () => {
    if (nameRef.current) {
      setIsRenaming(false);

      updateCubiconNode(groupNodeId, cubiconNodeId, {
        name: nameRef.current.value,
      });
    }
  };

  return (
    <Modal
      isOpen={isRenaming}
      onRequestClose={() => setIsRenaming(false)}
      className="w-fit h-fit mx-auto py-12"
      style={{
        overlay: {
          backgroundColor: "rgba(0,0,0,0.8)",
        },
      }}
    >
      <form className="flex flex-col items-center gap-3" onSubmit={renameNode}>
        <InputField
          ref={nameRef}
          defaultValue={cubiconNodeName}
          autoFocus
          style={{ backgroundColor: "#fff", color: "#000" }}
        />

        <div className="flex justify-between gap-3">
          <button type="submit" className="text-white">
            Rename
          </button>
          <button className="text-white" onClick={() => setIsRenaming(false)}>
            Close
          </button>
        </div>
      </form>
    </Modal>
  );
};

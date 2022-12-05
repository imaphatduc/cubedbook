import { MouseEvent, useRef, useState } from 'react';
import { useMenuState } from '@szhsin/react-menu';
import Modal from 'react-modal';

import {
  ICubiconNode,
  IGroupNode,
  useCubed,
} from '../../contexts/CubedContext';
import { CtxMenu } from '../menu/CtxMenu';
import { CtxMenuItem } from '../menu/CtxMenuItem';
import { InputField } from '../fields/InputField';

interface Props {
  groupNode: IGroupNode;
  cubiconNode: ICubiconNode<any>;
  currentNodeId: string;
  setCurrentNodeId: (currentNodeId: string) => void;
}

export const CubiconNode = ({
  groupNode,
  cubiconNode,
  currentNodeId,
  setCurrentNodeId,
}: Props) => {
  const { renameCubiconNode, removeCubiconNode } = useCubed();

  const [menuProps, toggleMenu] = useMenuState();
  const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });

  const [isRenaming, setIsRenaming] = useState(false);

  const nameRef = useRef<HTMLInputElement>();

  const openMenu = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    toggleMenu(true);
    setAnchorPoint({ x: e.clientX, y: e.clientY });
  };

  const renameNode = () => {
    setIsRenaming(false);

    renameCubiconNode(groupNode.id, cubiconNode.id, nameRef.current.value);
  };

  const removeNode = () => {
    removeCubiconNode(groupNode.id, cubiconNode.id);

    groupNode.group.remove([cubiconNode.cubicon]);

    setCurrentNodeId('');
  };

  return (
    <div
      className="hover:text-[#c8d3f5] cursor-pointer"
      onContextMenu={openMenu}
    >
      <div
        className={`px-2 rounded-sm ${
          cubiconNode.id === currentNodeId &&
          'bg-gray-600 hover:text-gray-200 font-bold'
        }`}
        onClick={() => {
          setCurrentNodeId(cubiconNode.id);
        }}
      >
        {cubiconNode.name}
      </div>

      <CtxMenu
        menuProps={menuProps}
        toggleMenu={toggleMenu}
        anchorPoint={anchorPoint}
      >
        <CtxMenuItem
          label="Rename"
          onClickCapture={() => setIsRenaming(true)}
        />
        <CtxMenuItem label="Remove" onClickCapture={removeNode} />
      </CtxMenu>

      <Modal
        isOpen={isRenaming}
        onRequestClose={() => setIsRenaming(false)}
        className="w-fit h-fit mx-auto py-12"
        style={{
          overlay: {
            backgroundColor: 'rgba(0,0,0,0.8)',
          },
        }}
      >
        <form
          className="flex flex-col items-center gap-3"
          onSubmit={renameNode}
        >
          <InputField
            ref={nameRef}
            defaultValue={cubiconNode.name}
            autoFocus
            style={{ backgroundColor: '#fff', color: '#000' }}
          />

          <div className="flex justify-between gap-3">
            <button
              type="submit"
              className="bg-white text-black rounded-sm w-24 hover:bg-gray-200"
            >
              Rename
            </button>
            <button
              className="bg-white text-black rounded-sm w-24 hover:bg-gray-200"
              onClick={() => setIsRenaming(false)}
            >
              Close
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

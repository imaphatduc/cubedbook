import { Menu, MenuButton, MenuState } from '@szhsin/react-menu';
import { Plus } from 'phosphor-react';

import { useCubed } from '../../contexts/CubedContext';
import { menuClassName } from '../menu/CtxMenu';
import { CtxMenuItem } from '../menu/CtxMenuItem';

export const CreateGroupMenu = () => {
  const { addGroup } = useCubed();

  return (
    <Menu
      menuClassName={menuClassName}
      menuButton={
        <MenuButton className="rounded-md hover:bg-[#666] p-2 h-fit">
          <Plus size={15} />
        </MenuButton>
      }
    >
      <CtxMenuItem
        label="2D Group"
        onClick={() => addGroup('hello-group', '2d')}
      />
      <CtxMenuItem label="3D Group" />
    </Menu>
  );
};

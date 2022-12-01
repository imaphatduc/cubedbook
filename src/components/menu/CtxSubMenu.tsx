import { SubMenu, SubMenuProps } from '@szhsin/react-menu';
import { CaretRight } from 'phosphor-react';

import { menuClassName } from './CtxMenu';
import { menuItemClassName } from './CtxMenuItem';

export const CtxSubMenu = (props: SubMenuProps) => {
  return (
    <SubMenu
      {...props}
      label={
        <div className="flex items-center">
          <>
            {props.label}
            <CaretRight size={15} className="ml-auto h-3" />
          </>
        </div>
      }
      offsetY={-10}
      className="relative"
      menuClassName={menuClassName}
      itemProps={{ className: menuItemClassName }}
    />
  );
};

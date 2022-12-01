import { PropsWithChildren } from 'react';
import { Menu, MenuProps } from '@szhsin/react-menu';

import { menuClassName } from '../menu/CtxMenu';

export const PressMenu = ({
  children,
  ...props
}: PropsWithChildren<MenuProps>) => {
  return (
    <Menu {...props} menuClassName={menuClassName}>
      {children}
    </Menu>
  );
};
